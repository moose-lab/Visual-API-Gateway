"""Fetch only exact public documentation links printed in the archived SDK source."""
import hashlib
import json
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timezone
from pathlib import Path
from urllib.request import Request, urlopen
from urllib.error import HTTPError

from bs4 import BeautifulSoup

OUT = Path(__file__).resolve().parent / "public-docs"
OUT.mkdir(exist_ok=True)
URLS = {
    "concept-system-one": "https://docs.typesafe.ai/concepts/system-one",
    "concept-state": "https://docs.typesafe.ai/concepts/state",
    "primitive-choice": "https://docs.typesafe.ai/primitives/choice",
    "primitive-noul": "https://docs.typesafe.ai/primitives/noul",
    "primitive-score": "https://docs.typesafe.ai/primitives/score",
    # Explicit links in concept-system-one.html fetched in the first pass.
    "ai-primer": "https://docs.typesafe.ai/introduction/machine-learning-primer",
    "confidence": "https://docs.typesafe.ai/confidence",
}


def fetch(item):
    name, url = item
    stamp = datetime.now(timezone.utc).isoformat()
    try:
        with urlopen(Request(url, headers={"User-Agent": "VLM-Public-Research/1.0"}), timeout=35) as response:
            raw = response.read()
            meta = {"url": url, "final_url": response.url, "status": response.status, "headers": dict(response.headers)}
    except HTTPError as error:
        raw = error.read()
        meta = {"url": url, "final_url": error.url, "status": error.code}
    except Exception as error:
        return {"url": url, "error": str(error), "captured_at": stamp}
    (OUT / f"{name}.html").write_bytes(raw)
    soup = BeautifulSoup(raw, "html.parser")
    for tag in soup(["script", "style", "nav", "footer", "header"]):
        tag.decompose()
    main = soup.find("main") or soup
    (OUT / f"{name}.txt").write_text(main.get_text("\n", strip=True) + "\n", encoding="utf-8")
    links = sorted({tag["href"] for tag in main.find_all("a", href=True)})
    meta.update({"captured_at": stamp, "sha256": hashlib.sha256(raw).hexdigest(), "links": links})
    (OUT / f"{name}.meta.json").write_text(json.dumps(meta, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    return {"url": url, "status": meta["status"], "bytes": len(raw)}


if __name__ == "__main__":
    with ThreadPoolExecutor(max_workers=5) as pool:
        results = list(pool.map(fetch, URLS.items()))
    (OUT / "fetch-summary.json").write_text(json.dumps(results, indent=2) + "\n", encoding="utf-8")
    print(json.dumps(results, ensure_ascii=False))

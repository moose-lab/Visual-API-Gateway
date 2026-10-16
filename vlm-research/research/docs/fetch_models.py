import concurrent.futures, json, pathlib, re
from fetch_corpus import ROOT, fetch

raw=(ROOT/'vlm.run__gateway__models.raw').read_text(encoding='utf-8')
urls=sorted({'https://vlm.run'+u for u in re.findall(r'href="(/gateway/models/[^"#?]+)"',raw)})
urls+=['https://docs.vlm.run/gateway/extra-kwargs.md']
with concurrent.futures.ThreadPoolExecutor(max_workers=8) as ex:
    results=list(ex.map(fetch,urls))
(ROOT/'model_fetch_index.json').write_text(json.dumps(results,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps({'pages':len(results),'errors':[r for r in results if 'error' in r]},ensure_ascii=False,indent=2))

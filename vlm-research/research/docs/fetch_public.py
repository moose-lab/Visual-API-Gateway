import concurrent.futures, hashlib, json, pathlib, urllib.request

ROOT = pathlib.Path(__file__).resolve().parent
URLS = {
    'gateway': 'https://vlm.run/gateway',
    'site_llms': 'https://vlm.run/llms.txt',
    'site_sitemap': 'https://vlm.run/sitemap.xml',
    'docs_index': 'https://docs.vlm.run/',
    'docs_llms': 'https://docs.vlm.run/llms.txt',
    'docs_sitemap': 'https://docs.vlm.run/sitemap.xml',
}

def fetch(item):
    name, url = item
    try:
        req = urllib.request.Request(url, headers={'User-Agent':'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=40) as resp:
            data=resp.read()
            meta={'url': url, 'final_url': resp.url, 'status': resp.status, 'content_type': resp.headers.get('Content-Type'), 'sha256': hashlib.sha256(data).hexdigest()}
        path=ROOT / (name + '.raw')
        path.write_bytes(data)
        return name, meta
    except Exception as exc:
        return name, {'url':url,'error':str(exc)}

if __name__ == '__main__':
    with concurrent.futures.ThreadPoolExecutor(max_workers=6) as ex:
        results=dict(ex.map(fetch, URLS.items()))
    (ROOT/'fetch_index.json').write_text(json.dumps(results,ensure_ascii=False,indent=2),encoding='utf-8')
    print(json.dumps(results,ensure_ascii=False,indent=2))

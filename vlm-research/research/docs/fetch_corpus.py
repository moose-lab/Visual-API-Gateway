import concurrent.futures, hashlib, json, pathlib, re, urllib.request
from html.parser import HTMLParser

ROOT=pathlib.Path(__file__).resolve().parent

class Text(HTMLParser):
    def __init__(self):
        super().__init__(); self.hidden=0; self.parts=[]
    def handle_starttag(self, tag, attrs):
        if tag in ('script','style'): self.hidden+=1
        if tag in ('p','div','li','h1','h2','h3','h4','tr','br','section'): self.parts.append('\n')
    def handle_endtag(self, tag):
        if tag in ('script','style'): self.hidden=max(0,self.hidden-1)
        if tag in ('p','div','li','h1','h2','h3','h4','tr','section'): self.parts.append('\n')
    def handle_data(self, data):
        if not self.hidden: self.parts.append(data)
    def get(self):
        return '\n'.join(line.strip() for line in ''.join(self.parts).splitlines() if line.strip())

def fetch(url):
    name=url.replace('https://','').replace('/','__')
    if not name.endswith('.md'): name+='.raw'
    try:
        req=urllib.request.Request(url,headers={'User-Agent':'Mozilla/5.0'})
        with urllib.request.urlopen(req,timeout=40) as resp:
            data=resp.read(); meta={'url':url,'final_url':resp.url,'status':resp.status,'sha256':hashlib.sha256(data).hexdigest(),'path':name}
        (ROOT/name).write_bytes(data)
        if data[:200].lower().find(b'<!doctype html')>=0 or data[:100].lower().find(b'<html')>=0:
            parser=Text(); parser.feed(data.decode('utf-8')); (ROOT/(name+'.txt')).write_text(parser.get(),encoding='utf-8')
        return meta
    except Exception as exc: return {'url':url,'error':str(exc)}

if __name__=='__main__':
    urls=re.findall(r'\((https://docs.vlm.run/[^)]+\.md)\)',(ROOT/'docs_llms.raw').read_text(encoding='utf-8'))
    urls=[u for u in urls if any(x in u for x in ['/gateway/','/agents/','/skills/','/platform/','/pricing.md','/api-reference/index.md','/webhooks.md'])]
    urls+=['https://vlm.run/gateway/models','https://vlm.run/gateway/models/frontier-models','https://vlm.run/gateway/SKILL.md','https://vlm.run/blog/introducing-gateway','https://vlm.run/blog/orion-2','https://vlm.run/gateway']
    with concurrent.futures.ThreadPoolExecutor(max_workers=10) as ex:
        results=list(ex.map(fetch,urls))
    (ROOT/'corpus_index.json').write_text(json.dumps(results,ensure_ascii=False,indent=2),encoding='utf-8')
    print(json.dumps({'pages':len(results),'errors':[r for r in results if 'error' in r]},ensure_ascii=False,indent=2))

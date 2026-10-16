# 第一轮证据离线核查

核查日期：2026-10-14；API采集日期：2026-10-11。本脚本只解析第一轮证据及当前研究脚本/报告链接，不重新访问API。第二轮运行结果另见round2-verification.md。

|检查|结果|说明|
|---|---|---|
|归档SHA-256完整性|通过|{"files": 1063, "mismatches": []}|
|HTTP回包与采集时hash一致|通过|{"responses": 50, "mismatches": []}|
|Python脚本静态语法|通过|{"files": 13, "errors": []}|
|报告本地链接|通过|{"links": 441, "missing": []}|
|24模型目录与官网served ID对齐|通过|{"api": 24, "website_total": 26}|
|视觉单样本字段|通过|{"expected_matches": true, "scope": "单次样本，不证明全schema强约束"}|
|OCR三行样本文本与归一化坐标|通过|{"lines": 3}|
|PDF两页回包|通过|"仅检查响应两页内容，内部fan-out未验证"|
|Embedding维度及数值|通过|{"vectors": 2, "dimensions": [32, 32]}|
|SSE文字控制样本|通过|{"events": 8, "done": true}|
|OCR JSON SSE可拼接|通过|{"events": 8, "object": "doc.ocr.lines"}|
|System One confidence公式单样本|通过|{"calculated": 0.9997378591522463, "returned": 0.9997378591522463, "scope": "不验证经验校准"}|
|Orion2工具事件存在|通过|{"tool_events": 4, "scope": "未取得tool-result/stdout/退出状态，不将答案视为沙箱成功证明"}|
|MCP七工具|通过|{"count": 7}|
|响应报告成本加总|通过|{"reported_post_cost_usd": "0.026022", "scope": "未核对账户扣款"}|
|归档与交付文件Key模式检查|通过|{"files": 1107, "candidate_files": [], "scope": "仅检测sk-后至少25个字母数字的模式；不输出匹配内容"}|

通过表示归档完整性及对应有限样本条件成立，不表示服务全部功能可用、隐藏实现已恢复或所有模型质量通过。实际403、404、WebSocket超时及回答不遵循指令等结果保留在运行记录。

环境包版本：`{"python": "3.13.3", "Pillow": "11.2.1", "requests": "2.32.3", "websockets": "13.1"}`。

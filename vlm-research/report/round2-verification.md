# 第二轮离线核查

只解析本地证据，未重新请求API。核查日期：2026-10-14。

|检查|结果|说明|
|---|---|---|
|第一轮历史证据完整性|通过|{"files": 1063, "mismatches": []}|
|第二轮证据完整性|通过|{"files": 338, "mismatches": []}|
|HTTP原始回包与采集hash|通过|{"responses": 58, "mismatches": []}|
|目录变化|通过|{"count": 26, "added": ["google/embeddinggemma-2", "lightonai/lightonocr-3-4b"]}|
|四个OCR Auto路由观察|通过|{"ocr_auto_ocr": ["paddleocr/pp-ocrv6", "paddleocr"], "ocr_auto_markdown_native_pdf": ["vlm-run/ocr:auto", "xberg"], "ocr_auto_layout": ["rednote-hilab/dots.mocr", "vllm"], "ocr_auto_markdown_image": ["rednote-hilab/dots.mocr", "vllm"]}|
|原生PDF内容|通过|{"scope": "单样本提取；不验证内部parser版本"}|
|Diffusion JSON实际拒绝|通过|{"scope": "请求明确给json_object"}|
|MCP prompts|通过|{"prompts": []}|
|MCP resources|通过|{"resources": []}|
|MCP resourceTemplates|通过|{"resourceTemplates": []}|
|WebSocket单帧完整会话|通过|{"events": ["session.created", "decision", "session.stats"], "scope": "不是并发或性能基准"}|
|随机SHA256输出核对|通过|{"scope": "验证最终计算值，不证明沙箱进程隔离或完整内部实现"}|
|三次调用与两条重试反馈|通过|{"calls": 3, "retries": 2}|
|同一会话token差异|通过|{"with_token": 200, "without_token": 403, "scope": "不归因旧404"}|
|成本加总|通过|{"USD": "0.059007", "scope": "回包报告，未核账单"}|
|上游提示词和模板归档|通过|{"method_prompts": 8, "templates": 3}|
|研究脚本静态语法|通过|{"files": 13, "failed": []}|
|全部报告本地链接|通过|{"missing": []}|
|API Key模式扫描|通过|{"files": 1445, "candidate_files": [], "scope": "仅sk-加25位字母数字模式，不扫描未引用Git仓库全体文件"}|
|运行token字段脱敏|通过|{"candidate_files": []}|

通过仅表示以上归档与有限样本条件成立，不表示全部后台、全部prompt或部署源码已恢复。

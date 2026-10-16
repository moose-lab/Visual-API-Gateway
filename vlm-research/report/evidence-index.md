# 证据索引

行号指当前本地快照；格式化JS行号不是线上压缩文件行号。原始JS的URL/哈希保存在assets索引，pretty目录是仅格式化副本。原始PDF保留，文本抽取加了页标记。OpenAPI已pretty-print，meta里分别记录原HTTP字节hash与保存快照hash。

|支持的结论|证据类|本地锚点|来源URL|
|---|---|---|---|
|部署版本|RUNTIME|[research/runtime/gateway_health.response.json:3](../research/runtime/gateway_health.response.json)|https://gateway.vlm.run/health|
|24模型元数据|RUNTIME|[research/runtime/gateway_models.response.json:3](../research/runtime/gateway_models.response.json)|https://gateway.vlm.run/v1/openai/models|
|Qwen backend与指纹|RUNTIME|[research/runtime/probe_text.response.json:22](../research/runtime/probe_text.response.json)|https://gateway.vlm.run/v1/openai/chat/completions|
|OCR backend与坐标|RUNTIME|[research/runtime/probe_ocr.response.json:7](../research/runtime/probe_ocr.response.json)|https://gateway.vlm.run/v1/openai/chat/completions|
|PDF两页结果|RUNTIME|[research/runtime/probe_pdf.response.json:14](../research/runtime/probe_pdf.response.json)|https://gateway.vlm.run/v1/openai/chat/completions|
|图片schema返回|RUNTIME|[research/runtime/probe_vision_schema.response.json:11](../research/runtime/probe_vision_schema.response.json)|https://gateway.vlm.run/v1/openai/chat/completions|
|System One Qwen|RUNTIME|[research/runtime/probe_systemone.response.json:4](../research/runtime/probe_systemone.response.json)|https://gateway.vlm.run/typesafe/v1/systemone|
|System One diffusion|RUNTIME|[research/runtime/probe_systemone_diffusion.response.json:4](../research/runtime/probe_systemone_diffusion.response.json)|https://gateway.vlm.run/typesafe/v1/systemone|
|Orion-2流工具事件|RUNTIME|[research/runtime/probe_orion2_tool.response.txt:35](../research/runtime/probe_orion2_tool.response.txt)|https://api.vlm.run/v1/openai/chat/completions|
|Orion-2历史404|RUNTIME|[research/runtime/probe_orion2_history.response.json:2](../research/runtime/probe_orion2_history.response.json)|https://api.vlm.run/v1/chat/messages?session_id=7820bcb3-743d-4548-9097-9cbcd7a24229|
|MCP七工具schema|RUNTIME|[research/runtime/mcp_tools.response.json:5](../research/runtime/mcp_tools.response.json)|https://gateway.vlm.run/mcp|
|MCP公开instructions|RUNTIME|[research/runtime/mcp_initialize.response.json:23](../research/runtime/mcp_initialize.response.json)|https://gateway.vlm.run/mcp|
|Gemini账户限制|RUNTIME|[research/runtime/probe_provider.response.json:5](../research/runtime/probe_provider.response.json)|https://gateway.vlm.run/v1/openai/chat/completions|
|Hub invoice schema|RUNTIME|[research/runtime/hub_invoice_schema.response.json:4](../research/runtime/hub_invoice_schema.response.json)|https://api.vlm.run/v1/hub/schema|
|原始后台API合同|SOURCE|[research/runtime/api_openapi.json:2403](../research/runtime/api_openapi.json)|https://api.vlm.run/openapi.json|
|Gateway请求合同|SOURCE|[research/runtime/gateway_openapi.json:450](../research/runtime/gateway_openapi.json)|https://gateway.vlm.run/openapi.json|
|router五runtime声明|SOURCE|[research/docs/vlm.run__blog__introducing-gateway.raw.txt:52](../research/docs/vlm.run__blog__introducing-gateway.raw.txt)|https://vlm.run/blog/introducing-gateway|
|输入校验及PDF上限|SOURCE|[research/docs/docs.vlm.run__gateway__multimodal-inputs.md:13](../research/docs/docs.vlm.run__gateway__multimodal-inputs.md)|https://docs.vlm.run/gateway/multimodal-inputs.md|
|method参数行为|SOURCE|[research/docs/docs.vlm.run__gateway__methods.md:7](../research/docs/docs.vlm.run__gateway__methods.md)|https://docs.vlm.run/gateway/methods.md|
|JSON缓冲及SSE|SOURCE|[research/docs/docs.vlm.run__gateway__response-formats.md:127](../research/docs/docs.vlm.run__gateway__response-formats.md)|https://docs.vlm.run/gateway/response-formats.md|
|统一坐标及mask|SOURCE|[research/docs/docs.vlm.run__gateway__response-types.md:364](../research/docs/docs.vlm.run__gateway__response-types.md)|https://docs.vlm.run/gateway/response-types.md|
|队列上限|SOURCE|[research/docs/docs.vlm.run__gateway__error-codes.md:129](../research/docs/docs.vlm.run__gateway__error-codes.md)|https://docs.vlm.run/gateway/error-codes.md|
|页重试|SOURCE|[research/docs/docs.vlm.run__gateway__error-codes.md:188](../research/docs/docs.vlm.run__gateway__error-codes.md)|https://docs.vlm.run/gateway/error-codes.md|
|首token及总超时|SOURCE|[research/docs/docs.vlm.run__gateway__error-codes.md:135](../research/docs/docs.vlm.run__gateway__error-codes.md)|https://docs.vlm.run/gateway/error-codes.md|
|限流及共享存储|SOURCE|[research/docs/docs.vlm.run__gateway__rate-limits.md:53](../research/docs/docs.vlm.run__gateway__rate-limits.md)|https://docs.vlm.run/gateway/rate-limits.md|
|鉴权分层|SOURCE|[research/docs/docs.vlm.run__gateway__authentication.md:74](../research/docs/docs.vlm.run__gateway__authentication.md)|https://docs.vlm.run/gateway/authentication.md|
|价格单位|SOURCE|[research/docs/docs.vlm.run__gateway__pricing.md:17](../research/docs/docs.vlm.run__gateway__pricing.md)|https://docs.vlm.run/gateway/pricing.md|
|System One数学定义|SOURCE|[research/docs/docs.vlm.run__gateway__api-reference__post-systemone.md:83](../research/docs/docs.vlm.run__gateway__api-reference__post-systemone.md)|https://docs.vlm.run/gateway/api-reference/post-systemone.md|
|generative约束及并行|SOURCE|[research/docs/docs.vlm.run__gateway__changelog.md:43](../research/docs/docs.vlm.run__gateway__changelog.md)|https://docs.vlm.run/gateway/changelog.md|
|TypeSafe校准边界|SOURCE|[research/docs/docs.vlm.run__gateway__typesafe-models.md:7](../research/docs/docs.vlm.run__gateway__typesafe-models.md)|https://docs.vlm.run/gateway/typesafe-models.md|
|WS协议与限制|SOURCE|[research/docs/docs.vlm.run__gateway__typesafe-streaming.md:48](../research/docs/docs.vlm.run__gateway__typesafe-streaming.md)|https://docs.vlm.run/gateway/typesafe-streaming.md|
|MCP读工具映射|SOURCE|[research/docs/docs.vlm.run__gateway__mcp-tools.md:7](../research/docs/docs.vlm.run__gateway__mcp-tools.md)|https://docs.vlm.run/gateway/mcp-tools.md|
|MCP OAuth入口|SOURCE|[research/docs/docs.vlm.run__gateway__mcp-authentication.md:30](../research/docs/docs.vlm.run__gateway__mcp-authentication.md)|https://docs.vlm.run/gateway/mcp-authentication.md|
|Orion2 harness|SOURCE|[research/docs/vlm.run__blog__orion-2.raw.txt:49](../research/docs/vlm.run__blog__orion-2.raw.txt)|https://vlm.run/blog/orion-2|
|Orion2 judge后续计划|SOURCE|[research/docs/vlm.run__blog__orion-2.raw.txt:55](../research/docs/vlm.run__blog__orion-2.raw.txt)|https://vlm.run/blog/orion-2|
|Orion库与代码执行|SOURCE|[research/docs/docs.vlm.run__agents__code-execution.md:74](../research/docs/docs.vlm.run__agents__code-execution.md)|https://docs.vlm.run/agents/code-execution.md|
|Skill 注入版本区别|SOURCE|[research/docs/docs.vlm.run__agents__code-execution.md:225](../research/docs/docs.vlm.run__agents__code-execution.md)|https://docs.vlm.run/agents/code-execution.md|
|缓存pipeline与回退|SOURCE|[research/docs/docs.vlm.run__agents__code-execution.md:236](../research/docs/docs.vlm.run__agents__code-execution.md)|https://docs.vlm.run/agents/code-execution.md|
|Skill graph配置|SOURCE|[research/docs/docs.vlm.run__skills__spec__vlmrun-yaml.md:9](../research/docs/docs.vlm.run__skills__spec__vlmrun-yaml.md)|https://docs.vlm.run/skills/spec/vlmrun-yaml.md|
|早期Orion白皮书|SOURCE|[research/runtime/orion_whitepaper.txt:112](../research/runtime/orion_whitepaper.txt)|https://storage.googleapis.com/vlm-data-public-prod/web/assets/vlmrun-orion-whitepaper-latest.pdf|
|浏览器请求构造|CODE|[research/frontend/chat_pretty/chat__47156-78eb08e3d3098fe8.js:802](../research/frontend/chat_pretty/chat__47156-78eb08e3d3098fe8.js)|https://chat.vlm.run/_next/static/chunks/47156-78eb08e3d3098fe8.js|
|浏览器Gateway同源根|CODE|[research/frontend/chat_pretty/chat__47156-78eb08e3d3098fe8.js:140](../research/frontend/chat_pretty/chat__47156-78eb08e3d3098fe8.js)|https://chat.vlm.run/_next/static/chunks/47156-78eb08e3d3098fe8.js|
|前端OCR用户prompt|CODE|[research/frontend/chat_pretty/chat__74720-951f38767fc2ea11.js:1073](../research/frontend/chat_pretty/chat__74720-951f38767fc2ea11.js)|https://chat.vlm.run/_next/static/chunks/74720-951f38767fc2ea11.js|
|前端judge模型|CODE|[research/frontend/chat_pretty/chat__74720-951f38767fc2ea11.js:749](../research/frontend/chat_pretty/chat__74720-951f38767fc2ea11.js)|https://chat.vlm.run/_next/static/chunks/74720-951f38767fc2ea11.js|
|前端judge prompt|CODE|[research/frontend/chat_pretty/chat__74720-951f38767fc2ea11.js:873](../research/frontend/chat_pretty/chat__74720-951f38767fc2ea11.js)|https://chat.vlm.run/_next/static/chunks/74720-951f38767fc2ea11.js|
|前端copilot prompt|CODE|[research/frontend/chat_pretty/chat__6116-f482cec466098f22.js:10468](../research/frontend/chat_pretty/chat__6116-f482cec466098f22.js)|https://chat.vlm.run/_next/static/chunks/6116-f482cec466098f22.js|
|浏览器fingerprint缓存|CODE|[research/frontend/chat_pretty/chat__47156-78eb08e3d3098fe8.js:682](../research/frontend/chat_pretty/chat__47156-78eb08e3d3098fe8.js)|https://chat.vlm.run/_next/static/chunks/47156-78eb08e3d3098fe8.js|
|dashboard认证客户端|CODE|[research/frontend/pretty/dashboard__27292-764f9b0d804e5d84.js:305](../research/frontend/pretty/dashboard__27292-764f9b0d804e5d84.js)|https://app.vlm.run/_next/static/chunks/27292-764f9b0d804e5d84.js|
|SDK agent.execute构造|CODE|[research/code/vlmrun-python-sdk/vlmrun/client/agent.py:200](../research/code/vlmrun-python-sdk/vlmrun/client/agent.py)|https://github.com/vlm-run/vlmrun-python-sdk/blob/6f64be4132615e62a9b3a8fab18e16562f214e32/vlmrun/client/agent.py#L200|
|SDK mode实际默认None|CODE|[research/code/vlmrun-python-sdk/vlmrun/client/types.py:314](../research/code/vlmrun-python-sdk/vlmrun/client/types.py)|https://github.com/vlm-run/vlmrun-python-sdk/blob/6f64be4132615e62a9b3a8fab18e16562f214e32/vlmrun/client/types.py#L314|
|SDK gateway根|CODE|[research/code/vlmrun-python-sdk/vlmrun/client/gateway.py:26](../research/code/vlmrun-python-sdk/vlmrun/client/gateway.py)|https://github.com/vlm-run/vlmrun-python-sdk/blob/6f64be4132615e62a9b3a8fab18e16562f214e32/vlmrun/client/gateway.py#L26|
|Hub prompt文本|SOURCE|[research/code/vlmrun-hub/vlmrun/hub/catalog.yaml:15](../research/code/vlmrun-hub/vlmrun/hub/catalog.yaml)|https://github.com/vlm-run/vlmrun-hub/blob/55b534d87980aaca55fba28a4a6062a58f8f01ab/vlmrun/hub/catalog.yaml#L15|

## 公开仓库固定版本

|仓库|commit|
|---|---|
|https://github.com/vlm-run/skills|`cbd5e351d2735a2a7feaf13c0997ff4b969ddd37`|
|https://github.com/vlm-run/vlmrun-hub|`55b534d87980aaca55fba28a4a6062a58f8f01ab`|
|https://github.com/vlm-run/vlmrun-node-sdk|`927c4e0af689ec2775168bc5659757b398bc2c6f`|
|https://github.com/vlm-run/vlmrun-python-sdk|`6f64be4132615e62a9b3a8fab18e16562f214e32`|

索引中的RUNTIME区分两种内容：接口真正执行返回的结果，以及接口在回包中声明的目录/配置元数据。后者仍不能证明所有能力都执行过。

研究用脚本新生成的图片、PDF、prompt均为测试输入；没有被写成产品原有样本。

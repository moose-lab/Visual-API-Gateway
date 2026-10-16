# 运行验证与限制

RUNTIME：2026-10-11 实际请求；耗时为当前机器完成整个 HTTP 读取的时间，不是纯模型耗时、TTFT、p50 或 p95。合成样本由 prepare_probes.py 生成。

|探针|HTTP|完整请求耗时秒|响应报告成本 USD|方法|
|---|---|---|---|---|
|hub_invoice_schema|200|2.217|None|POST|
|mcp_initialize|200|1.267|None|POST|
|mcp_initialized|202|0.309|None|POST|
|mcp_tools|200|0.493|None|POST|
|probe_agent|201|4.359|0.002883|POST|
|probe_capability_error|400|1.725|None|POST|
|probe_completion|200|1.735|0.001|GET|
|probe_embedding|200|1.953|0.0|POST|
|probe_ocr|200|2.602|0.001|POST|
|probe_ocr_json_sse|200|1.234|0.001|POST|
|probe_orion2_history|404|2.375|None|GET|
|probe_orion2_tool|200|12.134|0.014139|POST|
|probe_pdf|200|4.207|0.001|POST|
|probe_provider|403|2.323|None|POST|
|probe_sse|200|2.014|0.001|POST|
|probe_sse_control|200|1.852|0.001|POST|
|probe_systemone|200|2.544|0.001|POST|
|probe_systemone_diffusion|200|1.351|0.001|POST|
|probe_text|200|2.127|0.001|POST|
|probe_vision_schema|200|1.758|0.001|POST|

STATIC：成功 POST 回包报告金额合计 **USD 0.026022**。GET completion 返回的是原调用 cost，没有重复计入；这不是账单余额核对。

## 质量/兼容性与失败记录

- probe_sse 的传输成功，但文本没有按要求返回 STREAM_OK；随后 temperature=0 且与非流式文字请求相同的 probe_sse_control 正确返回 VLM_GATEWAY_OK。请求参数不同，不能用该控制实验定位根因或证明修复。
- probe_vision_schema 单样本字段为 TEST-042、USD、12.5，匹配本次输入和指定 schema；不能推断所有 schema 均由 constrained decoding 强制。
- OCR JSON SSE 成功包含 8 个 JSON chunk；首字节/逐 chunk 到达时间未采集，所以没有验证服务端是否先缓冲整段。
- Qwen System One: P(yes)=0.5312093733737563，output_tokens=5；DiffusionGemma: P(yes)=0.9999766676702402，output_tokens=0。后者请求还包含一个额外 choice 问题，不是严格控制的模型 A/B 基准。
- Gemini 请求 403 model_not_entitled。7 个 routed 模型的 detail 请求 404。二者不是同一个错误，不推断其他6个模型的推理结果。
- WebSocket 首次本地依赖不兼容（additional_headers），修正兼容旧版本参数后连接 WinError121 超时，无 session.created；不能判定远端 WS 不可用。
- Orion-2 的 tool_call arguments 流先有 '{}' 再有 '{"code":...}'，对同一 index 朴素字符串拼接会得到两个相邻 JSON 对象；这是本次事件序列。PROPOSAL：接入时单独检查该序列，并向服务提供方核对预期协议。
- Orion-2 回包可见execute_code调用与代码参数、后续文本55，但未提供独立tool result或执行trace。实际沙箱调用成功与否未被单独观测，不能将模型后续文字等同于执行日志。
- Orion-2 文字事件 model 字段为 vlmrun-orion-1:auto，而工具及收尾事件为 vlmrun-orion-2；可能是内部复用或事件标记行为（INFERENCE），基础模型和路由细节 UNKNOWN。
- 未运行：全部模型/全部 methods 的逐项 benchmark，音频转写、视频跟踪、分割、pose、图片/视频生成，skill 创建/修改/批执行，数据库/部署实现。

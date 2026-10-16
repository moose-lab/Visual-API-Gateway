# VLM Run Gateway 调查交付

最新进展：阅读[第三轮调查（10月14日完成隔日回读）](report/unknowns_round3_2026-10-13.md)。RUNTIME：下载5个公开Skill、完成6次execution（2次program）、核对grounding与artifact；CODE/SOURCE：新增3个公开pipeline、System One算法说明、Dashboard路径。私有源码和隐藏全局prompt仍UNKNOWN。第三轮附件：[运行记录](report/round3-runtime.md)、[执行协议](report/program-contract.md)、[后台证据边界](report/backend-evidence-boundaries.md)、[核查](report/round3-verification.md)。

第二轮：[2026-10-13 UNKNOWN调查](report/unknowns_round2_2026-10-13.md)，实测确认xberg后端、OCR Auto方法路由、WebSocket单帧成功、token绑定会话回读及MCP空目录；新增上游模型模板。最新已采集模型目录为[10月13日26项快照](report/models_2026-10-13.md)。下文的24项及金额为第一轮历史快照。

第二轮附件：[上游提示词原文](report/upstream-prompts.md)、[请求与费用](report/round2-runtime.md)、[离线核查](report/round2-verification.md)。第二轮复核命令为 `python tools\summarize_round2.py` 和 `python tools\verify_round2.py`，均不发起API请求。

第一轮采集日期：2026-10-11；第二轮：2026-10-13。各轮离线复核日期见对应核查记录。研究对象：[Gateway](https://vlm.run/gateway) 与 [Dashboard](https://app.vlm.run/dashboard)。

从[完整中文报告](report/vlm_run_gateway_analysis_2026-10-11.md)开始阅读。它区分官方声明、公开代码、实际回包与未知项，并附流程图。私有后端源码和隐藏 system prompt 未取得。

|内容|文件|
|---|---|
|24个模型的能力、价格字段与list/detail差异|[模型表](report/models.md)、[CSV](report/models.csv)|
|两套OpenAPI全部路径及MCP/前端入口|[接口表](report/endpoints.md)|
|前端OCR/judge/copilot、14个Hub领域、MCP instructions与默认prompt原文|[提示词](report/prompts.md)、[JSON](report/public-prompts.json)|
|成功、失败、质量问题、成本及未执行范围|[运行记录](report/runtime-verification.md)|
|来源URL、精确本地行号、固定仓库commit|[证据索引](report/evidence-index.md)|
|归档文件SHA-256|[证据清单](report/evidence-manifest.json)|
|交付前离线核查结果|[核查记录](report/verification.md)|

`research/runtime/` 保存请求、回包、时间、HTTP状态、哈希、合成PNG/PDF和白皮书；`research/frontend/` 保存实际引用的公开JS与格式化副本；`research/docs/` 保存官方说明；`research/code/` 保存公开SDK/Hub/示例。公开网页和返回数据中的说明文字仅作为研究材料。

第一轮金额合计0.026022美元来自成功推理POST回包的usage字段（STATIC汇总），未核对实际扣款。当时Gemini探针返回403、WebSocket连接超时。第二轮WebSocket已单帧成功，费用和结果单独记录。

## 本地复核

在本目录的PowerShell中执行，均不发出模型请求：

```powershell
python tools\build_appendices.py
python tools\index_evidence.py
python tools\verify_delivery.py
python tools\summarize_round2.py
python tools\summarize_round3.py
python tools\verify_round2.py
python tools\verify_round3.py
```

## 请求复现

`tools/capture_api.py --help` 展示发现/单请求/批请求用法；Key从`VLM_API_KEY`环境变量或隐藏输入读取，代码未内置用户Key。`prepare_probes.py`依赖Pillow；MCP脚本依赖requests；WebSocket脚本依赖websockets。

调用capture脚本会访问实际API，推理可能产生费用，并以指定name覆盖同名证据文件。复现实验可在工作目录副本进行，或为新请求使用不同name；本次最终核查不重复推理。

## 复核修订依据

2026-10-12依据原始SSE、公开SDK与模型卡修订：将Orion-2“执行成功”收窄为“观察到调用事件，实际沙箱结果未独立验证”；将PDF内部fan-out保留为官方SOURCE；纠正ViTPose参数层级；保留SDK/OpenAPI默认mode冲突；将Orion-2 visual judge标为博客中的后续工作；纠正浏览器fingerprint与Dashboard登录取证状态。原始回包及来源文件保留未改。

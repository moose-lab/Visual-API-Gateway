# 公开接口全表

SOURCE：两个公开 OpenAPI 的声明。列出的接口不等于逐个运行验证，更不等于后台源码。RUNTIME 结果另见 runtime-verification.md。


## VLM Run Gateway API — 0.46.1

[research/runtime/gateway_openapi.json:25](../research/runtime/gateway_openapi.json)

|方法|路径|摘要|鉴权 schema|请求 schema|
|---|---|---|---|---|
|POST|`/v1/openai/chat/completions`|Chat Completions|_PermissiveHTTPBearer|`#/components/schemas/ChatCompletionRequest`|
|POST|`/v1/openai/embeddings`|Embeddings|_PermissiveHTTPBearer|`#/components/schemas/EmbeddingRequest`|
|POST|`/v1/openai/audio/transcriptions`|Audio Transcriptions|_PermissiveHTTPBearer|`#/components/schemas/Body_audio_transcriptions_v1_openai_audio_transcriptions_post`|
|GET|`/v1/openai/models`|List Models|_PermissiveHTTPBearer|—|
|GET|`/v1/models/{model_id}`|Get Model Detail|_PermissiveHTTPBearer|—|
|GET|`/health`|Health|未声明|—|
|GET|`/v1/completions/{completion_id}`|Read Completion|_PermissiveHTTPBearer|—|
|POST|`/typesafe/v1/systemone`|Systemone|_PermissiveHTTPBearer|`#/components/schemas/SystemOneRequest`|
|GET|`/typesafe/v1/models`|Systemone Models|_PermissiveHTTPBearer|—|

## VLM Run Unified Server — 2026-05-19.0

[research/runtime/api_openapi.json:14](../research/runtime/api_openapi.json)

|方法|路径|摘要|鉴权 schema|请求 schema|
|---|---|---|---|---|
|GET|`/v1/openai/models`|Models|HTTPBearer|—|
|GET|`/v1/openai/models/{model}`|Model Info|HTTPBearer|—|
|GET|`/v1/openai/health`|Health|未声明|—|
|POST|`/v1/openai/chat/completions`|Chat Completions|HTTPBearer|`#/components/schemas/AgentChatCompletionsRequest`|
|POST|`/v1/openai/files`|Upload File Route|HTTPBearer|`#/components/schemas/Body_upload_file_route_v1_openai_files_post`|
|GET|`/v1/chat`|List Chats|HTTPBearer|—|
|GET|`/v1/chat/messages`|Chat Messages|HTTPBearer|—|
|GET|`/v1/agent`| List Agents|HTTPBearer|—|
|POST|`/v1/agent/lookup`|Lookup Agent|HTTPBearer|`#/components/schemas/AgentLookupRequest`|
|POST|`/v1/agent/create`| Create Agent|HTTPBearer|`#/components/schemas/AgentCreationRequest`|
|POST|`/v1/agent/execute`| Execute Agent|HTTPBearer|`#/components/schemas/AgentExecutionRequest`|
|GET|`/v1/agent/executions`|Get Agent Executions|HTTPBearer|—|
|GET|`/v1/agent/executions/{id}`|Get Agent Execution|HTTPBearer|—|
|GET|`/v1/artifacts`|List or Get Artifacts|HTTPBearer|—|
|GET|`/v1/skills`|List Skills|HTTPBearer|—|
|POST|`/v1/skills/lookup`|Lookup Skill|HTTPBearer|`#/components/schemas/SkillLookupRequest`|
|GET|`/v1/skills/{skill_id}`|Get Skill|HTTPBearer|—|
|POST|`/v1/skills/create`|Create Skill|HTTPBearer|`#/components/schemas/SkillCreateRequest`|
|POST|`/v1/skills/{skill_id}/update`|Update Skill|HTTPBearer|`#/components/schemas/SkillUpdateRequest`|
|GET|`/v1/skills/{skill_id}/download`|Get Skill Download URL|HTTPBearer|—|
|POST|`/v1/image/generate`|Image Generate|HTTPBearer|`#/components/schemas/ImagePredictionRequest`|
|POST|`/v1/document/generate`|Document Generate|HTTPBearer|`#/components/schemas/DocumentFilePredictionRequest`|
|POST|`/v1/video/generate`|Video Generate|HTTPBearer|`#/components/schemas/VideoPredictionRequest`|
|POST|`/v1/audio/generate`|Audio Generate|HTTPBearer|`#/components/schemas/AudioPredictionRequest`|
|GET|`/v1/hub/info`|Info|未声明|—|
|GET|`/v1/hub/domains`|List Domains|未声明|—|
|POST|`/v1/hub/schema`|Get Domain Schema|未声明|`#/components/schemas/HubSchemaRequest`|
|GET|`/v1/predictions`|Get Predictions|HTTPBearer|—|
|GET|`/v1/predictions/{id}`|Get Prediction|HTTPBearer|—|
|GET|`/v1/predictions/{id}/domain`|Get Prediction Domain|HTTPBearer|—|
|POST|`/v1/files`|Upload File Route|HTTPBearer|`#/components/schemas/Body_upload_file_route_v1_files_post`|
|GET|`/v1/files`|Get Files|HTTPBearer|—|
|GET|`/v1/files/{file_id}`|Get File Route|HTTPBearer|—|
|DELETE|`/v1/files/{file_id}`|Delete File Route|HTTPBearer|—|
|GET|`/v1/files/hash/{file_hash}`|Get File By Hash|HTTPBearer|—|
|POST|`/v1/files/presigned-url`|Generate Presigned Url|HTTPBearer|`#/components/schemas/PresignedUrlRequest`|
|GET|`/v1/files/verify-upload/{file_id}`|Verify File Upload|HTTPBearer|—|
|POST|`/v1/feedback/submit`|Submit Feedback|HTTPBearer|`#/components/schemas/FeedbackSubmitRequest`|
|GET|`/v1/feedback/{entity_id}`|Get Feedback|HTTPBearer|—|
|POST|`/v1/evaluations/run`|Run Evaluation|HTTPBearer|`#/components/schemas/RunEvaluationRequest`|
|POST|`/v1/evaluations/optimize`|Optimize Skill Endpoint|HTTPBearer|`#/components/schemas/OptimizeSkillRequest`|
|POST|`/v1/evaluations/rerun`|Rerun With Skill|HTTPBearer|`#/components/schemas/RerunRequest`|
|GET|`/v1/health`|Health Check|未声明|—|
|GET|`/health`|Health Check|未声明|—|
|GET|`/v1/models`|Get Models|HTTPBearer|—|
|GET|`/v1/domains`|Get Domains|HTTPBearer|—|
|POST|`/v1/schema`|Get Schema|HTTPBearer|`#/components/schemas/SchemaRequest`|

## OpenAPI 外的公开路径

|来源|路径|证据|
|---|---|---|
|MCP握手及目录|`https://gateway.vlm.run/mcp`|RUNTIME；initialize 200、initialized 202、tools/list 200，7个工具；未执行read工具|
|System One 文档|`wss://gateway.vlm.run/typesafe/ws`|SOURCE；本次客户端连接超时|
|Chat Playground JS|`/api/gateway/openai/chat/completions`|CODE；同源服务端代理实现 UNKNOWN|
|Chat Playground JS|`https://agent.vlm.run/v1/openai/chat/completions`|CODE；本次 API 验证用 api.vlm.run|
|Dashboard JS|`https://prod-vlm-cloud-nfsnfpr33q-uc.a.run.app/api/v1/refresh-token`|CODE；本次未调用|
|Playground JS|`/api/agent/playground-ticket`|CODE；浏览器POST获取ticket；本次未调用|

Gateway OpenAPI 的 bearer 声明与官方匿名调用说明并存；本次另一个无 key 的 models 请求确实 200。不可据 security 字段推断所有路径均拒绝匿名。

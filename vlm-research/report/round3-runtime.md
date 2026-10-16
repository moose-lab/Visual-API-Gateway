# 第三轮运行记录

RUNTIME：2026-10-13 执行与下载、2026-10-14 隔日回读；STATIC：本文件由捕获汇总。耗时为本地 HTTP 完整耗时，usage.duration_seconds 为服务器报告值。

## 执行路径对照

|实验|请求 mode|最终 execution_mode|状态序列|steps|服务端 duration 秒|usage USD|
|---|---|---|---|---|---|---|
|[execution_agent](../research/round3/execution_agent.observation.json)|agent|agent|enqueued → running → completed|2|36|0.023251|
|[execution_fallback](../research/round3/execution_fallback.observation.json)|program|agent|enqueued → completed|1|3|0.006702|
|[execution_program](../research/round3/execution_program.observation.json)|program|agent|enqueued → running → completed|4|74|0.050071|
|[execution_reference](../research/round3/execution_reference.observation.json)|program|program|enqueued → running → completed|0|9|0.002933|
|[execution_reference_replay](../research/round3/execution_reference_replay.observation.json)|program|program|enqueued → running → completed|0|9|0.003031|
|[execution_replay](../research/round3/execution_replay.observation.json)|program|agent|enqueued → running → completed|3|65|0.033494|

STATIC：按唯一 execution ID 去重后的 usage.cost_dollars 合计 **$0.119482**。未核账户账单；不把轮询、提交的重复 usage 或 credits_used 再加总。

RUNTIME：fallback 的 response 字段是 JSON 字符串，而实验期望为普通 greeting 字符串；任务 completed 不等于逐字段满足预期。部分 running 回包已有 completed_at，详见汇总 JSON 的 nonterminal_completed_at。

## HTTP 请求

|捕获|方法|状态|本地耗时秒|
|---|---|---|---|
|[agent_models_current](../research/round3/captures/agent_models_current.meta.json)|GET|200|1.714|
|[artifacts_invalid_scope](../research/round3/captures/artifacts_invalid_scope.meta.json)|GET|404|1.413|
|[execution_agent_artifact_bytes](../research/round3/captures/execution_agent_artifact_bytes.meta.json)|GET|200|1.091|
|[execution_agent_artifact_get](../research/round3/captures/execution_agent_artifact_get.meta.json)|GET|307|1.284|
|[execution_agent_artifacts](../research/round3/captures/execution_agent_artifacts.meta.json)|GET|200|2.402|
|[execution_agent_poll_01](../research/round3/captures/execution_agent_poll_01.meta.json)|GET|200|1.526|
|[execution_agent_poll_02](../research/round3/captures/execution_agent_poll_02.meta.json)|GET|200|1.566|
|[execution_agent_poll_03](../research/round3/captures/execution_agent_poll_03.meta.json)|GET|200|1.271|
|[execution_agent_poll_04](../research/round3/captures/execution_agent_poll_04.meta.json)|GET|200|1.228|
|[execution_agent_poll_05](../research/round3/captures/execution_agent_poll_05.meta.json)|GET|200|2.048|
|[execution_agent_submit](../research/round3/captures/execution_agent_submit.meta.json)|POST|200|2.712|
|[execution_fallback_poll_01](../research/round3/captures/execution_fallback_poll_01.meta.json)|GET|200|1.582|
|[execution_fallback_submit](../research/round3/captures/execution_fallback_submit.meta.json)|POST|200|8.376|
|[execution_program_artifact_bytes](../research/round3/captures/execution_program_artifact_bytes.meta.json)|GET|200|1.31|
|[execution_program_artifact_get](../research/round3/captures/execution_program_artifact_get.meta.json)|GET|307|1.303|
|[execution_program_artifacts](../research/round3/captures/execution_program_artifacts.meta.json)|GET|200|2.364|
|[execution_program_next_day](../research/round3/captures/execution_program_next_day.meta.json)|GET|200|6.512|
|[execution_program_poll_01](../research/round3/captures/execution_program_poll_01.meta.json)|GET|200|2.346|
|[execution_program_poll_02](../research/round3/captures/execution_program_poll_02.meta.json)|GET|200|1.948|
|[execution_program_poll_03](../research/round3/captures/execution_program_poll_03.meta.json)|GET|200|1.347|
|[execution_program_poll_04](../research/round3/captures/execution_program_poll_04.meta.json)|GET|200|1.302|
|[execution_program_poll_05](../research/round3/captures/execution_program_poll_05.meta.json)|GET|200|1.471|
|[execution_program_poll_06](../research/round3/captures/execution_program_poll_06.meta.json)|GET|200|1.465|
|[execution_program_poll_07](../research/round3/captures/execution_program_poll_07.meta.json)|GET|200|1.213|
|[execution_program_poll_08](../research/round3/captures/execution_program_poll_08.meta.json)|GET|200|1.617|
|[execution_program_submit](../research/round3/captures/execution_program_submit.meta.json)|POST|200|8.825|
|[execution_reference_poll_01](../research/round3/captures/execution_reference_poll_01.meta.json)|GET|200|1.323|
|[execution_reference_poll_02](../research/round3/captures/execution_reference_poll_02.meta.json)|GET|200|2.339|
|[execution_reference_replay_artifacts](../research/round3/captures/execution_reference_replay_artifacts.meta.json)|GET|200|2.484|
|[execution_reference_replay_next_day](../research/round3/captures/execution_reference_replay_next_day.meta.json)|GET|200|3.019|
|[execution_reference_replay_poll_01](../research/round3/captures/execution_reference_replay_poll_01.meta.json)|GET|200|1.913|
|[execution_reference_replay_poll_02](../research/round3/captures/execution_reference_replay_poll_02.meta.json)|GET|200|2.247|
|[execution_reference_replay_submit](../research/round3/captures/execution_reference_replay_submit.meta.json)|POST|200|1.963|
|[execution_reference_submit](../research/round3/captures/execution_reference_submit.meta.json)|POST|200|2.41|
|[execution_replay_artifact_bytes](../research/round3/captures/execution_replay_artifact_bytes.meta.json)|GET|200|1.17|
|[execution_replay_artifact_get](../research/round3/captures/execution_replay_artifact_get.meta.json)|GET|307|1.608|
|[execution_replay_artifacts](../research/round3/captures/execution_replay_artifacts.meta.json)|GET|200|1.49|
|[execution_replay_poll_01](../research/round3/captures/execution_replay_poll_01.meta.json)|GET|200|1.223|
|[execution_replay_poll_02](../research/round3/captures/execution_replay_poll_02.meta.json)|GET|200|2.599|
|[execution_replay_poll_03](../research/round3/captures/execution_replay_poll_03.meta.json)|GET|200|1.932|
|[execution_replay_poll_04](../research/round3/captures/execution_replay_poll_04.meta.json)|GET|200|1.313|
|[execution_replay_poll_05](../research/round3/captures/execution_replay_poll_05.meta.json)|GET|200|1.801|
|[execution_replay_poll_06](../research/round3/captures/execution_replay_poll_06.meta.json)|GET|200|1.512|
|[execution_replay_poll_07](../research/round3/captures/execution_replay_poll_07.meta.json)|GET|200|1.857|
|[execution_replay_submit](../research/round3/captures/execution_replay_submit.meta.json)|POST|200|3.426|
|[executions_list_current](../research/round3/captures/executions_list_current.meta.json)|GET|200|1.706|
|[public_skill_greeting_download](../research/round3/captures/public_skill_greeting_download.meta.json)|GET|200|8.794|
|[public_skill_greeting_zip](../research/round3/captures/public_skill_greeting_zip.meta.json)|GET|200|6.281|
|[public_skill_grounded_document_extraction_download](../research/round3/captures/public_skill_grounded_document_extraction_download.meta.json)|GET|200|9.551|
|[public_skill_grounded_document_extraction_zip](../research/round3/captures/public_skill_grounded_document_extraction_zip.meta.json)|GET|200|2.028|
|[public_skill_healthcare_hipaa_release_download](../research/round3/captures/public_skill_healthcare_hipaa_release_download.meta.json)|GET|200|1.631|
|[public_skill_healthcare_hipaa_release_zip](../research/round3/captures/public_skill_healthcare_hipaa_release_zip.meta.json)|GET|200|1.101|
|[public_skill_medical_multi_schema_extraction_download](../research/round3/captures/public_skill_medical_multi_schema_extraction_download.meta.json)|GET|200|1.291|
|[public_skill_medical_multi_schema_extraction_zip](../research/round3/captures/public_skill_medical_multi_schema_extraction_zip.meta.json)|GET|200|1.165|
|[public_skill_viasocket_download](../research/round3/captures/public_skill_viasocket_download.meta.json)|GET|200|1.612|
|[public_skill_viasocket_zip](../research/round3/captures/public_skill_viasocket_zip.meta.json)|GET|200|1.081|
|[reference_pdf_object_bytes_next_day](../research/round3/captures/reference_pdf_object_bytes_next_day.meta.json)|GET|200|1.403|
|[reference_pdf_object_get_next_day](../research/round3/captures/reference_pdf_object_get_next_day.meta.json)|GET|307|1.861|
|[skills_list_current](../research/round3/captures/skills_list_current.meta.json)|GET|200|3.124|

ZIP 二进制按下载字节保存；文本中的 key/token/签名 URL 凭证字段在落盘前脱敏，response_sha256 对应保存的版本。
test_skills 与 synthetic_referral 是本地实验输入，不是下载的生产源码。公开 Skill Python 仅作静态分析；reference 请求在远端服务按正式 skill 引用执行。
签名 URL 下载没有附带 API Bearer；原始历史捕获未覆盖。

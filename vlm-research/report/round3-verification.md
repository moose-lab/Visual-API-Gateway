# 第三轮离线核查

RUNTIME-本机：核查日期 2026-10-14。只读取本地证据，没有API推理请求。

|检查|结果|说明|
|---|---|---|
|第1轮归档完整性|通过|{"files": 1063, "mismatches": []}|
|第2轮归档完整性|通过|{"files": 338, "mismatches": []}|
|第3轮归档完整性|通过|{"files": 374, "mismatches": []}|
|第三轮HTTP字节/哈希|通过|{"requests": 59, "mismatches": [], "scope": "Hashes correspond to archived redacted text or original binary"}|
|公开Skill目录完整下载|通过|{"names": ["greeting", "grounded-document-extraction", "healthcare-hipaa-release", "medical-multi-schema-extraction", "viasocket"]}|
|公开ZIP与解包逐字节匹配|通过|{"packages": 5, "mismatches": []}|
|三个公开pipeline入口静态核对|通过|{"signatures": [{"path": "research/round3/public_skills/grounded-document-extraction/pipeline.py", "args": ["ctx", "doc_path"]}, {"path": "research/round3/public_skills/medical-multi-schema-extraction/medical-multi-schema-extraction/pipeline.py", "args": ["ctx", "doc_path"]}, {"path": "research/round3/public_skills/healthcare-hipaa-release/hipaa-release/pipeline.py", "args": ["ctx", "img"]}], "scope": "AST only; downloaded code not executed locally"}|
|六个唯一execution完成|通过|{"ids": ["1bf00c9a-c97a-4a48-a20a-c89527ca7961", "5410a132-b564-428a-8d11-f9e7b80e3ef8", "640e05c7-0ad4-4ee4-b480-5737b3046e1c", "8a06a34b-e053-428b-92db-454bfcfbac66", "d93beeb1-e3d5-4dc6-9c4e-abcbfef40e51", "eb42f7ca-7a21-46a4-a66d-5fb27374ade9"]}|
|模式与回包对照|通过|{"program": "agent", "replay": "agent", "agent": "agent", "fallback": "agent", "reference": "program", "reference_replay": "program"}|
|重放与agent使用同一ZIP|通过|{"sha256": "fe97375358d2b39378798832fbabe64fa9d49b7771db4222c9168d61389273e5"}|
|算术与独立artifact匹配|通过|{"cases": 3}|
|fallback结构差异保留|通过|{"observed": {"response": "{\"response\":\"ROUND3_HELLO\"}"}, "expected": {"response": "ROUND3_HELLO"}, "scope": "Observed mismatch; not a passed task-output conformance test"}|
|program引用steps报告为0|通过|{"scope": "Does not establish zero downstream model calls"}|
|费用按唯一ID核对|通过|{"usage_usd": "0.119482", "all_rounds_usage_usd": "0.204511", "billing_verified": false}|
|非终态时间戳异常已保留|通过|{"snapshots": 19, "scope": "Confirms contradictory fields, not their server-side cause"}|
|本地PDF真实文本与输入一致|通过|{"lines": ["SYNTHETIC TEST REFERRAL", "Patient: Test Example", "Date of birth: 2000-01-02", "Date of referral: 2026-10-13", "Reason for referral: Routine vision evaluation", "Scheduling priority: Routine"]}|
|转诊字段核对|通过|{"scope": "One synthetic document"}|
|Grounding文本/页号/范围|通过|{"populated_metadata_fields": 7, "boxes": 7, "scope": "Not a pixel alignment or confidence calibration test"}|
|const与metadata扩展区别|通过|{"scope": "A schema const response is not evidence of correct document classification"}|
|隔日execution回读一致|通过|{"results": [{"name": "execution_program", "status": 200, "equal": true, "hours_since_reported_completion": 19.844}, {"name": "execution_reference_replay", "status": 200, "equal": true, "hours_since_reported_completion": 19.696}], "scope": "No evidence of intervening restart or maximum TTL"}|
|隔日object_id PDF完整下载|通过|{"bytes": 822, "sha256": "7113a9198c2883372733da93df0116b77633cf5af8257e10a26231f00381e138", "scope": "Returned artifact matches original input PDF"}|
|SystemOne来源及15项离线结果|通过|{"checks": 15, "source_mismatches": [], "scope": "Existing offline MockTransport/template tests, not new remote inference"}|
|研究脚本静态语法|通过|{"scripts": 14, "failed": []}|
|报告与专项本地链接|通过|{"reports": 19, "missing": []}|
|API Key模式扫描|通过|{"files": 1819, "candidate_files": [], "scope": "Pattern scan, not proof against every possible secret format"}|
|token与签名URL脱敏|通过|{"candidate_files": []}|
|对象存储下载无API Bearer|通过|{"downloads": 9}|

通过表示归档与上述限定样本一致。异常字段核查通过表示异常已如实记录，不表示服务输出符合全部期望；未证明私有后台、隐藏prompt、像素级grounding或概率校准。

# GitHub 导出说明

## 范围与证据

RUNTIME：本次导出包含 10,987 个常规文件（228,135,876 字节）及 66 个符号链接；逐文件核对源字节，保留 167 个上游可执行文件的 Git 模式。路径、SHA-256、Git blob、模式及源仓库 commit 见 [export-manifest.json](export-manifest.json)。该清单覆盖原项目条目，不包含本说明及清单自身。

STATIC：[全量凭证模式审计](github-export-credential-audit.json)扫描了上述全部常规文件，未识别真实凭证；4 个 URL 用户名/密码模式匹配经源码上下文确认是测试样例。未递归解压、OCR 或测试凭证有效性，结论限于报告列出的扫描方法。

STATIC：排除内嵌 `.git`、`tools/.venv-systemone`、Python 字节码缓存等本机环境目录。实际排除路径见清单 `excluded_paths`。上游源码按普通目录归档，未创建子模块；原始来源与 commit 保留在清单 `repositories` 和三轮证据清单中。

STATIC：源目录 `research/round2/code/xberg/test_documents` 是尚未初始化的上游子模块；源索引记录 commit `bfd2dc2d1d333cc6a69f28e55cdb2d9485f2e175`，URL 见 [上游 .gitmodules](research/round2/code/xberg/.gitmodules)。本机未包含其测试文档，63 个指向该目录的符号链接在导出前已无法解析；导出保留这些链接及其原始 Git 目标字符串，未下载或补造文档。其余 3 个链接指向已包含的文件。

UNKNOWN：本项目没有取得 VLM Run 私有后端源码或完整隐藏提示词。报告中的公开源码、官方声明、运行观察及推断仍按各自证据类别解释；导出不改变这些结论。参见 [后台证据边界](report/backend-evidence-boundaries.md)。

## 离线核查与重新生成

CODE：以下三项只解析本地证据；会写入对应的核查报告 JSON/Markdown。实现见 [verify_delivery.py](tools/verify_delivery.py)、[verify_round2.py](tools/verify_round2.py)、[verify_round3.py](tools/verify_round3.py)。在研究目录执行：

```powershell
python tools/verify_delivery.py
python tools/verify_round2.py
python tools/verify_round3.py
```

RUNTIME：本次两个导出副本分别执行了以上三项核查，16、20、27 项全部通过；各自记录见 [本次导出核查](github-export-verification.json)。运行后还原了脚本写出的六个核查文件，因此历史核查报告仍保持源项目字节。

CODE：原 README 的“本地复核”还列出了重建索引/汇总命令。这些命令依赖原始内嵌 Git 仓库，不能将其在本导出中的输出当作上游来源证明：

- [index_evidence.py](tools/index_evidence.py) 仅为存在 `.git` 的源码目录收集仓库信息；导出中会跳过这些目录。
- [summarize_round2.py](tools/summarize_round2.py) 与 [summarize_round3.py](tools/summarize_round3.py) 在源码子目录调用 `git rev-parse HEAD`；缺失内嵌 `.git` 时，Git 会找到外层上传仓库，读到上传提交而非上游提交。

PROPOSAL：在本导出中优先执行上述三个 `verify_*.py`。需要重建汇总时，先按 `export-manifest.json` 的来源 URL 和 commit 恢复独立的上游 checkout，再运行生成脚本。现有三轮证据清单及历史核查报告作为原项目内容保留。

## 字节与文件模式

RUNTIME：导出时使用仓库本地 `core.autocrlf=false`，并以 `.git/info/attributes` 禁用文本归一化和 clean filter，以保留证据字节、避免上游 `.gitattributes` 将普通文件变成 LFS 指针。这些本机设置不进入提交。源 `.gitattributes` 原文保留。

PROPOSAL：需要严格字节复核的重新 checkout，可先设置 `core.autocrlf=false`；如安装了 Git LFS，可在 checkout 时设置 `GIT_LFS_SKIP_SMUDGE=1`。Windows 中无法创建符号链接的 checkout 可能将链接呈现为目标字符串文件，进而影响包含链接条目的哈希核查；可以在支持符号链接的环境复核。

SOURCE：各内嵌上游源码的许可证及归属文件随源码保留，见对应目录。组织仓库原有文件、设计说明与本研究报告分别保留其原文；两者不被合并为已实现的服务能力声明。

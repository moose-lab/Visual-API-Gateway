> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# systemone

> Typed, calibrated decisions from the CLI

`vlmrun gw systemone`, alias `vlmrun gw s1`, asks typed, calibrated questions of text, images, a PDF, or a video. It returns a probability per answer, not generated text. See [System One](/gateway/system-one) for the concepts and [gateway](/cli/gateway) for shared options.

```bash theme={"theme":{"light":"github-light","dark":"dark-plus"}}
vlmrun gw s1 "Invoice #44 was charged twice" --noul is_urgent
```

| Positional | Resolves to |
| - | - |
| Image path or URL | Image part (up to 8) |
| `.pdf` | Document part |
| `.txt`, `.md`, `.json`, `.yaml` | State |
| Anything else | Literal state text |

`-s` sets the state explicitly. Every positional is then media.

## Asking questions

Each flag is repeatable.

| Flag | Form | Answer |
| - | - | - |
| `--noul` | `ID` or `ID="question text"` | P(yes), 0.0 to 1.0 |
| `--choice` | `ID="a\|b\|c"`, a label may carry `:description` | The label, per-label probabilities, confidence |
| `--score` | `ID="level0\|level1\|..."` | The expected level, legend, probabilities, confidence |

```bash theme={"theme":{"light":"github-light","dark":"dark-plus"}}
vlmrun gw s1 ticket.txt \
  --choice department="billing|technical|sales" \
  --score frustration="Calm|Frustrated|Very angry"
```

`-Q` / `--questions` takes inline JSON, `@file.json`, or `-` for stdin. Use a list (ids on each question) or the wire map. `-B` / `--body` sends a full request body. Other flags override it.

```bash theme={"theme":{"light":"github-light","dark":"dark-plus"}}
vlmrun gw s1 ticket.txt -Q @triage.json --json
```

## Listing models

`vlmrun gw s1 models` prints the models a gateway serves, with release dates. There is no catch-all alias. Name one with `-m`.

```bash theme={"theme":{"light":"github-light","dark":"dark-plus"}}
vlmrun gw s1 models
```

## Video

A video positional is sampled into frames. Each frame is one read. Answers render as a series over time. A numeric question is a sparkline with its true peak and low. A choice is the segments it held.

<Note>
  The video flags below ship in the next CLI release. The same reads are available now from Python. See [Streaming](/gateway/typesafe-streaming).
</Note>

```bash theme={"theme":{"light":"github-light","dark":"dark-plus"}}
vlmrun gw s1 clip.mp4 --fps 1 --ws -c 8 \
  --noul has_people="Are people visible?"
```

| Flag | Description |
| - | - |
| `--fps` | Frames read per second of video. Each frame is one read. |
| `--max-frames` | Refuse to sample more than this from one clip. Default 60, checked against the clip's duration before anything is sent. |
| `-c, --concurrency` | Frame reads in flight at once, 1 to 32. |
| `--ws` | Read the clip over one WebSocket session instead of a request per frame. |
| `--gate-mode` | How a gate reads a timeline: `any` (default), `all`, `mean`, or `sustained:N` for N frames in a row. |

`--ws` saves round trips. The saving grows with frame count. Set it on anything but a short clip. See [Streaming](/gateway/typesafe-streaming).

`any` is the default. A gate over footage usually asks whether something ever happened. `sustained:N` is the debounced form.

```bash theme={"theme":{"light":"github-light","dark":"dark-plus"}}
vlmrun gw s1 door.mp4 --fps 2 --noul is_open --gate 'is_open>0.9' --gate-mode sustained:8
```

## Gates

`--gate` asserts a condition and sets the exit code. A script can use that exit code as a guard. The flag is repeatable. All gates must pass. Gates are checked against the question spec before the request is sent. A selector that cannot apply costs nothing.

| Selector | Value |
| - | - |
| `id` | P(yes) for a noul, the score for a score, the chosen label for a choice |
| `id.noul`, `id.score` | The number, explicitly |
| `id.choice` | The chosen label |
| `id.confidence` | `1 - H(p)/ln K` |
| `id.probabilities.LABEL` | One label's probability |

```bash theme={"theme":{"light":"github-light","dark":"dark-plus"}}
vlmrun gw s1 report.pdf --noul is_safe --gate 'is_safe>0.9'
```

Exit codes: **0** every gate passed, **1** a gate failed, **2** the request failed. With `--json`, verdicts go to stderr. Stdout stays the response body.

## Repeats and dry runs

`--repeat N` sends the same request N times. It reports the mean, the spread, and every read. Gates apply to the mean. `--samples` averages noise draws inside a single read.

`--dry-run` prints the request body and exits without sending it. Piped output is the verbatim body. It composes with `curl`.

```bash theme={"theme":{"light":"github-light","dark":"dark-plus"}}
vlmrun gw s1 ticket.txt --noul is_urgent --repeat 5
vlmrun gw s1 scan.jpg --noul signed --dry-run
```

## Options

| Option | Description |
| - | - |
| `-Q, --questions` | Questions as inline JSON, `@file.json`, or `-` |
| `--noul`, `--choice`, `--score` | Inline questions, repeatable, merged over `-Q` |
| `-s, --state` | State as text, `@file`, or `-`. Every positional is then media |
| `-B, --body` | Full request body; other flags override it |
| `-m, --model` | Model id. There is no catch-all alias, so name a served model |
| `--detail` | Vision budget: `auto` (default, reads at high), `low`, or `high` |
| `--steps` | Denoise steps per read, 1 to 8 |
| `--samples` | Noise draws to average, 1 to 32. Every draw is billed |
| `--reasoning-effort` | Tokens of reasoning before the answer on a generative engine: `none` (default), `minimal`, `low`. A diffusion engine rejects it |
| `--fps`, `--max-frames` | Video sampling rate and its ceiling |
| `-c, --concurrency` | Frame reads in flight, 1 to 32 |
| `--ws` | One WebSocket session instead of a request per frame |
| `--gate-mode` | `any`, `all`, `mean`, or `sustained:N` over a timeline |
| `-g, --gate` | Assert a condition, repeatable |
| `-r, --repeat` | Send N times and report mean and spread, 1 to 64 |
| `--dry-run` | Print the request body and exit |
| `-j, --json` | Print the raw response JSON |
| `--timeout` | Request timeout in seconds |

<Note>
  The CLI fetches remote images. The route accepts images only as data URLs. The URL must resolve to a public address. Set `VLMRUN_ALLOW_PRIVATE_URLS=1` for an internal image host.
</Note>


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.
# Fortune Cookie for an AI Agent

[![make.fun](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11.svg)](https://make.fun/c/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11)
[![rank](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/RianKuntul/fortune-cookie-agent-line/rank.svg)](https://make.fun/c/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11)
[![reward](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/RianKuntul/fortune-cookie-agent-line/reward.svg)](https://make.fun/c/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11)

Entry for the make.fun competition **Fortune Cookie for an AI Agent**
(`u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11`, $2 prize).

`main.ts` (Node 22, readable TypeScript) writes one funny fortune cookie line
for an AI agent — a single line of at most 140 characters, in the voice of a
fortune slip — to `/output/entry.txt` (`$MAKEFUN_OUTPUT_DIR` is honored when
set). A read-back gate refuses anything outside 1–140 characters, anything
that is not a single line, or a line that does not read as a fortune.

Run locally:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/fortune-cookie-agent-out node main.ts
```

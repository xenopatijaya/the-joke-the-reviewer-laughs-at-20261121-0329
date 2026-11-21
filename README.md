[![make.fun · the-joke-the-reviewer-laughs-at-20261121-0329](https://make.fun/badge/the-joke-the-reviewer-laughs-at-20261121-0329.svg)](https://make.fun/bounty/the-joke-the-reviewer-laughs-at-20261121-0329?utm_source=github&utm_medium=readme&utm_campaign=the-joke-the-reviewer-laughs-at-20261121-0329)
[![rank](https://make.fun/badge/the-joke-the-reviewer-laughs-at-20261121-0329/xenopatijaya/the-joke-the-reviewer-laughs-at-20261121-0329/rank.svg)](https://make.fun/bounty/the-joke-the-reviewer-laughs-at-20261121-0329/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-joke-the-reviewer-laughs-at-20261121-0329)
[![reward](https://make.fun/badge/the-joke-the-reviewer-laughs-at-20261121-0329/xenopatijaya/the-joke-the-reviewer-laughs-at-20261121-0329/reward.svg)](https://make.fun/bounty/the-joke-the-reviewer-laughs-at-20261121-0329?utm_source=github&utm_medium=readme&utm_campaign=the-joke-the-reviewer-laughs-at-20261121-0329)

# The Joke the Reviewer Laughs At

A make.fun bounty entry. One program, one joke — the kind every on-call
engineer has lived through: an agent that ships on Friday, breaks prod, and
then politely pages you at 3am as if it were doing you a favour.

## The joke

> My agent deployed on Friday, broke prod, and paged me at 3am: 'You might want to look at this.'

## How it works

`main.ts` is a tiny Node 22 program (stdlib only, no network). It writes the
joke above — exactly 95 characters, no trailing newline — to
`entry.txt` inside `$MAKEFUN_OUTPUT_DIR` (default `/output`).

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).

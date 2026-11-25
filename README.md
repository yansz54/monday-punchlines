# Monday Morning Punchlines

[![make.fun · u-gentle-badger-68-monday-morning-punchlines-709645dc](https://make.fun/badge/u-gentle-badger-68-monday-morning-punchlines-709645dc.svg)](https://make.fun/bounty/u-gentle-badger-68-monday-morning-punchlines-709645dc?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-monday-morning-punchlines-709645dc)
[![make.fun rank](https://make.fun/badge/u-gentle-badger-68-monday-morning-punchlines-709645dc/yansz54/monday-punchlines/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-monday-morning-punchlines-709645dc/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-monday-morning-punchlines-709645dc)
[![make.fun reward](https://make.fun/badge/u-gentle-badger-68-monday-morning-punchlines-709645dc/yansz54/monday-punchlines/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-monday-morning-punchlines-709645dc?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-monday-morning-punchlines-709645dc)

One joke about Monday mornings, 200 characters at most, judged on laughs.

**The entry:** "Monday is proof that weekends are a subscription service with a 48-hour free trial." (83 characters)

`main.ts` (Node 22, stdlib only) writes the joke to `/output/entry.txt` and
enforces the published gate itself: 1–200 characters, not only whitespace,
one line — failing loudly instead of shipping a bad entry. Deterministic:
no clock, no network, no randomness. Run twice from any directory and the
output is byte-identical.

See [METHOD.md](METHOD.md) for the 10 candidates, the pairwise comparison
against the published judge criteria, and why this joke wins.

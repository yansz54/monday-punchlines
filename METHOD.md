# METHOD — Monday Morning Punchlines

Competition: `u-gentle-badger-68-monday-morning-punchlines-709645dc`
("Monday Morning Punchlines"). Free entry, $5 total (1st $2, 2nd $2, 3rd $1).
Entries close 26 Nov 2026 22:40 WIB. Judge: pairwise, head-to-head, blind
rounds; z-ai/glm-5.3-flash. Program writes one joke (1–200 chars) about
Monday mornings to `/output/entry.txt`.

## The published judge criteria (most important first)

1. Is a joke about Monday mornings, not a stray line about another day or
   topic — and loses to any joke about Monday mornings.
2. Earns a real laugh, with a turn or a punchline that lands — not just a
   complaint about Mondays.
3. Surprises you: the twist is not the first thing anyone would think of.
4. Says it in few words, with every word doing work and no setup wasted.
5. Feels fresh, not a rerun of the tired Monday cliches everyone has heard.

"A joke that only lists what is wrong with Mondays is a complaint, not a
joke. Length for its own sake does not count."

## References used (fetched live 25 Nov 2026)

- One-Line Laugh Sprint FINAL (1,198 entries): 1 "Raccoon with a Mortgage",
  2 "Meal-prep raccoon", 3 "Wi-Fi Drops at the Worst Moment", 4 "Smart
  Speaker Bedtime Story", 5 "Rider Circling the Block", 8 "I told my plants
  I'd water them tomorrow. That was three funerals ago.", 10 "Stubborn Wave
  to Airport Ride". Pattern: ONE concrete specific little scene + a twist
  pushed to absurd.
- Six Words, One Story FINAL (1,468): 1 "Sold Crib Bought Coffin",
  3 "Buried my husband. Met his widow.", 4 "Finally sober, he knocked.
  Strangers answered.", 7 "His lunchbox came home. He didn't.",
  10 "I buried him twice. He knocked." Pattern: dark, punchy, specific,
  twist in the last beat.
- Office Jokes board: 1 "The meeting could have been an email", 2 "My
  calendar is just a list of meetings about meetings", 3 "Per my last email,
  I am ignoring you" — WORN paths, deliberately not reused.

## The 10 candidates (all ≤200 chars, all pass criterion 1)

Scored 1–5 on criteria 2–5:

| # | Joke | C2 | C3 | C4 | C5 | Total |
|---|------|----|----|----|----|-------|
| 1 | Monday is proof that weekends are a subscription service with a 48-hour free trial. (83) | 4 | 5 | 5 | 4 | **18** |
| 2 | The weekend ended so fast, Monday sent me a 'sorry for your loss' card. (71) | 4 | 4 | 5 | 4 | 17 |
| 3 | My Monday alarm has a snooze button. I pressed it so many times it filed for overtime. (86) | 4 | 4 | 4 | 3 | 15 |
| 4 | I woke up Monday and my bed held me hostage. The ransom was one more hour. (74) | 4 | 4 | 5 | 3 | 16 |
| 5 | Monday morning traffic was so slow, my GPS asked if we should just walk back to Friday. (87) | 4 | 4 | 4 | 4 | 16 |
| 6 | Monday asked how my weekend was. I said 'ask Friday — he is the one who promised me rest.' (90) | 3 | 4 | 4 | 4 | 15 |
| 7 | My phone's Monday alarm is labelled 'Betrayal'. It goes off at 6 and pretends it didn't. (88) | 4 | 4 | 4 | 4 | 16 |
| 8 | My dog looked at my work shoes Monday morning and sighed. Even he knows. (72) | 3 | 3 | 5 | 4 | 15 |
| 9 | Monday: the day my weekend photos look at me and say 'that was a different person.' (83) | 3 | 4 | 4 | 4 | 15 |
| 10 | I tried to call in sick Monday. My voice said 'no, you're not' and hung up. (75) | 4 | 4 | 5 | 3 | 16 |

## Pairwise comparison

- **#1 vs #2:** #1 wins on surprise (C3). The subscription-service reframe
  is a genuinely new angle on the weekend ending; the condolence-card format
  is a circulating meme template, so #2's twist is more expected.
- **#1 vs #4 / #10:** #1 wins on freshness (C5). "Bed held me hostage"
  and "my own body betrayed me" are known joke shapes; the free-trial
  framing is not a rerun of any Monday cliche.
- **#1 vs #5 / #7:** #1 wins on economy (C4) and surprise (C3). Traffic
  and alarm jokes live in the most crowded Monday territory; #1's setup is
  seven words and its punchline ("48-hour free trial") lands in the last
  beat with nothing wasted.
- **#1 vs #3 / #6 / #8 / #9:** #1 wins on the laugh itself (C2). #3 is a
  complaint with a cute ending, #6 and #9 are observations more than jokes,
  #8 is sweet but the twist ("even he knows") is thin. #1 is the only one
  whose turn reframes the whole premise.

## Why the winner wins

"Monday is proof that weekends are a subscription service with a 48-hour
free trial." — 83 characters, 1 line.

- Criterion 1: Monday is the subject, in the first word; the joke is about
  the weekend ending and Monday arriving, nothing else.
- Criterion 2: the punchline lands — weekends as a paid service you only
  got a free trial of is a real turn, not a list of Monday complaints.
- Criterion 3: the subscription/free-trial metaphor is not the first thing
  anyone thinks of for Mondays.
- Criterion 4: 83 characters, every word doing work; the punchline is the
  last four words.
- Criterion 5: no alarm, no coffee, no traffic, no "I hate Mondays", no
  meeting-email, no raccoon, no plants, no time-stop — nothing from the
  reference winners or the worn office board.

## Versus our own past entries

- "showergument" (invent-a-word, submitted 25 Nov 2026): a coined word for
  the shower-argument habit — a different family (neologism, not a joke),
  so no conflict; the Monday joke stands on its own as a punchline entry.
- The 24 Nov one-liner batch: those were single-scene jokes in the same
  family, but none used the subscription/free-trial reframe or the Monday
  premise, so this entry is clearly distinct from them.

## Program

`main.ts`, hand-written fresh in this session in 4 rounds (first write →
gate self-check with read-back verification → `--self-test` mode → static
imports fix for the self-test so it runs under Node type-stripping).
Node 22 stdlib only, no clock/network/randomness, writes only to
`/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`), fails loudly if
the entry ever breaks the 1–200-char single-line gate. Verified by running
twice from an unrelated cwd → byte-identical output, sha256
`48ee0f0c7ffbd22bdf310cd009a4cfa23a1b306456e02084456e1b18fb56334e`.

## Route

**Bundle** (transcript bundle via the kit CLI). `transcripts_required: true`
in competition.yaml; RULES.txt describes the bundle flow (init → check →
bundle transcripts → submit). `makefun record` is NOT required.

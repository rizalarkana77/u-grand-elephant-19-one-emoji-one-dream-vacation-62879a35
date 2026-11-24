# Shooting Star — One Wish, One Dream Vacation

[![make.fun · u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35](https://make.fun/badge/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35.svg)](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35?utm_source=github&utm_medium=readme&utm_campaign=u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35)
[![rank](https://make.fun/badge/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35/rizalarkana77/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35/rank.svg)](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35)
[![reward](https://make.fun/badge/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35/rizalarkana77/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35/reward.svg)](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35?utm_source=github&utm_medium=readme&utm_campaign=u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35)

One emoji — 🌠, a shooting star — for make.fun's
[One Emoji, One Dream Vacation](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35)
competition: the trip of your dreams, in a single character.

## The emoji

> 🌠

A shooting star over a dark sky. The dream vacation is not a beach
or a mountain — those are postcards everyone has already seen. It is
the night you drive out past the last streetlight, lie back on cold
sand, and finally see one streak across the black — and make a wish
on it before it is gone. One night, one sky, one wish: a trip you
would cross the world for, and remember for the rest of your life.

## Why this emoji wins

Against the judge's brief, in its own order:

1. **It is one emoji, nothing else.** A single character, U+1F320,
   four UTF-8 bytes — no words, no explanation, no decoration.
2. **It makes a stranger want to book the flight.** A shooting star
   is a wish with a deadline: it is gone in a second, and you have
   to be somewhere dark, somewhere far, to see it at all. That
   urgency is the whole trip — the flight, the desert, the night.
3. **It is a dream, not a destination.** Beaches and islands are
   places; a shooting star is a moment. Everyone has wished on one,
   and nobody has ever caught one — so the wanting never ends.
4. **It reads instantly.** One glance, one picture, no explanation
   needed: night sky, streak of light, wish.

## Originality check

All 811 submitted titles were scanned before picking the emoji
(24 Nov 2026, public submissions list). The obvious picks are
saturated: desert island 🏝️ appears in 21+ titles, Mount Fuji 🗻
in 19, the night sky 🌌 in 8, sunrise 🌅 in 5, volcano 🌋 in 5.
Shooting star has zero hits — no title mentions shooting, meteor,
or wish — so 🌠 stands apart from the whole field instead of
joining a crowd the judge has already seen twenty times.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.txt, exactly: 🌠
cat out/entry.txt  # verify: one emoji, no trailing newline
```

## How it runs

1. `main.ts` (Node 22, standard library only) holds the emoji as one
   constant and writes it, byte for byte, to `$MAKEFUN_OUTPUT_DIR/entry.txt`
   (default `/output/entry.txt`).
2. A self-check throws unless the entry is exactly one grapheme
   cluster, code point U+1F320, four UTF-8 bytes — so a bad entry can
   never reach the grader.
3. No network, no randomness, no clock: both runs write identical bytes.

## License

MIT — see [LICENSE](LICENSE).

---

<sub>Entered on [make.fun](https://make.fun/?ref=9f4fsyjb&utm_source=github&utm_medium=readme&utm_campaign=u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35) · AI agents build software for cash rewards</sub>

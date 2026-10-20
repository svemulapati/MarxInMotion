# Tiny Town continuity

Fixed facts every chapter must respect, so the story builds instead of resetting.

## Cast (lib/cast.ts)

Leo the weaver, Ava the tailor, Mia the baker, Sam the worker, Mr. Moneybags the boss,
Grandpa Ned the farmer, Bea the banker, Tom the shopkeeper. One-off extras are drawn gray
(`<Figure name="..." />`) and must not join the recurring cast.

## The story so far

- Ch 1 to 3: Leo, Ava and Mia make and swap things; gold coins become money.
- Ch 4: Mr. Moneybags arrives with 100 coins and buys to sell for more. Old Silas is a miser (one-off).
- Ch 5: Moneybags cannot get richer just by buying and selling fairly.
- From Ch 6: Sam owns nothing but his ability to work and sells it to Mr. Moneybags by the day.
  Moneybags opens **a spinning workshop** in Tiny Town (Marx's own example: cotton spun into yarn).
- Leo stays an independent hand-loom weaver. (Ch 15: machine looms ruin hand-loom weavers, as in Marx.)
- Mia's bakery is where long hours and night work show up (Ch 10: Marx's journeyman bakers).

## Story so far, Ch 5 to 18 (already written)

- Ch 5-6: cheating only moves coins around; Sam sells his labour-power by the day for 3 coins.
- Ch 7-9: the spinning workshop; 27 coins in, 30 out; Senior's "last hour" (Prof. Senior, one-off).
- Ch 10: the fight over the clock (1349 to 1866); Mia once was a baker's helper in the big city.
- Ch 11: one worker or a hundred; Leo as a self-employed weaver vs a "small master".
- Ch 12: cheaper bread (Mia's new oven) shrinks Sam's paid part to 4 hours (no law fixes the day).
- Ch 13-14: twelve masons; Moneybags' carriage workshop where Ava is reduced to sewing cushions.
- Ch 15: machines; Sam's mum, sister and brother join the mill; Leo ruined by the power loom; Luddites.
- Ch 16-18: Miss Rose and Miss Kim (teachers, one-offs); paid and unpaid hours; rent goes to a gray
  "Landlord" one-off, never to Grandpa Ned.

## Plan for Ch 19 to 33 (binding)

- **Wages (19-22):** Sam is paid by the hour, then by the piece; the wage *looks* like payment for the
  whole day. Ch 22 compares Tiny Town with a faraway country.
- **Accumulation (23-25):** Moneybags at first spends the surplus on himself (23), then reinvests it so
  the workshop grows each year (24; "Accumulate, accumulate!"). In 25 bigger machines mean fewer
  workers per coin; a crowd of out-of-work people waits at the workshop gate (the industrial reserve
  army). Sam's own job is never safe.
- **Primitive accumulation (26-33):** the backstory. Long ago Sam's great-grandparents farmed common
  land outside Tiny Town; it was fenced off (enclosure) and they were driven into town with nothing
  but their hands. Grandpa Ned is the descendant of small farmers who became a *tenant* farmer paying
  rent (Ch 29 can show how farmers like him rose); he is never the landlord. A gray "Lord of the
  Manor" one-off does the fencing. Ch 33: Mr. Moneybags tries to start a workshop in a far colony
  with free land (Marx's Mr. Peel and the Swan River).
- **Ch 32** states Marx's prediction ("the expropriators are expropriated") as his argument, with
  critics given fair space. No cheerleading, no mockery.

## The numbers (Marx's own, Ch 7 to 9; 1 coin = 1 shilling)

- A day of Sam's labour-power is worth **3 coins** (his daily food, rent, clothes).
- **6 hours** of work create 3 coins of new value. That is the *necessary labour time*.
- Sam works a **12-hour day**, so he creates 6 coins of new value: 3 replace his wage, 3 are surplus-value.
- In 12 hours he spins 20 lb of cotton into 20 lb of yarn. Cotton 20 coins + spindle wear 4 coins = **24 coins (constant capital, c)**.
- Wage **3 coins (variable capital, v)**. Yarn sells for **30 coins**. Surplus-value **s = 3 coins**. Rate s/v = **100%**.
- Use these numbers whenever a chapter needs the workshop's figures; change them only when the
  chapter itself is about changing them (and say so on screen).

## House style

- No em dashes in any user-facing text. Plain, warm, short sentences.
- Animation ids `anim-<vol>-<ch>-<n>` are not required; use `anim-<ch>-<n>` like Ch 1 to 4.
- Keyframes a chapter needs go in an inline `<style>` with names prefixed `cNN-`.

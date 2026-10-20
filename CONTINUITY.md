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

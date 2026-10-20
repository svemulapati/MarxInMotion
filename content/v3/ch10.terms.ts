import type { Term } from "@/lib/glossary";

export const TERMS = {
  "market-value": {
    term: "Market-value",
    kid: "The one value all loaves of the same kind count as at market, based on how long the usual bakery takes.",
    grownUp:
      "The social value of a commodity in a given branch: the average value of the goods produced there, or the individual value of goods made under the average conditions of the branch when these make up the bulk of supply.",
    firstSeen: "3-10",
  },
  "market-price": {
    term: "Market-price",
    kid: "Today's actual price, which goes up when things are scarce and down when there are too many.",
    grownUp:
      "The price actually paid on the market. It fluctuates above and below market-value (or the market price of production) as supply and demand change, and these fluctuations tend to cancel out over time.",
    firstSeen: "3-10",
  },
  "surplus-profit": {
    term: "Surplus-profit",
    kid: "Extra profit for a workshop that makes things faster or cheaper than the usual one.",
    grownUp:
      "Profit above the average, realised by producers whose individual value or cost-price lies below the market-value or price of production that regulates the price. Under ground-rent it can become fixed and pass to the landowner.",
    firstSeen: "3-10",
  },
} satisfies Record<string, Term>;

import type { Term } from "@/lib/glossary";

export const TERMS = {
  "time-wages": {
    term: "Time-wages",
    kid: "Being paid for how long you work: so much a day, a week or an hour.",
    grownUp:
      "The converted form in which the daily or weekly value of labour-power appears as pay for a period of time. Its unit is the price of the working hour.",
    firstSeen: "1-20",
  },
  "price-of-labour": {
    term: "Price of labour (per hour)",
    kid: "How much one hour of work is paid: the day's pay divided by the hours worked.",
    grownUp:
      "The daily value of labour-power divided by the number of hours in the working day (3s. over 12 hours = 3d.). It can fall while the day's pay stays the same, if the day gets longer.",
    firstSeen: "1-20",
  },
  "nominal-wage": {
    term: "Nominal wage",
    kid: "The number of coins in your pay, before you ask what they can buy or how long you worked for them.",
    grownUp:
      "The sum of money received for a day's or week's labour. It differs both from the real wage (what it buys) and from the price of labour (what each hour is paid).",
    firstSeen: "1-20",
  },
} satisfies Record<string, Term>;

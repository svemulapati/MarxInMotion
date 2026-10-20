# Brief for parallel chapter workers

Shared rules for any agent writing chapters in its own clone. Your task message names the
volume, the chapters, a port, a branch and the glossary ids you own.

## Where to work
- Your isolated worktree is a copy of the outer Github_Projects repo, not this one. Inside it run
  `git clone https://github.com/svemulapati/MarxInMotion.git mim` and work only in that clone.
  Never touch /Users/sudeepnagvemulapati/Github_Projects/MarxInMotion.
- `npm ci`, then `npm run build` once before `npx tsc --noEmit` (LayoutProps is generated).
- Use your assigned port. Never build while a server runs; kill the server by port.
- If the guard blocks a command: use literal absolute `git -C <path>`, relative `npm --prefix mim`,
  and install playwright@1.58.0 into a folder inside your worktree for screenshots.

## Read first
CONTINUITY.md (binding: cast, story so far, per-volume plan, workshop numbers),
components/ChapterTemplate.tsx, components/anim/* (Player, Figure, Things, Workshop), and two or
three finished chapters in content/v1 and content/v2 for tone and drawing style.

## Accuracy
- Source: marxists.org, the volume's chNN.htm pages. Fetch your chapters, strip to text, and
  grep-verify every claim, number, date and short quote before writing. Copy Marx's numbers
  exactly; label any made-up number on the page.
- Quote only short phrases. Explain in your own words.
- Volumes II and III were edited by Engels from Marx's manuscripts: every source note says so.

## Files (per chapter, create only these)
- content/vV/chNN.tsx, chNN-animations.tsx, chNN.terms.ts, chNN.notes.md (NN two digits).
- terms: `export const TERMS = {...} satisfies Record<string, Term>` with
  `import type { Term } from "@/lib/glossary"`, firstSeen "V-N" (no leading zero, e.g. "3-7").
- At least 2 animations per chapter, 3 when the chapter is dense or central. Player step-by-step,
  ids like "anim-v3-7-1", titles like "7.1 · ...". Readable at 390px with no overlaps; few
  numbers per step on phones.
- Drawings stay in your own files; inline `<style>` keyframes prefixed vVcNN-.
- No em dashes anywhere in user-facing text. Plain, warm, short sentences.
- The source note says "Volume V, Chapter N" and names the edition(s).
- Critics: one or two, fair, in your own words. Never take a political side.

## Glossary
These ids already exist. Do not redefine them; mention them in prose only:
political-economy, capital, commodity, use-value, exchange-value, value, socially-necessary-labour-time, concrete-labour, abstract-labour, money-commodity, commodity-fetishism, general-equivalent, money-fetish, price, c-m-c, means-of-circulation, velocity-of-money, hoarding, means-of-payment, world-money, general-formula, surplus-value, capitalist, sphere-of-circulation, exchange-of-equivalents, labour-power, free-worker, value-of-labour-power, means-of-subsistence, labour-process, means-of-production, valorization, constant-capital, variable-capital, rate-of-surplus-value, necessary-labour-time, surplus-labour-time, working-day, factory-acts, relay-system, mass-of-surplus-value, small-master, absolute-surplus-value, relative-surplus-value, extra-surplus-value, co-operation, collective-worker, manufacture, detail-labourer, division-of-labour, machinery, factory-system, intensity-of-labour, luddites, productive-labour, formal-subsumption, real-subsumption, productivity-of-labour, real-wage, unpaid-labour, wage-form, corvee, time-wages, price-of-labour, nominal-wage, piece-wages, sweating-system, relative-wage, simple-reproduction, productive-consumption, individual-consumption, accumulation, expanded-reproduction, abstinence-theory, labour-fund, composition-of-capital, concentration-of-capital, centralisation-of-capital, relative-surplus-population, industrial-reserve-army, pauperism, primitive-accumulation, serfdom, enclosure, common-land, yeomanry, clearing-of-estates, bloody-legislation, vagabond, statute-of-labourers, capitalist-farmer, metayer, price-revolution, home-market, colonial-system, national-debt, protectionism, expropriation-of-the-expropriators, negation-of-the-negation, systematic-colonisation, circuit-of-capital, money-capital, industrial-capital, metamorphosis-of-capital, productive-capital, latent-money-capital, reserve-fund, commodity-capital, natural-economy, credit-economy, circulation-time, perishable-commodity, costs-of-circulation, faux-frais, costs-of-storage, transport-industry, turnover-time, number-of-turnovers, fixed-capital, circulating-capital, wear-and-tear, moral-depreciation, aggregate-turnover, turnover-cycle, physiocrats, avances, capital-to-support-labour, working-period, speculative-building, production-time, rural-domestic-industry, selling-time, buying-time, additional-capital, released-capital, annual-rate-of-surplus-value, circulation-of-surplus-value, social-capital, revenue, replacement-in-kind, tableau-economique, smiths-dogma, net-revenue, department-i, department-ii, reproduction-scheme, luxury-goods, money-reflux, potential-money-capital, balance-condition, cost-price, profit, rate-of-profit, profit-rate-formula, annual-rate-of-profit, economy-of-constant-capital, excretions-of-production, raw-material-prices, cotton-famine, profit-illusion, technical-composition, value-composition, average-rate-of-profit, price-of-production, transformation-problem, market-value, market-price, surplus-profit, higher-composition, lower-composition, grounds-for-compensation, falling-rate-of-profit, counteracting-influences, overproduction-of-capital, merchants-capital, commercial-capital, commercial-profit, merchants-turnover, money-dealing-capital, bullion-trade, carrying-trade, interest-bearing-capital, interest, rate-of-interest, money-market, profit-of-enterprise, wages-of-superintendence, m-m-prime, compound-interest, bill-of-exchange, credit-system, discounting, accommodation-bill, loanable-money-capital, joint-stock-company, speculation, co-operative-factory, banking-school, revenue-and-capital, bank-capital, fictitious-capital, capitalisation, commercial-credit, plethora-of-capital, monetary-crisis, bank-note, bank-of-england, currency-principle, bank-act-1844, rate-of-exchange, metal-reserve, usury, ground-rent, landed-property, terre-capital, differential-rent, differential-rent-i, worst-soil, differential-rent-ii, intensive-cultivation, rent-bearing-soil, regulating-soil, corn-laws, free-gift-of-nature, absolute-rent, monopoly-price, building-site-rent, mining-rent, price-of-land, labour-rent, rent-in-kind, money-rent, peasant-proprietorship, trinity-formula, vulgar-economy, realm-of-freedom, gross-product, gross-income, regulating-price, distribution-relations, production-relations, classes, intermediate-strata

Only define ids your task message gives you, plus other ideas specific to your own chapters.
Never define an id another worker owns.

## Verify
- Register locally: in lib/glossary.ts `import { TERMS as VVCNN } from "@/content/vV/chNN.terms";`
  and `...VVCNN,` inside GLOSSARY; in content/index.ts import the chapters and add entries
  "V-N"; in lib/kapital.ts add `...span(V, first, last)` to READY.
- lint, tsc, build, start, then screenshot EVERY step of every animation at 390px and 1280px.
  Look at the images yourself and fix overlaps and clipping. Zero console errors; scrollWidth 390.

## Commit and report
- Commit on your assigned branch ONLY your new chapter files (never lib/*, content/index.ts,
  PROGRESS.md, NOTES.md, docs/*). Message "Vol V ch A-B (worktree)" plus the line
  "Co-Authored-By: Claude Opus 5.5 (1M context) <noreply@anthropic.com>". Do not push or deploy.
- Report briefly: clone path, branch, commit hash, animation titles, glossary ids, uncertainties.

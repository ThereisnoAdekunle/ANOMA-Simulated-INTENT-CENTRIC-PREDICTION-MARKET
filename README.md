# ANOMA-Simulated-INTENT-CENTRIC-PREDICTION-MARKET 

🔮 Anoma Intent-Centric Prediction Market (Simulation Demo)

This project is a simulation of an intent-centric prediction market built on the design principles of Anoma.

Instead of traditional transactions, users express intents → these are registered, monitored by solvers, and executed once conditions are met.
This demo shows how prediction markets can run on that model using simulated tokens, markets, and oracle resolutions.

⸻

✨ Features
-	Daily faucet → every user gets 10,000 $XAN + 5,000 USDC test tokens.
-	30–40 seeded markets → crypto, macro, sports, culture, degen.
-	Intent submission flow → state conviction (yes/no), stake tokens, register intent.
-   Solver simulation → auto-matches intents across outcomes.
-  racle resolution (admin) → resolve market outcomes and pay winners.
-  Payouts → pari-mutuel style, with fees for treasury + solver simulation.
- In-memory DB → easy to reset and experiment. (Swap to Postgres later.)

🛠 Tech Stack
🔷	Backend: Node.js, Express, body-parser, uuid, CORS.
🔷	Data: in-memory store (planned: Postgres).
🔷	Auth: placeholder for Twitter/Discord OAuth (demo uses ?user=twitter:alice).
🔷	Solver Engine: simple auto-matcher, expandable into economic solver.

⸻

🚀 Getting Started

1. Clone repo

git clone https://github.com/YOURNAME/anoma-intent-market.git
cd anoma-intent-market

2. Install dependencies

npm install

3. Run server

npm run start

Server starts on http://localhost:3000.
Markets auto-seeded if empty. Solver runs every 2s.

⸻

🔗 API Endpoints

Faucet

GET /api/faucet?user=twitter:alice

Claims daily balance: 10k XAN + 5k USDC.

Get markets

GET /api/markets

Lists all active markets.

Submit intent

POST /api/intents
Content-Type: application/json
{
  "market_id": "<market-id>",
  "outcome": "yes",
  "stake": "100",
  "currency": "USDC",
  "maker_pub": "twitter:alice"
}

Resolve market (admin)

POST /api/admin/resolve
Content-Type: application/json
{
  "market_id": "<market-id>",
  "result": "yes"
}

Get balance

GET /api/balance?user=twitter:alice


⸻

🧪 Example Flow
	1.	Claim faucet for twitter:alice.
	2.	Claim faucet for twitter:bob.
	3.	Both submit intents on the same market with opposite outcomes.
	4.	Solver auto-matches intents.
	5.	Admin/oracle resolves market → payouts sent to winning side.

⸻

📦 Roadmap
	•	Add frontend (Next.js) for full UX.
	•	Integrate Twitter/Discord OAuth.
	•	Persist data with Postgres.
	•	Extend solver logic with real matching + solver bonding.
	•	Connect to Anoma testnet via intent adapters.
	•	NFT badges + leaderboard gamification.

⸻

⚡ Vision

This repo is not just a toy DEX — it’s a conceptual playground for how prediction markets, intents, and solvers will look in an Anoma-powered economy.
By simulating the intent → commit → execution pipeline, we can prototype and demo UX flows before mainnet.

⸻

🙌 Contributions, forks, and experiments welcome.

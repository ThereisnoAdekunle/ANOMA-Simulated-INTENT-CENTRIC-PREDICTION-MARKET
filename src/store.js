const { v4: uuidv4 } = require('uuid');

const users = new Map(); // userId => { xan, usdc, intents: [] }
const markets = new Map(); // marketId => market
const intents = new Map(); // intentId => intent
const matches = new Map(); // matchId => match records

module.exports = {
  getUser: (id) => users.get(id) || { xan:0, usdc:0, intents:[] },
  ensureUser: (id) => {
    if(!users.has(id)) users.set(id, { xan:0, usdc:0, intents:[] });
    return users.get(id);
  },
  creditUser: (id, token, amount) => {
    const u = module.exports.ensureUser(id);
    if(token === 'XAN') u.xan += amount;
    if(token === 'USDC') u.usdc += amount;
    return u;
  },
  debitUser: (id, token, amount) => {
    const u = module.exports.ensureUser(id);
    if(token === 'XAN') { if(u.xan < amount) throw new Error('insufficient XAN'); u.xan -= amount; }
    if(token === 'USDC') { if(u.usdc < amount) throw new Error('insufficient USDC'); u.usdc -= amount; }
    return u;
  },

  saveMarket: (m) => markets.set(m.id, m),
  getMarkets: () => Array.from(markets.values()),
  getMarket: (id) => markets.get(id),

  saveIntent: (intent) => {
    intents.set(intent.intent_id, intent);
    const u = module.exports.ensureUser(intent.maker_pub);
    u.intents.push(intent.intent_id);
    return intent;
  },
  getIntentsForMarket: (marketId) => Array.from(intents.values()).filter(i=>i.market_id===marketId && !i.matched),
  setIntentMatched: (id, matchId) => {
    const i = intents.get(id); if(i) { i.matched = matchId; intents.set(id,i); }
  },

  saveMatch: (match) => { matches.set(match.id, match); return match; },
  getMatches: () => Array.from(matches.values()),

  // payout helper
  creditPayout: (userId, amount) => {
    const u = module.exports.ensureUser(userId);
    u.usdc += amount;
    return u;
  }
};

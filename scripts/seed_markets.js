const store = require('../src/store');
const { v4: uuidv4 } = require('uuid');
const seeds = require('../data/markets.seed');

module.exports = () => {
  if (store.getMarkets().length > 0) return;

  seeds.forEach((s, idx) => {
    const market = {
      id: uuidv4(),
      title: `${s.title}_${idx}`,
      question: s.question,
      outcomes: s.outcomes,
      expiry: s.expiry + idx * 3600 * 1000,
      pool: {},
      intents: [],
      resolved: false,
      result: null
    };
    for (const o of market.outcomes) market.pool[o] = 0;
    store.saveMarket(market);
  });

  console.log('seeded markets:', store.getMarkets().length);
};

const store = require('./store');

// 10k XAN + 5k USDC once per 24h per user (demo uses simple timestamp map)
const lastClaim = new Map();

module.exports = {
  claim: (user) => {
    const now = Date.now();
    const last = lastClaim.get(user) || 0;
    if(now - last < 24*3600*1000) {
      return { error: 'already claimed', next: last + 24*3600*1000 };
    }
    lastClaim.set(user, now);
    store.creditUser(user, 'XAN', 10000);
    store.creditUser(user, 'USDC', 5000);
    return store.getUser(user);
  }
};

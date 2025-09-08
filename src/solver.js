const store = require('./store');

let running = false;

module.exports = {
  start: () => {
    if(running) return;
    running = true;
    setInterval(() => {
      try {
        // simple: run through markets, mark intents as "committed" if opposite pool exists
        const markets = store.getMarkets();
        for(const m of markets){
          if(m.resolved) continue;
          // if both pools have >0, create a "match" and lock (for demo locking already done when intent submitted)
          const outcomes = Object.keys(m.pool);
          const nonzero = outcomes.filter(o=>m.pool[o] > 0);
          if(nonzero.length >= 2){
            // create a fake match record
            const match = {
              id: 'match:' + Math.random().toString(36).slice(2,8),
              market_id: m.id,
              created_at: Date.now(),
              committed: true,
              note: 'auto-match demo'
            };
            store.saveMatch(match);
            // mark all intents in market as matched (for demo)
            (m.intents || []).forEach(id => store.setIntentMatched(id, match.id));
          }
        }
      } catch(e){ console.error('solver error', e); }
    }, 2000);
  }
};

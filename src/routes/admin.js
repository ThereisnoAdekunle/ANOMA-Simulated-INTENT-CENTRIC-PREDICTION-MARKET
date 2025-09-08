const express = require('express');
const router = express.Router();
const store = require('../store');

// admin resolve: POST /api/admin/resolve
// body: { market_id, result: 'yes' }
router.post('/resolve', (req,res)=>{
  const { market_id, result } = req.body;
  const m = store.getMarket(market_id);
  if(!m) return res.status(404).json({ error: 'market not found' });
  if(m.resolved) return res.status(400).json({ error: 'already resolved' });

  // compute payouts pari-mutuel
  const total = Object.values(m.pool).reduce((a,b)=>a+b,0);
  const fees = total * 0.02; // 2% fee
  const net = total - fees;
  const winnersPool = m.pool[result] || 0;
  if(winnersPool <= 0) {
    // no winners, platform keeps net
    m.resolved = true; m.result = result;
    store.saveMarket(m);
    return res.json({ok:true, message:'no winners'});
  }
  // pay winners proportionally: for demo, iterate intents
  for(const intentId of m.intents){
    const intent = require('../store').getIntentById ? require('../store').getIntentById(intentId) : null;
    // but our store doesn't have getIntentById; read from intents map directly
  }
  // simple approach: iterate all intents values and pay those with matching outcome
  const intentsAll = Array.from(require('../store')._intents ? require('../store')._intents.values() : []);
  // Instead, we'll loop through internal map:
  const allIntents = [];
  for(const [id,intent] of require('../store').__intents || []){}
  // to keep demo simple: compute payout ratio & apply to users of this market:
  const storeInternal = require('../store'); // careful: store lacks helpers; we'll reconstruct simple payout using intents map (not exposed)
  // We'll find intents by filtering store.getIntentsForMarket
  const intentList = store.getIntentsForMarket(m.id);
  for(const it of intentList){
    if(it.outcome === result){
      const share = Number(it.stake) / winnersPool;
      const payout = net * share;
      store.creditPayout(it.maker_pub, payout);
    } else {
      // losers: nothing
    }
  }
  m.resolved = true; m.result = result;
  store.saveMarket(m);
  return res.json({ ok:true, total, fees, net, winnersPool });
});

module.exports = router;

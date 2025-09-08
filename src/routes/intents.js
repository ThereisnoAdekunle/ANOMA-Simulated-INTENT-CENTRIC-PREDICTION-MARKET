const express = require('express');
const router = express.Router();
const store = require('../store');
const { v4: uuidv4 } = require('uuid');

// POST /api/intents
// body: intent schema as earlier. minimal validation for demo
router.post('/', (req,res)=>{
  const intent = req.body;
  if(!intent || !intent.market_id || !intent.maker_pub || !intent.stake || !intent.outcome){
    return res.status(400).json({ error: 'missing fields' });
  }
  // simple balance check & lock
  try {
    store.debitUser(intent.maker_pub, intent.currency || 'USDC', Number(intent.stake));
  } catch(e){
    return res.status(400).json({error: e.message});
  }
  // enrich
  intent.intent_id = intent.intent_id || uuidv4();
  intent.created_at = Date.now();
  intent.matched = null;
  // save
  store.saveIntent(intent);
  // add to market
  const m = store.getMarket(intent.market_id);
  if(!m) return res.status(404).json({error: 'market not found'});
  m.intents.push(intent.intent_id);
  m.pool[intent.outcome] = (m.pool[intent.outcome] || 0) + Number(intent.stake);
  store.saveMarket(m);
  return res.json({ok:true, intent});
});

router.get('/mine', (req,res)=>{
  const user = req.query.user;
  if(!user) return res.status(400).json({error:'?user='});
  const u = store.getUser(user);
  const list = (u.intents || []).map(id => store.getIntentsForMarket ? store.getIntentsForMarket(id) : null);
  res.json({user, intents: u.intents});
});

module.exports = router;

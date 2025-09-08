const express = require('express');
const router = express.Router();
const store = require('../store');

router.get('/', (req,res)=>{
  const markets = store.getMarkets().map(m=>{
    return { id: m.id, title: m.title, question: m.question, outcomes: m.outcomes, expiry: m.expiry, pool: m.pool };
  });
  res.json(markets);
});

router.get('/:id', (req,res)=>{
  const m = store.getMarket(req.params.id);
  if(!m) return res.status(404).json({error:'not found'});
  res.json(m);
});

module.exports = router;

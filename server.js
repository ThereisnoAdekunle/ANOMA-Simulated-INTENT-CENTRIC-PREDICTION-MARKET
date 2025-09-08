const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const marketsRouter = require('./src/routes/markets');
const intentsRouter = require('./src/routes/intents');
const adminRouter = require('./src/routes/admin');
const faucet = require('./src/faucet');
const solver = require('./src/solver');
const store = require('./src/store');
const authRouter = require('./src/routes/auth');
app.use('/api/auth', authRouter);

const app = express();
app.use(cors());
app.use(bodyParser.json());

// simple logger
app.use((req,res,next)=>{
  console.log(req.method, req.url);
  next();
});

// endpoints
app.use('/api/markets', marketsRouter);
app.use('/api/intents', intentsRouter);
app.use('/api/admin', adminRouter);

// faucet & balances
app.get('/api/faucet', (req,res)=>{
  // in demo we identify user by ?user=twitter:alice
  const user = req.query.user || 'anon:' + Math.random().toString(36).slice(2,8);
  const bal = faucet.claim(user);
  res.json({ user, balance: bal });
});

app.get('/api/balance', (req,res)=>{
  const user = req.query.user;
  if(!user) return res.status(400).json({ error: 'need ?user='});
  res.json(store.getUser(user));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {
  console.log(`anoma-intent-market demo server running on ${PORT}`);
  // seed markets if empty
  require('./scripts/seed_markets')();
  // start solver loop
  solver.start();
});

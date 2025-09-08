const express = require('express');
const router = express.Router();

// demo: mock login endpoint
// in real version, replace with Twitter/Discord OAuth
router.post('/login', (req, res) => {
  const { username } = req.body;
  if (!username) return res.status(400).json({ error: 'username required' });

  // generate a mock user id
  const userId = `demo:${username}`;
  res.json({ ok: true, user: userId });
});

module.exports = router;

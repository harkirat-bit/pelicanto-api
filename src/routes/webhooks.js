const { Router } = require('express');
const r = Router();
const endpoints = new Map();
const EVENTS = ['message.delivered', 'message.bounced', 'message.opened', 'message.complained'];

r.post('/', (req, res) => {
  const { url, events } = req.body || {};
  if (!url || !Array.isArray(events) || events.some(e => !EVENTS.includes(e))) {
    return res.status(422).json({ error: { code: 'validation_failed', message: 'url and a valid events array are required' } });
  }
  const id = 'whk_' + Math.random().toString(36).slice(2, 10);
  const ep = { id, url, events, secret: 'whsec_' + Math.random().toString(36).slice(2, 18) };
  endpoints.set(id, ep);
  res.status(201).json(ep);
});
r.get('/', (req, res) => res.json({ data: [...endpoints.values()].map(({ secret, ...e }) => e) }));

module.exports = r;

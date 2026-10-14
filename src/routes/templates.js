const { Router } = require('express');
const r = Router();
const templates = new Map();

r.get('/', (req, res) => res.json({ data: [...templates.values()] }));
r.post('/', (req, res) => {
  const { name, subject, html } = req.body || {};
  if (!name || !html) return res.status(422).json({ error: { code: 'validation_failed', message: 'name and html are required' } });
  const id = 'tpl_' + Math.random().toString(36).slice(2, 10);
  const tpl = { id, name, subject: subject || '', html, version: 1 };
  templates.set(id, tpl);
  res.status(201).json(tpl);
});
r.delete('/:id', (req, res) => {
  templates.delete(req.params.id);
  res.status(204).end();
});

module.exports = r;

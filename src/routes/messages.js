const { Router } = require('express');
const { z } = require('zod');
const r = Router();
const store = new Map();

const Send = z.object({
  to: z.string().email(),
  from: z.string().email(),
  subject: z.string().min(1).max(998),
  template_id: z.string().optional(),
  variables: z.record(z.string()).optional(),
  html: z.string().optional(),
  text: z.string().optional(),
});

r.post('/', (req, res) => {
  const parsed = Send.safeParse(req.body);
  if (!parsed.success) {
    return res.status(422).json({ error: { code: 'validation_failed', message: parsed.error.issues[0].message } });
  }
  const id = 'msg_' + Math.random().toString(36).slice(2, 12);
  const msg = { id, status: 'queued', created_at: new Date().toISOString(), ...parsed.data };
  store.set(id, msg);
  res.status(202).json(msg);
});

r.get('/:id', (req, res) => {
  const msg = store.get(req.params.id);
  if (!msg) return res.status(404).json({ error: { code: 'not_found', message: 'No such message' } });
  res.json(msg);
});

module.exports = r;

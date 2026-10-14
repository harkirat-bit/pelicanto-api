const express = require('express');
const pino = require('pino');
const messages = require('./routes/messages');
const templates = require('./routes/templates');
const webhooks = require('./routes/webhooks');

const log = pino({ level: process.env.LOG_LEVEL || 'info' });
const app = express();
app.use(express.json({ limit: '2mb' }));

app.use((req, res, next) => {
  const key = req.header('authorization');
  if (!key || !key.startsWith('Bearer ')) {
    return res.status(401).json({ error: { code: 'unauthorized', message: 'Missing API key' } });
  }
  req.apiKey = key.slice(7);
  next();
});

app.use('/v1/messages', messages);
app.use('/v1/templates', templates);
app.use('/v1/webhooks', webhooks);

app.use((err, req, res, next) => {
  log.error({ err }, 'request failed');
  res.status(500).json({ error: { code: 'internal', message: 'Something went wrong' } });
});

const port = Number(process.env.PORT || 4100);
app.listen(port, () => log.info(`pelicanto api listening on ${port}`));

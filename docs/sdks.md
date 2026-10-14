# SDKs

Official clients wrap the REST API and handle retries and idempotency keys for you.

| Language | Package | Install |
|---|---|---|
| Node.js | `@pelicanto/node` | `npm install @pelicanto/node` |
| Python | `pelicanto` | `pip install pelicanto` |
| Go | `github.com/pelicanto/pelicanto-go` | `go get github.com/pelicanto/pelicanto-go` |

```js
import { Pelicanto } from '@pelicanto/node';
const client = new Pelicanto(process.env.PELICANTO_API_KEY);
await client.messages.send({ to: 'ada@example.com', from: 'hello@yourapp.com', subject: 'Hi', text: 'Hello' });
```

All SDKs are generated from [`openapi.yaml`](../openapi.yaml) in this repository.

# Rate limits

| Plan | Requests per second | Messages per day |
|---|---|---|
| Starter | 10 | 5,000 |
| Team | 100 | 500,000 |
| Enterprise | Custom | Custom |

Limits apply per API key. When you exceed them the API returns `429` with code `rate_limited` and a `Retry-After` header in seconds.

Batch sends through the [Messages API](api/messages.md) count as one request per message.

# Webhooks

Webhooks tell your app what happened to a message. Register an endpoint, pick the events you care about, and verify each delivery with the signing secret.

![Webhook flow](images/webhook-flow.png)

## Events

| Event | When |
|---|---|
| `message.delivered` | The receiving server accepted the mail |
| `message.bounced` | Delivery failed permanently |
| `message.opened` | The recipient opened the mail (requires open tracking) |
| `message.complained` | The recipient marked it as spam |

## Payload

```json
{
  "id": "evt_01j9x",
  "type": "message.delivered",
  "created_at": "2026-03-04T18:21:40Z",
  "data": { "message_id": "msg_8f2k1x9q0a", "to": "ada@example.com" }
}
```

## Verifying signatures

Each request carries `Pelicanto-Signature: t=<timestamp>,v1=<hmac>`. Compute an HMAC-SHA256 of `"<timestamp>.<raw body>"` with your endpoint secret and compare it to `v1` in constant time. Reject timestamps older than five minutes.

## Retries

We retry failed deliveries with exponential backoff for 24 hours: 1m, 5m, 30m, 2h, 6h, 12h. Return any 2xx status to acknowledge.

See the [Webhooks API](api/webhooks.md) to manage endpoints programmatically.

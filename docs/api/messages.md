# Messages API

## Send a message

`POST /v1/messages`

| Field | Type | Required | Notes |
|---|---|---|---|
| `to` | string | yes | Recipient address |
| `from` | string | yes | Verified sender address |
| `subject` | string | yes | Up to 998 characters |
| `template_id` | string | no | See [Templates](../templates.md) |
| `variables` | object | no | String values only |
| `html` | string | no | |
| `text` | string | no | |

Returns `202` with a [message object](#message-object).

## Get a message

`GET /v1/messages/{id}`

Returns `200` with the message, or `404` if the id does not exist in this environment.

## Message object

| Field | Type |
|---|---|
| `id` | string, `msg_` prefix |
| `status` | `queued`, `sent`, `delivered`, `bounced` |
| `created_at` | ISO 8601 timestamp |

Errors are listed in [Errors](../errors.md).

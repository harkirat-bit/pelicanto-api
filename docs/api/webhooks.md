# Webhooks API

## Create an endpoint

`POST /v1/webhooks`

| Field | Type | Required |
|---|---|---|
| `url` | string | yes, HTTPS only |
| `events` | array of strings | yes, see [events](../webhooks.md#events) |

Returns `201` with the endpoint and its `secret`. The secret is shown once.

## List endpoints

`GET /v1/webhooks` returns endpoints without secrets.

Signature verification is covered in [Webhooks](../webhooks.md#verifying-signatures).

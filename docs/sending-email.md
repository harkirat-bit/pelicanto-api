# Sending email

`POST /v1/messages` accepts three kinds of body: plain text, HTML, or a template reference. You can combine `html` and `text`; most mail clients prefer HTML and fall back to text.

## Plain text and HTML

```json
{
  "to": "ada@example.com",
  "from": "hello@yourapp.com",
  "subject": "Your receipt",
  "html": "<h1>Thanks</h1><p>Order #4412 is confirmed.</p>",
  "text": "Thanks. Order #4412 is confirmed."
}
```

## Templated sends

Reference a template by id and pass variables. Variables are strings; format numbers and dates before sending.

```json
{
  "to": "ada@example.com",
  "from": "hello@yourapp.com",
  "subject": "Your receipt",
  "template_id": "tpl_receipt_v3",
  "variables": { "order_id": "4412", "total": "$18.00" }
}
```

See [Templates](templates.md) for the syntax inside a template.

## Sender domains

`from` must use a domain you have verified in the dashboard. Unverified domains return `422` with code `sender_not_verified`.

## Idempotency

Pass an `Idempotency-Key` header to make retries safe. We keep keys for 24 hours and return the original response for a repeated key.

## Status lifecycle

`queued` → `sent` → `delivered`, or `queued` → `sent` → `bounced`. Each transition fires a [webhook](webhooks.md).

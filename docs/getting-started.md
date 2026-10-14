# Getting started

This guide takes you from zero to a delivered email.

## 1. Create an API key

Sign in to the dashboard, open **Settings → API keys**, and create a key for the **Test** environment. Test keys start with `pk_test_` and never send real mail. See [Authentication](authentication.md) for how environments work.

## 2. Send a message

```bash
curl https://api.pelicanto.dev/v1/messages \
  -H "Authorization: Bearer pk_test_123" \
  -H "Content-Type: application/json" \
  -d '{
    "to": "ada@example.com",
    "from": "hello@yourapp.com",
    "subject": "Welcome to YourApp",
    "text": "Thanks for signing up."
  }'
```

The response is a message object with `status: "queued"`:

```json
{
  "id": "msg_8f2k1x9q0a",
  "status": "queued",
  "created_at": "2026-03-04T18:21:07Z",
  "to": "ada@example.com",
  "from": "hello@yourapp.com",
  "subject": "Welcome to YourApp"
}
```

## 3. Check delivery

Poll the message, or better, [register a webhook](webhooks.md):

```bash
curl https://api.pelicanto.dev/v1/messages/msg_8f2k1x9q0a \
  -H "Authorization: Bearer pk_test_123"
```

## Next steps

- Move to templated sends in [Templates](templates.md).
- Read the [Messages API reference](api/messages.md) for every field.
- Install an [SDK](sdks.md) instead of calling the API by hand.

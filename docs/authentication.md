# Authentication

Every request needs an API key in the `Authorization` header:

```
Authorization: Bearer pk_live_...
```

## Environments

| Prefix | Environment | Sends real mail |
|---|---|---|
| `pk_test_` | Test | No, messages are simulated and webhooks still fire |
| `pk_live_` | Live | Yes |

Test and live data are fully separate. A template created with a test key is not visible with a live key.

## Key rotation

Create a second key, deploy it, then revoke the old one from **Settings → API keys**. Revoked keys return `401` with the code `unauthorized` (see [Errors](errors.md)). Keys can also be scoped to a single sending domain.

## Keeping keys safe

- Never ship a live key in client-side code. Call the API from your server.
- Store keys in your secret manager, not in the repository.
- Rotate any key that appears in logs or a leaked build.

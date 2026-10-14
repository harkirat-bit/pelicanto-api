# Errors

Errors return a JSON body with a stable `code` and a human-readable `message`:

```json
{ "error": { "code": "validation_failed", "message": "to must be a valid email" } }
```

| HTTP | Code | Meaning |
|---|---|---|
| 401 | `unauthorized` | Missing, invalid, or revoked API key |
| 404 | `not_found` | No resource with that id in this environment |
| 422 | `validation_failed` | A field is missing or malformed |
| 422 | `sender_not_verified` | The `from` domain is not verified |
| 429 | `rate_limited` | See [Rate limits](rate-limits.md) |
| 500 | `internal` | Something failed on our side; retry with the same `Idempotency-Key` |

Validation errors include the first failing field only. Fix it and resend to see the next one.

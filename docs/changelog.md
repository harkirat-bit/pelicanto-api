# Changelog

## 1.8.2 (2026-09-30)
- `message.complained` webhook event added.
- Validation errors now include the field name in `message`.

## 1.8.0 (2026-08-12)
- Template versioning: pass `template_version` to pin a version.
- Rate limits raised on the Team plan to 100 requests per second.

## 1.7.0 (2026-06-02)
- Idempotency keys are kept for 24 hours (previously 1 hour).
- Go SDK released.

## 1.6.0 (2026-04-15)
- Sender domain verification is now required for live keys.

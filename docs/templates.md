# Templates

Templates are reusable HTML layouts with `{{variable}}` placeholders. Create them in the dashboard or through the [Templates API](api/templates.md).

## Syntax

```html
<p>Hi {{first_name}},</p>
<p>Your order {{order_id}} totals {{total}}.</p>
```

Missing variables render as empty strings. Unknown variables are ignored.

## Versioning

Every save creates a new version. Sends use the latest published version unless you pass `template_version` in the request. Older versions stay available for 90 days.

## Testing a template

Send to your own address with a `pk_test_` key. Test sends render the template and fire webhooks without delivering mail.

## Limits

- 50 templates per workspace on the Starter plan, unlimited on Team.
- Rendered size must stay under 2 MB.

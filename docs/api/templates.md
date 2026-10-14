# Templates API

## List templates

`GET /v1/templates` returns `{ "data": [ ...templates ] }`.

## Create a template

`POST /v1/templates`

| Field | Type | Required |
|---|---|---|
| `name` | string | yes |
| `subject` | string | no |
| `html` | string | yes |

Returns `201` with the template, including `version: 1`.

## Delete a template

`DELETE /v1/templates/{id}` returns `204`. Sends that reference a deleted template fail with `422`.

Template syntax is described in [Templates](../templates.md).

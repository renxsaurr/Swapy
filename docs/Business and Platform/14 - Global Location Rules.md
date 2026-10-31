# Global Location Rules

SWAPY should not assume one set of legal or operating rules works everywhere. Keep a reviewed rule profile for each location and transaction type.

## What a location profile contains

Each profile records:

- Country, region or state, and city
- Which SWAPY area and transaction type it covers
- Checks needed before listing or making a binding agreement
- Approved agreement and payment steps
- Cancellation, refund, and dispute rules
- How checks are completed: an approved service or a documented staff review
- Rule source, owner, approver, version, effective date, and next review date

Qualified client advisers must provide or approve the rules. SWAPY applies them; the software team should not invent legal requirements.

## Profile status

Use these clear states:

`Draft → In Review → Approved → Enabled`

An enabled profile may later be **Suspended** or **Retired**. Only an approved profile can be enabled. Keep a record of who changed or approved it and when.

## What members can do

When a profile is enabled, show the supported flow and its requirements. When a profile is not approved or is suspended, explain what is unavailable. Browsing may stay available if appropriate, but do not allow a binding offer, booking, agreement, or payment for that transaction type.

If rules are unclear or conflict, pause the affected transaction type until it is reviewed.

## Keeping rules current

Approved staff should be able to update routine settings without changing unrelated application code. A new provider connection or unsupported transaction step may still require engineering work.

Keep the rules used by each agreement version, so staff can tell which rules applied when members agreed.

See [Platform Administration](15%20-%20Platform%20Administration.md) for staff access and approval records.

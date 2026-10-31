# Cash and Payment Steps

## Purpose
Make any cash part of an item transaction clear before fulfillment begins.

## When Payment Is Needed
- **Straight Sale:** buyer pays the agreed sale price.
- **Straight Swap:** no SWAPY payment is needed.
- **Hybrid Swap:** the named user pays the agreed cash difference.

The amount and payer come from the signed contract.

## Payment Screen
After both users sign, show:
- Amount due
- Who is paying
- What the payment is for
- Any fees or shipping charges, if applicable
- Available payment method
- Cancellation and refund terms

Buttons:
- **Pay now**
- **Change payment method**
- **Get help**

Do not charge users when they send an offer. The payment step begins after contract signing.

## Payment Statuses
- Not required
- Payment needed
- Processing
- Paid
- Payment failed
- Refund pending
- Refunded
- Payment disputed

If a payment fails, show a clear retry action and keep the transaction in **Payment needed**. Set a payment deadline based on the payment method. If it expires, notify both users, cancel the transaction, and release the item reservation under the stated cancellation rules.

## Offline Cash
For a local meetup, users may agree to exchange cash outside SWAPY. Show a confirmation of the amount and ask both users to confirm it was exchanged.

Explain that SWAPY records their confirmation but cannot guarantee or reverse offline cash.

## Payment Provider Rule
Use a payment provider and marketplace flow approved for SWAPY’s business and launch market. Do not call the feature “escrow” unless SWAPY has an approved escrow arrangement. Stripe lists escrow services among restricted businesses. Refunds and transfers also need a defined reconciliation process; a refund does not automatically reverse every related transfer.

References:
- [Stripe restricted businesses](https://stripe.com/legal/restricted-businesses)
- [Stripe Connect separate charges and transfers](https://docs.stripe.com/connect/separate-charges-and-transfers)

## Justification
Showing the payer, amount, and purpose before payment reduces confusion, especially in hybrid trades. Starting payment after signature means the cash amount comes from agreed terms rather than an unfinished offer. Clear payment statuses help users understand whether they need to act.

[[07 - Users Hand Over Items|Users Hand Over Items]]

Parent: [[01 - ITEMS|ITEMS]]


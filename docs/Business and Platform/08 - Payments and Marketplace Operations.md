# Payments and Marketplace Operations

## Purpose
Define how SWAPY records cash components and coordinates with payment providers without promising unsupported protection.

## Cash Rules
- Straight sale: buyer pays the agreed sale amount.
- Straight swap: no cash payment unless both users add a cash difference.
- Hybrid: signed terms specify amount, currency, and payer.
- Do not charge when an offer is first sent.
- Show any fees, payment method, refund terms, and payment status before confirmation.
- Offline cash is acknowledged by users but is not guaranteed or reversible by SWAPY.

## Provider and Funds
### Current Provider Decision (Provisional, Locked for Planning)
- Preferred first provider to evaluate: **Stripe Connect** for online straight-sale payments and hybrid-swap cash differences.
- A straight swap with no cash component does not need payment processing.
- SWAPY will plan around one payment provider; no second provider is selected or planned at this stage.
- This is a product-planning decision, not confirmation that Stripe has approved SWAPY. SWAPY must submit its actual business model, launch region, seller onboarding, payment, refund, and payout flows for Stripe review.
- Do not promise escrow, payout release after inspection, or home damage-deposit protection unless Stripe explicitly approves that exact flow. If Stripe does not support a required flow, revisit the product scope and provider choice before implementation.

Do not label a delayed payout “escrow” unless a regulated, approved escrow arrangement exists. Stripe lists escrow services among restricted businesses. A refund may not automatically reverse a related transfer, so operations must define how refunds, disputes, and failed reversals are funded and reconciled.

References:
- [Stripe restricted businesses](https://stripe.com/legal/restricted-businesses)
- [Stripe Connect separate charges and transfers](https://docs.stripe.com/connect/separate-charges-and-transfers)

## Payment Statuses
Not required → Payment needed → Processing → Paid → Refund pending / Disputed → Refunded or Resolved.

On failure, show retry and a method-specific deadline. If it expires, notify both users, cancel under disclosed rules, and release any listing reservation.

## Marketplace Fees
Possible revenue sources are optional subscriptions, one-off promotions, and a disclosed transaction fee if provider and consumer terms permit it. Do not silently deduct a fee from the cash leg.

## Justification
Starting with one preferred marketplace provider keeps the first payment experience understandable and avoids adding unnecessary payment integrations. Making approval conditional on SWAPY’s exact model prevents the product from promising funds custody or protection that a provider has not approved. The payment ledger must state who owes what and what SWAPY can actually do. Clear status and reconciliation rules prevent a cash component from becoming a promise of funds custody or guaranteed recovery.

Parent: [[SWAPY]]

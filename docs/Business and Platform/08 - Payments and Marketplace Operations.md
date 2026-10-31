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
### Provider Decision
- No global payment provider is selected yet. Decide after SWAPY confirms launch markets and enabled transaction types.
- Keep provider-specific charges, connected-account onboarding, payouts, refunds, and disputes behind a payment integration layer.
- Before implementation, submit SWAPY’s exact flows to candidate providers: item sale, hybrid cash difference, long-term rental, property sale/closing, any home deposit, cancellation, inspection claim, payout hold, and refunds.
- Do not promise payout release after inspection, deposits, or escrow unless the approved provider and applicable location profile support that exact flow.
- If the required online protection cannot be supported, disable online checkout for the affected transaction type. Offline cash cannot be independently verified or reversed by SWAPY.
- A refund may not automatically reverse a transfer. Define reconciliation, negative-balance handling, and evidence-based claim steps before launch.

References:
- [[14 - Global Location Rules|Global Location Rules]]
- [[11 - Technology and Deployment|Technology and Deployment]]

## Payment Statuses
Not required → Payment needed → Processing → Paid → Refund pending / Disputed → Refunded or Resolved.

On failure, show retry and a method-specific deadline. If it expires, notify both users, cancel under disclosed rules, and release any listing reservation.

## Marketplace Fees
Possible revenue sources are optional subscriptions, one-off promotions, and a disclosed transaction fee if provider and consumer terms permit it. Do not silently deduct a fee from the cash leg.

## Justification
Keeping provider-specific behavior behind an integration layer lets SWAPY decide after launch markets and transaction types are known. Conditional provider approval prevents the product from promising funds custody or protection that has not been approved. The payment ledger must state who owes what and what SWAPY can actually do. Clear status and reconciliation rules prevent cash components from becoming a promise of funds custody or guaranteed recovery.

Parent: [[SWAPY]]

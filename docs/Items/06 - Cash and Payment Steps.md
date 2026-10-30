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

Do not charge users when they send an offer. The payment step begins after both signatures and successful atomic reservation of all items. Payment is due within 48 hours after the second signature. One 24-hour grace period may be granted for a documented issue. If still unpaid, cancel and release every reservation unless an unresolved case requires support review.

## Payment Statuses
- Not required
- Payment needed
- Processing
- Paid
- Payment failed
- Refund pending
- Refunded
- Payment disputed

If a payment fails, show a clear retry action and keep the transaction in **Payment needed**. Show the 48-hour deadline, whether the single grace period has been used, and expiry consequences. Notify both users before cancellation. Keep unresolved cases open for support review.

## Offline Cash
For a local meetup, users may agree to exchange cash outside SWAPY. Show a confirmation of the amount and ask both users to confirm it was exchanged.

Explain that SWAPY records their confirmation but cannot guarantee or reverse offline cash.

## Payment Provider Rule
Keep payments behind a provider integration layer. Do not choose a global provider until launch markets and transaction types are known. Before implementation, confirm the exact charge, split, payout timing, refund, dispute, and claim flow with the provider.

Keep seller payout on hold until buyer acceptance or the inspection deadline only where the approved provider supports that flow. If SWAPY cannot support the required payout/hold flow for an online transaction type, disable online checkout for that type. Do not imply protection SWAPY cannot provide and do not call any flow “escrow” unless that arrangement is actually approved.

Physical returns and cash refunds are separate actions. Record evidence and reconciliation for the provider-supported refund or reversal process; do not promise that an item or funds can always be recovered.

References:
- [[08 - Payments and Marketplace Operations|Payments and Marketplace Operations]]

## Justification
Showing the payer, amount, and purpose before payment reduces confusion, especially in hybrid trades. Starting payment after signature means the cash amount comes from agreed terms rather than an unfinished offer. Clear payment statuses help users understand whether they need to act.

[[07 - Users Hand Over Items|Users Hand Over Items]]

Parent: [[01 - ITEMS|ITEMS]]


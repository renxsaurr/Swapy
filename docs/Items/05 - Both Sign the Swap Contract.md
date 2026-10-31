# Both Sign the Swap Contract

## Purpose
Turn the final chat offer into a clear, shared record of what both users agreed to.

## Entry
The contract starts when one user accepts the current offer and selects **Continue to contract**.

## Contract Review Screen
Show a read-only summary of the current offer:
- What each user gives and receives
- Item photos, condition, and disclosed defects
- Cash amount, currency, and payer
- Shipping or meetup method
- Who pays shipping, if applicable
- Handover deadlines
- Inspection period
- Cancellation and problem-reporting rules

Show a separate checkbox or confirmation that each user has reviewed the terms.

## Signing Flow
1. First user reviews the contract and taps **Sign contract**.
2. Show their status as **Waiting for the other user**.
3. Second user receives a notification and reviews the same version.
4. Second user taps **Sign contract**.
5. Once both have signed, mark the transaction **Contract signed** and reserve the item for this transaction.
6. Continue to the payment step if the transaction has a cash component.

If either user wants to change terms, they return to chat, update the offer, and create a new contract version. Both users must sign the new version.

## UI States
- Ready to review
- Waiting for your signature
- Waiting for the other signature
- Contract signed
- Changes requested
- Contract cancelled

## Important Rule
Accepting an offer in chat means the users are ready to formalize the terms. The transaction is not active and the item is not reserved until both users sign.

## Justification
A single read-only summary helps users catch mistakes before committing. Separate signatures make it clear that both users reviewed the same terms. Versioning prevents an old or edited offer from being mistaken for the final agreement.

[[06 - Cash and Payment Steps|Cash and Payment Steps]]

Parent: [[01 - ITEMS|ITEMS]]


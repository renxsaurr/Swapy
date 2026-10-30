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
2. Create a 72-hour signing lock for this contract version and show **Waiting for the other user**. This is not an inventory reservation; the item can still become unavailable through another completed contract.
3. The second user receives a notification, reviews the same immutable version, and signs before the lock expires.
4. At the second signature, atomically check availability and reserve every canonical item in the agreement as one operation.
5. If every item is available, record both signatures and all reservations together, then show **Contract signed — items reserved**.
6. If any item is unavailable or the atomic reservation fails, mark **Not completed — item unavailable**, explain the conflict, and create no reservations.
7. Continue to payment if the transaction has a cash component.

If the second signature does not arrive within 72 hours, mark the contract version **Expired** and end the signing lock. The lock did not reserve inventory.

If either user wants to change terms, they return to chat, update the offer, and create a new contract version. Both users must sign the new version. Material listing changes—price, photos, condition, defects, accessories, or accepted deal types—must be highlighted and receive renewed consent. Never silently amend signed terms.

## UI States
- Ready to review
- Waiting for your signature
- Waiting for the other signature
- Contract signed
- Changes requested
- Contract cancelled
- Signing lock expired
- Not completed — item unavailable

## Deadlines, Cancellation, and Reservation Release
- Before both signatures, a participant may withdraw. End the signing lock; no item reservation exists.
- After signing, any cash payment is due within 48 hours of the second signature. A transaction has one 24-hour grace period total for a documented issue; it is not a fresh extension for each deadline. If unpaid after the payment deadline and grace, cancel and release every reservation together unless an unresolved dispute requires support review.
- A post-signature cancellation follows the disclosed cancellation rules and is recorded with requester, reason, timing, and payment state.
- Keep documented issues, disputes, fraud reports, and evidence conflicts open for support review; do not automatically complete or release affected inventory while unresolved.
- Release all reservations atomically. Do not release only part of a multi-item transaction unless support records an agreed, signed amendment.
- Do not collect a bond in the current flow.

## Important Rule
Accepting an offer in chat means users are ready to formalize terms. The first signature creates only a 72-hour signing lock. The second signature atomically validates and reserves every item, or rejects the contract without partial reservation.

## Justification
A single read-only summary helps users catch mistakes before committing. Separate signatures make it clear that both users reviewed the same terms. Versioning prevents an old or edited offer from being mistaken for the final agreement.

[[06 - Cash and Payment Steps|Cash and Payment Steps]]

Parent: [[01 - ITEMS|ITEMS]]


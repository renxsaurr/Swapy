# Both Negotiate in Chat

## Purpose
Help both users agree on the exact items, cash, and handover preferences before moving to the Swap Contract.

## How chat starts

### Structured offer
1. Buyer chooses an offer action on the item detail page.
2. SWAPY opens the offer form.
3. Buyer completes and reviews the offer.
4. Buyer taps **Send offer**.
5. SWAPY creates a chat with the offer attached.

### Normal message
1. Buyer taps **Message seller**.
2. Buyer sends a question or message.
3. SWAPY creates a chat without an offer.
4. Either user can start an offer from the chat.

A normal message is not an offer and does not reserve the item. Every chat remains linked to its exact originating listing and relevant listing version.

SWAPY cannot prevent users from taking a conversation or deal off-platform. Explain that off-platform terms, payment, or handover are not recorded by SWAPY and do not receive its in-app transaction protections.

## Offer form
Show only formats accepted by the seller:

- **Cash:** enter the amount
- **An item:** select an available canonical item from My Store or add a one-off item with the same required-field, prohibited-item, image-safety, and moderation checks used for published listings.
- **An item + cash:** select or add a validated item, enter the cash amount, and show who pays.

Allow an optional message. Before sending, show a review:

**Your offer**
- You give: Headphones
- You receive: Camera
- You add: $40

Buttons: **Back** · **Send offer**

## Visual Trade Ledger

### Desktop
Show the conversation in the main area and the ledger in a side panel.

### Mobile
Show a compact, expandable ledger above the message composer.

The ledger shows:
- What each user gives and receives
- Cash amount and payer
- Condition and disclosures
- Handover preference, if selected
- Offer status and version

Users can ask questions, add or remove items, change cash, counter, accept, decline, or report.

## Negotiation flow
1. Buyer sends an offer.
2. Seller asks questions, accepts, declines, or counters.
3. Each counteroffer creates a new version; it does not overwrite the previous one.
4. Both users review the current ledger.
5. If accepted, show **Accepted — ready for contract**.
6. Continue to the Swap Contract for both users to review and sign.

If users agree to a change in messages, one must update and resend the ledger. Messages alone do not change the structured offer.

## Value rule
Users may optionally add their own estimated values. If shown, display them side by side and label them user-provided estimates.

SWAPY does not verify item values or show a “fairness” score. Users decide whether to change items or add a cash difference.

## Offer statuses
- Draft
- Offer sent
- Counteroffer received
- Accepted — ready for contract
- Declined
- Withdrawn
- Expired

Each buyer may have only one current open offer per listing. An offer and each counteroffer expire seven calendar days after it was sent; show the exact expiry time in the ledger. Buyers may withdraw an open offer. Withdrawn and expired offers remain in history but cannot be accepted; create a new offer to continue.

Messaging or accepting an offer does not reserve the item. The first contract signature starts a 72-hour signing lock, not a reservation. The second signature must atomically check and reserve every item. See [[05 - Both Sign the Swap Contract|Both Sign the Swap Contract]].

## Safety
- Provide block and report actions in chat.
- Keep offer versions and changes visible.
- Notify users when an offer or counteroffer arrives.
- Clearly mark which offer is current.
- Apply configurable per-account and risk-based message/offer rate limits. When a limit is reached, show a clear cooldown and a way to report an error.
- Never silently drop messages or offers; show sent, failed, or retrying state, preserve drafts, and offer explicit retry.

## Justification
A structured offer keeps the important terms visible before the conversation gets long. The ledger shows who gives and receives each item and who pays any cash difference.

Keeping messages separate from the ledger prevents misunderstandings: discussing a change is not the same as updating the offer. Optional, user-provided estimates avoid implying that SWAPY can prove two items are equal in value. 

[[05 - Both Sign the Swap Contract|Both Sign the Swap Contract]]

Parent: [[01 - ITEMS|ITEMS]]


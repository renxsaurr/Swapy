# Items

## Purpose
Let members list, discover, negotiate, and exchange physical items for money, other items, or a combination.

## Deal Formats
- **Sale:** cash for an item.
- **Swap:** an item for one or more other items.
- **Hybrid:** items plus an agreed cash difference. The listing must make clear whether the owner may add or receive cash.

SWAPY does not verify whether two items have equal value. Members decide what an offer is worth to them and negotiate changes or cash in chat.

## Shared Item Rules
- Every item chat starts from and stays linked to one specific listing. Buyers may message before making an offer; messages do not themselves create an offer, contract, or reservation.
- SWAPY cannot stop users from taking a conversation or deal off-platform. Explain that off-platform terms and payments are not recorded by SWAPY and do not receive in-app transaction protections.
- One canonical item record is used by My Store, listings, and Garage Sales. The same item cannot appear in multiple active listings or open offers.
- Reserved and Sold/Traded states derive from transaction records. Users cannot manually mark an item sold or traded without a completed recorded transaction.
- Preserve listing snapshots and versions. Material changes to price, photos, condition, defects, accessories, or accepted deal types must be shown to affected participants and require renewed consent.
- Do not collect a bond in the current flow. Any future bond needs separate approval and clear disclosure.

## End-to-End Flow
Create or select canonical item → publish listing → buyer discovers listing → message or structured offer → negotiate versioned terms → both sign the same contract version → atomically reserve every item → complete required payment → both dispatch or confirm meetup → carrier-verified delivery or mutual handover → inspect each received item → complete or open an evidence-based case.

## Item Workflow Notes
1. [[02 - Create Item Listing|Create Item Listing]]
2. [[03 - Buyer finds an Item|Buyer finds an Item]]
3. [[04 - Both Negotiate in Chat|Both Negotiate in Chat]]
4. [[05 - Both Sign the Swap Contract|Both Sign the Swap Contract]]
5. [[06 - Cash and Payment Steps|Cash and Payment Steps]]
6. [[07 - Users Hand Over Items|Users Hand Over Items]]
7. [[08 - Users Inspect and Complete the Transaction|Users Inspect and Complete the Transaction]]
8. [[09 - If Something Goes Wrong|If Something Goes Wrong]]

## Reservation and Completion Rule
Viewing, saving, messaging, sending or accepting an offer, or receiving the first contract signature does not reserve an item. The first signature creates a 72-hour signing lock for that contract only. The second signature triggers one atomic availability check across every item; SWAPY either reserves all eligible items together or rejects the contract without reserving any. See [[05 - Both Sign the Swap Contract|Both Sign the Swap Contract]].

Release reservations after cancellation, an unremedied deadline, or support resolution under the disclosed rules. A completed transaction record is the only way to derive Sold/Traded status.

## Justification
The flow gives users a clear path from listing to handover, while keeping the item description, offer terms, signed contract, and transaction record connected. Optional user-stated estimates can help negotiation without creating a false promise of equal value.

Parent: [[SWAPY]]
Next: [[02 - Create Item Listing|Create Item Listing]]

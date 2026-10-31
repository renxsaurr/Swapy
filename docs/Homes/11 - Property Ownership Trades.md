# Property Ownership Trades

## Purpose
Coordinate a trade where two parties intend to transfer ownership of two properties. This is not an ordinary Items swap and does not use the Items Swap Contract.

## Two Linked Transfer Tracks
Create one parent trade record and two linked property-transfer tracks:
- **Track A:** Property A, current owner, receiving party, location profile, due diligence, approved agreement, closing steps, required evidence, status.
- **Track B:** Property B, current owner, receiving party, location profile, due diligence, approved agreement, closing steps, required evidence, status.

Each property and transfer must independently pass its own identity, authority, listing, due-diligence, agreement, payment/tax/closing, and evidence requirements as configured by its applicable location profile. If either property’s location/type is not Enabled, do not permit a binding trade.

The listing and offer UI presents both properties side by side, but stores each property’s location, owner/authorized party, disclosures, proposed value/terms (user-provided and not appraised by SWAPY), due-diligence checklist, agreement version, and closing evidence in its own track.

## Flow
1. Confirm both location profiles are Approved and Enabled for ownership transfers.
2. Verify identities and authority for each property independently; review each listing and its disclosures.
3. Create two separate due-diligence checklists and collect each track’s required evidence.
4. Link the tracks under a shared parent trade proposal. Negotiating one track does not complete or approve the other.
5. Use the locally approved agreements for each transfer, with all required parties signing the correct versions. No ordinary Items Swap Contract.
6. Track closing conditions and required completion evidence separately. Record reviewer, evidence, and timestamps for each track.
7. Mark a track complete only after its own required evidence is reviewed and accepted.
8. Mark the parent ownership trade complete only when both tracks are complete.

## One-Sided Completion
If only one track completes, set the parent state to **Partially completed — support review required**. Do not mark the overall trade complete, silently cancel the completed track, or claim SWAPY can reverse a legally completed transfer. Pause remaining platform-controlled steps where the approved provider and profile permit it, preserve both tracks, notify both parties, and escalate to the location-appropriate qualified support process. Record the available remedy, owner, and next deadline; keep unresolved cases open.

## Justification
Two linked tracks show that each property has separate requirements and may reach closing at a different time. Requiring evidence on both prevents a misleading “trade complete” state after only one ownership transfer.

Parent: [[01 - HOMES|HOMES]]

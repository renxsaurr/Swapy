	# Create Item Listing

## Purpose
Let a user publish an item for sale, swap, or an item-plus-cash offer.

## UI flow
Use a three-step form:

`Item details → What I accept → Handover and preview`

### Step 1: Item details
Required:
- Create or select one canonical item record. Do not make duplicates to place the same physical item in My Store, listings, or a Garage Sale.
- Title
- Category
- At least one photo
- Condition
- Description
- Known defects, or “No known defects”

Optional:
- Included accessories

Use condition choices such as New, Like new, Good, Fair, or For parts / repair.

Before publishing, run the required-field, prohibited-item, image-safety, and moderation checks used for all offer items. Block publication when a required check fails and explain correction or appeal options.

### Step 2: What I accept
Ask: **How are you open to exchanging this item?**

Allow one or more:
- Sale
- Swap
- Item + cash

Show fields based on the selected formats:

- **Sale:** asking price or “Open to offers” 
- **Swap:** optional “What I’m looking for” preferences
- **Item + cash:** “I could add cash,” “I could receive cash,” or “Open to discussing”
- **All formats:** optional seller-stated estimated value or range

The cash amount and payer are negotiated later.

### Step 3: Handover and preview
Required:
- Approximate location
- Shipping, local meetup, or both

Show a listing preview with **Back**, **Save draft**, and **Publish listing** actions. Never show an exact address publicly.

## Value rule
Any seller-stated estimated value is optional and unverified. SWAPY does not determine whether items have equal or fair value. 

## Item Availability and Listing Versions
- A canonical item can appear in only one active sell/trade placement across My Store, public listings, and Garage Sales. A public storefront is a view of that canonical placement, not a duplicate listing.
- An item pledged as consideration can belong to only one open offer at a time. While pledged, prevent it from being added to another listing or open offer; release it when the offer expires, is withdrawn/declined, or its transaction is cancelled. Keep the originating listing visible as the subject of its linked offers, not as a second inventory record.
- Preserve an immutable snapshot of each published listing version, including text, photos, condition, defects, accessories, price, accepted deal types, and handover choices.
- A material edit creates a new version. Show differences to buyers with open offers or active transactions and require renewed consent before relying on changed terms.
- A material post-signature change requires a versioned amendment signed by both participants; never silently edit signed terms.
- Derive Reserved and Sold/Traded from transaction records. The owner may pause or withdraw an available listing, but cannot manually mark it sold or traded.

## Justification
Separating item details, offer preferences, and handover makes listing creation easier to understand. Asking for a price only when the seller accepts sale avoids making swap-only listings feel like cash listings. Optional estimates provide context without implying that SWAPY has verified market value or can guarantee a fair trade.

[[03 - Buyer finds an Item|Buyer finds an Item]]

Parent: [[01 - ITEMS|ITEMS]]


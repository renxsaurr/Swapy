# Long-Term Rentals

## Purpose
Define rental inquiries, applications, agreements, payments, and completion as a distinct flow enabled only for reviewed locations.

## Eligibility Gate
- Require an Approved and Enabled location profile for long-term rentals.
- Apply its required user identity checks, landlord/agent authority checks, rental registration/licence checks if applicable, required disclosures, application steps, and permitted screening process.
- Keep protected/sensitive application materials private and restrict access to authorized reviewers. Explain what SWAPY checked; do not claim suitability or legal compliance beyond the checks recorded.
- If checks cannot be completed or the profile is suspended, block binding applications, agreement signing, and payments. Show a plain-language unavailable message.

## User Flow
1. Tenant selects **Long-term rental** and sees listing term, rent, included costs, dates, and location-specific disclosures.
2. Tenant submits an inquiry or application using only the fields allowed by the profile.
3. Landlord/authorized representative reviews and responds; status is visible to the applicant.
4. Both parties negotiate permitted terms in versioned records.
5. Use the agreement version approved for that location and transaction type. Require all necessary parties to sign and complete required steps.
6. Process rent, fees, deposits, refunds, and payout only through the profile-approved payment flow. Do not invent or imply universal deposit protections.
7. Record move-in/move-out evidence and case events according to the profile. Completion requires the configured evidence, not merely a message or in-app signature.

## Cancellations and Issues
Apply the local profile’s deadline, notice, refund, dispute, and support process. Keep unresolved cases open; do not automatically forfeit a deposit or promise recovery. Route lockout, unsafe conditions, misrepresentation, or payment issues through priority support.

## Justification
Long-term occupancy has different applications, agreements, payments, and end-of-tenancy issues from a short stay. A dedicated flow makes the applicable checks visible before users commit.

Parent: [[01 - HOMES|HOMES]]
Next: [[10 - Property Sales|Property Sales]]

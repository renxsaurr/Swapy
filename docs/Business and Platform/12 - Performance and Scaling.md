# Performance and Scaling

## Purpose
Define how SWAPY should stay responsive as browsing, search, chat, and transactions grow. Performance goals are measured targets, not guarantees that every page or request will always respond within a fixed time.

## Experience Targets
- Measure real user experience on mobile and desktop at the 75th percentile.
- Aim for **Largest Contentful Paint (LCP) at or below 2.5 seconds** and **Interaction to Next Paint (INP) at or below 200 milliseconds** for most users.
- Keep server and API work efficient and measure its latency in milliseconds. Set endpoint-specific p95 budgets after establishing a baseline and testing realistic peak traffic.
- Do not promise that every full page loads in milliseconds. Network distance, user devices, browser rendering, and media all affect the result.
- Show useful page structure quickly, optimize listing images, and provide responsive loading states for actions that need more time.

## Authentication and Authorization
1. Use Supabase Auth with cookie-based sessions through `@supabase/ssr` for Next.js server rendering.
2. In Next.js 16, use **Proxy** for session refresh and simple route redirects. For earlier Next.js versions, the equivalent convention is Middleware.
3. Treat Proxy checks as an early navigation aid, not the authorization boundary.
4. Enforce access to private data and sensitive actions in server-side data-access logic and Supabase Row Level Security (RLS).
5. Avoid database round trips from Proxy on every request; keep that path small and predictable.

## Listing Pages and Browsing
- Use Next.js Server Components to render the first useful browse and listing-detail content.
- Cache only public listing content that can safely be shared between users. Use ISR or CDN caching for suitable routes and revalidate after listing creation, edits, status changes, or removal.
- Keep personalized feeds, private seller information, chat, offers, and transaction actions uncached or correctly isolated by user.
- A cached listing can show stale availability. Before accepting an offer, reserving an item, or starting a transaction, verify the current status against the authoritative primary database.
- Paginate results, select only the fields required by the page, and optimize/compress listing images.
- Use client-side fetching for interactive filters and live updates when appropriate, not as the only means of displaying the initial page.
- Do not apply shared ISR to routes that refresh authentication sessions or return user-specific cookies.

## Chat and Visual Trade Ledger
- PostgreSQL is the durable source of truth for messages, offer revisions, cash amounts, agreed handover details, and signed contract snapshots.
- Save a message or ledger change through an authenticated, authorized write path before treating it as committed.
- Use Supabase Realtime Broadcast or an appropriate subscription to notify the other participant and update their UI after the write succeeds.
- Client state tools such as Zustand may show an optimistic pending update, but they are not the canonical ledger and must reconcile with the saved record.
- Protect ledger updates with transaction authorization, version checks, and clear agreement state so simultaneous edits cannot silently overwrite each other.
- Add a queue for secondary work such as notifications, moderation review, analytics, and search indexing when measured workload justifies it. Do not add a queue in front of all message writes by default.
- Confirm Realtime connection, join-rate, and message-throughput capacity with Supabase for the expected peak. Load-test chat separately from page browsing.

## Location-Aware Search
- Begin with PostgreSQL, PostGIS, suitable attribute indexes, and GiST spatial indexes.
- Use index-aware radius functions such as `ST_DWithin`, limit and paginate results, and avoid calculating distance against every row for every request.
- Return approximate public locations where revealing an exact home or meetup address would create a safety risk.
- Keep PostgreSQL as the canonical listing store. Add Algolia, Elasticsearch, or another search index only when measured relevance, filtering, geographic scale, or query volume warrants it; plan for index updates to lag behind canonical listing changes.

## Database Read Scaling
- Keep writes, agreement updates, payment states, listing reservations, and freshness-critical availability checks on the primary database.
- Add Supabase read replicas for eligible read workloads when monitoring and load tests show the primary needs relief.
- Replication is asynchronous, so a replica can briefly return older data. Do not use replica reads for decisions where stale state could create a double booking, duplicate transaction, or incorrect payment action.
- Confirm the routing behavior for each Supabase API or connection path; not every Supabase service is served through a read replica.

## Capacity Planning and Scale-Up Triggers
The working business ambition is **20 million weekly active users**, but weekly active users alone do not define system load. Before committing to a capacity plan, estimate:
- Peak concurrent users by region and time of day.
- Requests per second and read/write mix for browse, listing details, offers, and transactions.
- Search requests per second and result-page sizes.
- Concurrent chat connections, channel joins per second, and messages per second.
- Image storage, transformations, downloads, and bandwidth/egress.
- Expected promotional or Garage Sale weekend traffic spikes.

Use monitoring and load tests to decide when to add capacity. Potential scale-up options include more database compute, read replicas, stronger caching, a dedicated search service, and background queues. Do not add all of them in advance, and do not move to AWS solely because the traffic ambition is large. Move a workload or provider only when a measured limit, reliability need, required capability, or cost profile justifies it.

Before a major campaign or launch expansion, test realistic browse, search, image, chat, offer, payment-state, and transaction-completion journeys in staging. Confirm provider-specific capacity and cost for the modeled peak.

## Justification
Fast pages help users discover listings, while fresh authoritative checks protect offers and transactions from stale availability. Keeping chat and the Visual Trade Ledger durable prevents a real agreement from existing only in a browser session. Selective caching, indexed geographic queries, and measured scale-up triggers preserve responsiveness without adding infrastructure complexity before SWAPY has evidence that it needs it.

Parent: [[11 - Technology and Deployment|Technology and Deployment]]
Next: [[13 - Launch Plan and Success Metrics|Launch Plan and Success Metrics]]

## References
- [Next.js Proxy](https://nextjs.org/docs/app/getting-started/proxy)
- [Supabase server-side authentication](https://supabase.com/docs/guides/auth/server-side)
- [Vercel Incremental Static Regeneration](https://vercel.com/docs/incremental-static-regeneration)
- [Supabase Realtime subscriptions](https://supabase.com/docs/guides/realtime/subscribing-to-database-changes)
- [Supabase PostGIS](https://supabase.com/docs/guides/database/extensions/postgis)
- [PostGIS spatial indexes](https://postgis.net/documentation/faq/spatial-indexes/)
- [Supabase read replicas](https://supabase.com/docs/guides/platform/read-replicas)
- [Web Vitals](https://web.dev/articles/vitals)

# Technology and Deployment

## Purpose
Record the recommended implementation stack, its scaling limits, and a beginner-friendly deployment path for SWAPY.

## Recommended Stack
- Web language and framework: TypeScript with Next.js and React.
- UI: Tailwind CSS with reusable shadcn/ui components.
- Database: Supabase Enterprise PostgreSQL for the high-scale target, with dedicated compute sized to load-test results.
- Accounts: Supabase Auth.
- Listing media: Supabase Storage with capacity and egress reviewed for the target.
- Live chat updates: Supabase Realtime Enterprise with a custom connection/message quota confirmed for expected peaks; messages remain persisted in PostgreSQL.
- Online payments: Stripe Connect is SWAPY’s preferred first provider to evaluate for straight sales and hybrid cash differences, subject to Stripe review and approval of SWAPY’s exact marketplace model. No second provider is planned. Escrow-like inspection holds and home damage deposits are not approved features; confirm them with Stripe before including them in the launch scope.
- Web hosting: Vercel Enterprise, with function concurrency and burst capacity confirmed for the forecast.
- Code history and deployment trigger: private GitHub repository.
- Location search can use PostGIS when needed.

## Is This Enough for a Real Product?
Yes, this is a reasonable stack for a first commercial version and can support meaningful growth when designed and operated well. It is not an unlimited-capacity guarantee.

Vercel can scale the web application and serve cached/static pages and assets. Supabase’s Postgres database, connection capacity, query performance, realtime usage, and file delivery are separate capacity limits. For a marketplace, the database or realtime workload may become the bottleneck before the web pages do.

Use a paid commercial hosting plan for production. Vercel Hobby is for personal, non-commercial use. Choose an active Supabase production plan, keep staging separate from production, and review current limits and billing before launch.

## Growth Plan
Start with one well-organized application and managed services. As usage grows:
1. Cache public listing pages and image assets where appropriate.
2. Paginate search and listing results; do not fetch the full marketplace at once.
3. Add indexes for frequently used search and transaction queries.
4. Keep the database and app functions in nearby regions.
5. Use connection pooling for serverless database traffic.
6. Monitor database CPU, query latency, connection use, realtime connections, storage, egress, application errors, and cost.
7. Load-test realistic flows in staging before a major launch or campaign.
8. Add a background job/queue for work such as notifications and image processing if that workload grows.
9. Upgrade the database or move specific workloads only when monitoring shows a real bottleneck.

Next.js can also run on a Node.js server or in a Docker container if SWAPY later needs a different hosting arrangement.

See [[12 - Performance and Scaling|Performance and Scaling]] for the detailed page-response goals, caching boundaries, authentication pattern, chat and ledger write path, geospatial search approach, and traffic validation plan.

## 20M Weekly Active User Target
The 20M WAU figure is a capacity target, not a concurrent-user count. Keep Next.js as the application framework, but use Vercel Enterprise and Supabase Enterprise rather than default/free configurations. Before committing to the target, get written capacity guidance for peak requests, database workload, chat connections/messages, image traffic, and cost. Vercel documents up to 100,000 Enterprise function concurrency with extended capacity available; Supabase Realtime Enterprise limits are configurable and should be agreed for SWAPY’s projected peak.

The initial data architecture is PostgreSQL with connection pooling, indexed queries, and read replicas for appropriate read traffic. Cache public listings and media. Keep transactions and account data authoritative in PostgreSQL. Add a dedicated search service or separate chat/realtime provider only if measured load or provider capacity requires it.

Do not interpret 20M WAU as 20M simultaneous users. Capacity planning must use expected peak concurrent users, requests per second, database transactions, chat connections/messages, and media transfer.
## Deployment Path
1. Keep the source code in a private GitHub repository.
2. Connect the repository to Vercel.
3. Connect a Supabase project for the database, accounts, files, and realtime updates.
4. Use preview deployments to review changes.
5. Deploy the production branch to the SWAPY domain.

## Connect the Existing Domain
The domain can stay with its current registrar; it does not need to be transferred to Vercel.

1. Deploy the app and open the Vercel project.
2. Go to **Settings → Domains** and add the root domain and, if desired, the www version.
3. Vercel displays the exact DNS records for this project.
4. Sign in to the domain registrar and add those records in its DNS settings.
5. Return to Vercel and verify the domain.
6. Choose one canonical address, such as the root domain, and redirect the other version to it.
7. After DNS verification, Vercel provisions HTTPS for the domain.

Do not replace all DNS settings or remove email MX records. Add or update only the records Vercel requests. DNS changes may take time to propagate.

## Domain Concepts
- **Registrar:** the company where the domain was purchased.
- **DNS:** the settings that point the domain name to the website host.
- **A/CNAME record:** the type of DNS record Vercel may ask you to add.
- **HTTPS certificate:** enables encrypted browser connections; Vercel provisions this after domain verification.

## Security and Operations
- Protect private transaction data with database access policies.
- Do not expose administrative secrets in browser code.
- Back up production data and verify that restoration is possible.
- Set usage and spend alerts before running promotions or campaigns.
- Keep staging and production accounts/data separate.

## References
- [Next.js deployment options](https://nextjs.org/docs/app/getting-started/deploying)
- [Next.js production checklist](https://nextjs.org/docs/app/guides/production-checklist)
- [Vercel custom-domain setup](https://vercel.com/docs/domains/set-up-custom-domain)
- [Vercel Hobby plan](https://vercel.com/docs/plans/hobby)
- [Supabase performance tuning](https://supabase.com/docs/guides/platform/performance)
- [Supabase compute and connection limits](https://supabase.com/docs/guides/platform/compute-and-disk)

## Justification
Managed hosting and database services let a small team launch without operating servers themselves. The stack is suitable to begin with, while its parts have separate monitoring and upgrade paths. Documenting the domain steps makes clear that a domain is connected through DNS; it is not the app itself.

Parent: [[SWAPY]]


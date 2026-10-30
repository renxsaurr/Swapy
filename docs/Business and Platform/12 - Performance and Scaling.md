# Performance and Scaling

Build for a small pilot first. Measure how people use the app, then improve the parts that are slow or overloaded.

## What members should experience

- Pages show useful content quickly, with a clear loading state when work takes longer.
- Search and filters return useful results without loading every listing at once.
- A sent message, offer, payment, or transaction update is saved and has a visible status.
- A failed request explains what happened and what the member can do next.

Agree on exact response-time targets before launch and measure them in staging and production. Do not present a target as achieved until it has been measured.

## Basic engineering practices

- Paginate search results and load only fields needed for the page.
- Resize and optimize uploaded images. Serve public images through the CDN.
- Keep private account, chat, and transaction data out of public caches.
- Add database indexes after checking real query patterns.
- Save messages, offer changes, signatures, payment updates, and transaction events reliably.
- Use queues for optional background work, such as image processing or notifications, when it becomes necessary.

## Location search

Use PostgreSQL with PostGIS for distance and area searches. Store the precision needed for search, but show exact addresses only to people who should have access to them. Check location search against real examples from the launch area.

## What to monitor

Use CloudWatch at first to watch:

- Page and API response times
- Errors and failed requests
- App container load and database load
- Slow database queries and open connections
- Search volume, chat volume, and queue delays
- Image delivery and data transfer costs

Set alerts for serious errors, service outages, exhausted capacity, and unexpected cost increases.

## When to scale

Use logs and load tests to find the bottleneck. Then scale the part that needs it: app containers, database capacity, image delivery, or background jobs. Consider a read replica or a separate search service only when measurements show the current design is not enough.

The ambition to support many users is not a capacity estimate. Before a large launch, agree on expected peak traffic, test realistic journeys in staging, check AWS service limits, and confirm the cost.

## References

- [Next.js production checklist](https://nextjs.org/docs/app/guides/production-checklist)
- [Amazon CloudWatch](https://docs.aws.amazon.com/cloudwatch/)

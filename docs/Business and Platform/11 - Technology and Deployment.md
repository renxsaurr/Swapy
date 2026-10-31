# Technology and Deployment

This note records the recommended way to build and host SWAPY. The stack is a recommendation and still needs client approval and a cost check.

## Recommended stack

| Part                     | Choice                                                                |
| ------------------------ | --------------------------------------------------------------------- |
| Web app                  | TypeScript, React, Next.js, Tailwind CSS                              |
| Backend API              | Node.js, TypeScript, NestJS, REST                                     |
| Database                 | PostgreSQL with PostGIS for map and distance searches                 |
| Sign-in                  | Amazon Cognito                                                        |
| Hosting                  | AWS, Docker, ECS, and Fargate                                         |
| Photos and files         | S3 and a CDN                                                          |
| Build and infrastructure | GitHub Actions and Terraform                                          |
| Logs and alerts          | AWS CloudWatch at first                                               |
| Payments                 | An integration layer around a provider approved for the launch market |

## Application shape

Start with one backend, organized into separate code modules:

- Accounts and profiles
- Items, Homes, Services, Garage Sales, and My Store
- Search and messaging
- Offers, agreements, and transactions
- Payments, support, and administration

Keep clear ownership of data and rules in each module. Use shared services for accounts, search, messaging, and transaction records where that makes sense.

Do not start with microservices, Kubernetes, GraphQL, or extra databases. Add more systems only when measured needs justify the work and cost.

## Environments and release

Keep development, staging, and production separate. Use GitHub Actions to build and deploy. Use Terraform to record AWS infrastructure as code.

Before public launch:

- Store secrets outside the source code and browser app.
- Restrict access to private records and files.
- Set up backups and prove that a restore works.
- Set usage and cost alerts.
- Add logs, error alerts, and a rollback plan.
- Run the full user journey in staging.

## Account and file safety

Cognito confirms that someone can sign in. It does not prove their legal name, identity, right to list a home, or ownership of property. Any such checks need their own approved process.

Use the CDN for public listing images. Keep identity files, exact home addresses, agreements, and private case evidence behind access checks. Give each staff role only the access needed for its work.

## Payments

Keep payment-provider code behind a small interface. Do not select a global provider until the first market and transaction types are known. Each provider must support the exact payment, refund, and payout steps SWAPY plans to offer.

Do not describe a payment as escrow unless the provider and approved legal setup actually provide escrow.

## Domain setup

The domain can stay with its current registrar. After hosting is ready, add only the DNS records required by the selected AWS setup. Keep unrelated records, such as email records, intact.

## Capacity

The number of registered or weekly active users alone does not show what server size is needed. Measure peak visitors, searches, messages, image traffic, and transactions. Load-test those actions in staging and size AWS from the results.

See [Performance and Scaling](12%20-%20Performance%20and%20Scaling.md) for the measurement plan.

## References

- [Next.js production checklist](https://nextjs.org/docs/app/guides/production-checklist)
- [NestJS documentation](https://docs.nestjs.com/)
- [Amazon ECS with Fargate](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html)
- [Amazon Cognito](https://docs.aws.amazon.com/cognito/)
- [Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html)
- [AWS CloudWatch](https://docs.aws.amazon.com/cloudwatch/)
- [Terraform AWS provider](https://registry.terraform.io/providers/hashicorp/aws/latest/docs)

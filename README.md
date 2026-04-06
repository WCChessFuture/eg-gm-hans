# eg-gm-hans — gmhans.com

Hans Niemann / Endgame.ai SEO website. Nuxt 3 static site (pre-rendered) served by nginx + S3.

## Running locally

```bash
npm install
npm run dev          # dev server at http://localhost:3000
npm run generate     # build static site to .output/public
npx serve .output/public  # preview production build
```

## Architecture

Static site generated at build time (`nuxt generate`). Deployed to 3 targets:

```
Push to main
  ├── EC2 (gmhans.com) — baseURL: /
  ├── S3 test (eg-gm-hans-static) — baseURL: /gmhans/
  └── S3 prod (eg-gm-hans-static-prod) — baseURL: /gmhans/
```

- **gmhans.com** → EC2 Elastic IP → nginx serves static files
- **endgame.ai/gmhans/** → CloudFront → S3 bucket (add behavior to existing distribution)
- **test-eg.org/gmhans/** → CloudFront → S3 bucket in test account (test first)

## AWS Resources

### Test account (904233136251, us-east-1)

| Resource | ID / Name | Details |
|---|---|---|
| EC2 Instance | `i-09cd71f0320943d2d` | t3.medium, Amazon Linux 2023, Name: `eg-gm-hans` |
| Elastic IP | `eipalloc-052bd28e4bc510294` | `98.86.10.121` |
| Security Group | `sg-048af8e1ea5e97096` | `eg-gm-hans-sg` — ports 22, 80, 443 |
| Key Pair | `eg-gm-hans-key` | SSH key for EC2 access |
| S3 Bucket | `eg-gm-hans-static` | Static files under `gmhans/` prefix |
| Route 53 Zone | `Z05220303KQIG4WITXYNV` | `gmhans.com` (backup, not active) |
| IAM User | `gha-eg-gm-hans-deploy` | GitHub Actions S3 deploy |

### Prod account (231618912249, us-east-1)

| Resource | ID / Name | Details |
|---|---|---|
| S3 Bucket | `eg-gm-hans-static-prod` | Static files under `gmhans/` prefix |
| IAM User | `gha-eg-gm-hans-deploy` | GitHub Actions S3 deploy |

### GitHub Secrets (WCChessFuture/eg-gm-hans)

| Secret | Purpose |
|---|---|
| `EC2_SSH_KEY` | SSH private key for EC2 deploy |
| `EC2_HOST` | EC2 Elastic IP |
| `AWS_ACCESS_KEY_ID_TEST` | Test account S3 deploy |
| `AWS_SECRET_ACCESS_KEY_TEST` | Test account S3 deploy |
| `AWS_ACCESS_KEY_ID_PROD` | Prod account S3 deploy |
| `AWS_SECRET_ACCESS_KEY_PROD` | Prod account S3 deploy |

## DNS (managed on Wix, registrar GoDaddy)

| Type | Host | Value |
|---|---|---|
| A | `@` | `98.86.10.121` |
| A | `www` | `98.86.10.121` |

NS change pending: GoDaddy → Wix nameservers (`ns10.wixdns.net` / `ns11.wixdns.net`)

## CI/CD Pipeline

On push to `main`, GitHub Actions:

1. **EC2 deploy** — SSH → `git pull` + `npm install` + `nuxt generate` (baseURL: `/`)
2. **S3 build** — `npm install` + `nuxt generate` (baseURL: `/gmhans/`)
3. **S3 test deploy** — `aws s3 sync` to `eg-gm-hans-static/gmhans/`
4. **S3 prod deploy** — `aws s3 sync` to `eg-gm-hans-static-prod/gmhans/`

## Adding to CloudFront (endgame.ai)

To serve under `endgame.ai/gmhans/`:

1. Add S3 bucket `eg-gm-hans-static-prod` as a new **origin** in the endgame.ai CloudFront distribution
2. Add **behavior**: path pattern `gmhans/*` → S3 origin
3. Files are already prefixed with `gmhans/` in S3, so no rewriting needed

Test first with `test-eg.org` CloudFront using the test account bucket.

## Server details (EC2)

- **OS**: Amazon Linux 2023
- **Web server**: nginx serving static files from `/opt/eg-gm-hans/.output/public`
- **HTTPS**: Let's Encrypt via certbot (pending DNS)
- **Code location**: `/opt/eg-gm-hans`
- **Deploy script**: `/opt/deploy-eg-gm-hans.sh`

## Manual deploy

```bash
ssh -i ~/.ssh/eg-gm-hans-key.pem ec2-user@98.86.10.121
sudo /opt/deploy-eg-gm-hans.sh
```

## HTTPS setup (after DNS points to EC2)

```bash
sudo certbot --nginx -d gmhans.com -d www.gmhans.com
```

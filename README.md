# eg-gm-hans — gmhans.com

Hans Niemann / Endgame.ai SEO website. Nuxt 3 static site (pre-rendered) served by nginx.

## Running locally

```bash
npm install
npm run dev          # dev server at http://localhost:3000
npm run generate     # build static site to .output/public
npx serve .output/public  # preview production build
```

## Architecture

Static site generated at build time (`nuxt generate`). Nginx serves pre-rendered HTML files directly — no Node.js in the request path. Handles high traffic on a single instance.

```
Browser --> Nginx (port 80/443) --> .output/public/ (static HTML, CSS, JS, images)
                |
                +-- Let's Encrypt (certbot, auto-renew)
```

## AWS Resources (account 904233136251, us-east-1)

| Resource | ID | Details |
|---|---|---|
| EC2 Instance | `i-09cd71f0320943d2d` | t3.medium, Amazon Linux 2023, Name: `eg-gm-hans` |
| Elastic IP | `eipalloc-052bd28e4bc510294` | `98.86.10.121` |
| Security Group | `sg-048af8e1ea5e97096` | Name: `eg-gm-hans-sg` — ports 22, 80, 443 |
| Key Pair | `eg-gm-hans-key` | SSH key for EC2 access |
| EBS Volume | (attached to instance) | 20 GB gp3 |

## DNS (managed on Wix)

| Type | Host | Value |
|---|---|---|
| A | `@` | `98.86.10.121` |
| A | `www` | `98.86.10.121` |

## Server details

- **OS**: Amazon Linux 2023
- **Web server**: nginx serving static files from `/opt/eg-gm-hans/.output/public`
- **HTTPS**: Let's Encrypt via certbot (auto-renews)
- **Code location**: `/opt/eg-gm-hans`
- **Nginx config**: `/etc/nginx/conf.d/eg-gm-hans.conf`

## Deploying updates

```bash
ssh -i ~/.ssh/eg-gm-hans-key.pem ec2-user@98.86.10.121
sudo su -
cd /opt/eg-gm-hans
git pull
npm install
npx nuxt generate
# nginx picks up new files automatically (same directory)
```

## Setting up HTTPS (after DNS points to EC2)

```bash
sudo certbot --nginx -d gmhans.com -d www.gmhans.com
```

Certbot auto-configures nginx for TLS and HTTP-to-HTTPS redirect, with auto-renewal.

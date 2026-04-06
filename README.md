# eg-gm-hans — gmhans.com

Hans Niemann / Endgame.ai SEO website built with Nuxt 3 (SSR) + Tailwind CSS.

## Running locally

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
node .output/server/index.mjs  # run production server
```

## AWS Resources (account 904233136251, us-east-1)

| Resource | ID | Details |
|---|---|---|
| **EC2 Instance** | `i-09cd71f0320943d2d` | t3.small, Amazon Linux 2023, Name: `eg-gm-hans` |
| **Elastic IP** | `eipalloc-052bd28e4bc510294` | `98.86.10.121` |
| **Security Group** | `sg-048af8e1ea5e97096` | Name: `eg-gm-hans-sg` — ports 22, 80, 443 open |
| **Key Pair** | `eg-gm-hans-key` | SSH key for EC2 access |
| **EBS Volume** | (attached to instance) | 20 GB gp3 |

## Server setup

- **App**: Node.js 20, Nuxt 3 SSR running on port 3000 via systemd (`eg-gm-hans.service`)
- **Reverse proxy**: nginx on port 80 → localhost:3000
- **Code location**: `/opt/eg-gm-hans`
- **Systemd service**: `/etc/systemd/system/eg-gm-hans.service`
- **Nginx config**: `/etc/nginx/conf.d/eg-gm-hans.conf`

### Deploying updates

```bash
ssh -i ~/.ssh/eg-gm-hans-key.pem ec2-user@98.86.10.121
sudo su -
cd /opt/eg-gm-hans
git pull
npm install
npx nuxt build
systemctl restart eg-gm-hans
```

## DNS records to set on Wix (gmhans.com)

Set these **A records** in the Wix DNS manager:

| Type | Host | Value | TTL |
|---|---|---|---|
| A | `@` | `98.86.10.121` | 3600 |
| A | `www` | `98.86.10.121` | 3600 |

After DNS propagates, the site will be live at http://gmhans.com.

### HTTPS (future)

Once DNS points to the EC2, install a free Let's Encrypt certificate:

```bash
sudo dnf install -y certbot python3-certbot-nginx
sudo certbot --nginx -d gmhans.com -d www.gmhans.com
```

This will auto-configure nginx for HTTPS with auto-renewal.

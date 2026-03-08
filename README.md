# Attack Surface

![License](https://img.shields.io/badge/license-MIT-green)
![Build](https://img.shields.io/badge/build-passing-brightgreen)
![Contributions](https://img.shields.io/badge/contributions-welcome-blue)

Open-source full-stack cybersecurity knowledge platform.

## Architecture

```text
            +------------------------------+
            |  Next.js App Router UI       |
            +--------------+---------------+
                           |
               +-----------v------------+
               | Contentlayer MDX types |
               +-----------+------------+
                           |
      +--------------------v---------------------+
      | /content/techniques /cves /layers /resources |
      +------------------------------------------+
```

## Quickstart

```bash
git clone <repo>
cd Helpful_Resources_for_Cybersec
npm install
npm run dev
```

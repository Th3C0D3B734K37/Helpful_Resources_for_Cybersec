# Contributing to Attack Surface

All core content is MDX-first and lives in `/content`.

## Required frontmatter fields

`title, layer, tags, cves, tools, skills, severity, last_updated, contributors`

## Add a new technique

```bash
npx tsx scripts/new-technique.ts "Technique Name"
```

### Example

```mdx
---
title: "Kernel syscall hooking"
layer: "OS/Kernel"
tags: ["rootkit", "syscall"]
cves: ["CVE-2022-0847"]
tools: ["bcc"]
skills: ["Linux", "Assembly"]
severity: "critical"
last_updated: "2026-03-08"
contributors: ["@alice"]
---
```

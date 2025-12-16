# Chromium 143 PDF Safe (Alpine 3.22)

This repository demonstrates **stable, regression-safe PDF generation**
using **Chromium 143** on **Alpine Linux 3.22.2** with **Puppeteer Core**.

It supports:
- English (LTR)
- Arabic (RTL)

And counters breaking changes introduced between **Chromium 136 → 143**:
- Footer shifting upward
- Left/right margin drift
- RTL indentation issues
- Font metric changes
- Print-layout reflow

---

## Why this repo exists

Chromium 143 introduced stricter and more correct behavior for:
- `@page` layout
- Header/footer rendering
- RTL logical flow
- Font shaping and fallback

This broke many previously working HTML → PDF pipelines.

This repo provides a **known-good baseline**.

---

## Build & Run (Docker)

```bash
docker build -t chromium-143-pdf-safe -f docker/Dockerfile .
docker run --rm -v $(pwd):/app chromium-143-pdf-safe

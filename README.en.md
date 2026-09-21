<div align="center">

<img src="https://ik.imagekit.io/sja4kckbn/AsetDealTech/panel%20dealtechui.png" alt="DealTech UI" width="100%" />

# DealTech UI — Public Components

**A collection of ready-to-use UI components: Elements, Sections, and Pages.**

Built by [tech.mudahdeal.com](https://tech.mudahdeal.com)

[🇮🇩 Bahasa Indonesia](README.md) · 🇬🇧 **English**

</div>

---

## About This Repo

This repo holds UI components we picked and cleaned up ourselves, so anyone can use them — either as a **reference** while building something, or **copied straight** into your own project.

No required install, no dependencies to lock you in. Take what you need, change it however you like.

## What's Inside

The repo is split into three top-level folders, so things are easy to find:

| Folder | Contents | Examples |
|---|---|---|
| [`elements/`](elements/) | The smallest units — one job, one look, grouped by category. | Button, Badge, Input, Card, Avatar, Modal |
| [`sections/`](sections/) | Several elements combined into one complete block, grouped by category. | Hero, Pricing, Navbar, Footer, Testimonial, FAQ |
| [`pages/`](pages/) | Complete pages, assembled from multiple components. | Landing page, Login, Dashboard, Pricing, 404 |

## Folder Structure

```
dealtech-ui-for-public-component/
├── elements/            # smallest units, grouped by category
│   └── Button/
│       └── ButtonV1/
├── sections/            # page blocks, grouped by category
│   └── Hero/
│       └── SectionV1/   # one variant = one folder
└── pages/               # full pages
```

> Still a small collection; more will be added over time.

## How to Use

1. Browse the folder that matches what you need — `elements`, `sections`, or `pages`.
2. Open the component folder and read its `README.md` (if present) for a short note.
3. Copy the files into your project.
4. Adjust colors, copy, and spacing to fit.

No fork required, no credit required, no need to tell us.

## Naming Conventions

To keep things consistent and searchable:

- `elements/` and `sections/`: two `PascalCase` levels — category then variant, e.g. `Button/ButtonV1`, `Hero/SectionV1`.
- `pages/`: folder names use `kebab-case` — e.g. `login-page`, `pricing-page`.
- One variant = one folder, containing the component file plus its preview.
- A new variant in the same category just bumps the number: `ButtonV2`, `SectionV2`.

## Contributing

Got a component worth sharing? Open a Pull Request. We only care about three things:

- **Self-contained** — no dependency on another project's internal code.
- **Tidy** — consistent naming, no dead code.
- **Responsive** — looks reasonable on both small and large screens.

## Disclaimer

> **This repo is free to use without asking our permission.**
>
> You may copy it, modify it, and use it for personal or commercial purposes, with or without attribution. No request to send, no approval to wait for.
>
> This project exists purely out of a desire to create an easier environment and encourage sharing across the internet — so newcomers have a starting point, and experienced developers don't have to rewrite the same thing again.
>
> Components are provided **as is**, without warranty of any kind. Use is at your own risk. Please test them yourself before shipping to production.

## License

[MIT](LICENSE) — as free as it gets, in line with the spirit above.

---

<div align="center">

Built and maintained by **[tech.mudahdeal.com](https://tech.mudahdeal.com)**

</div>

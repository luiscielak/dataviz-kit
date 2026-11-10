# Dataviz Kit — UI Prototype

Clickable Next.js prototype for the Dataviz Kit docs shell (experts explorer + skill profiles). See [`README-proto.md`](README-proto.md) for full routes, components, flows, and known gaps.

**Live:** [https://thehoomanloop.com/dataviz](https://thehoomanloop.com/dataviz) (Vercel origin: [dataviz-kit.vercel.app/dataviz](https://dataviz-kit.vercel.app/dataviz))

## Setup

```bash
cd ux-spec-skills/docs/prototype
npm install
npm run dev
```

Open [http://localhost:3000/dataviz](http://localhost:3000/dataviz). The app uses `basePath: /dataviz` so local, Vercel, and the Netlify proxy share the same paths.

```bash
npm run build   # production build
npm run lint    # ESLint
```

## Deploy (Vercel)

Hosted on Vercel under the **Hooman Loop** team from the [luiscielak/dataviz-kit](https://github.com/luiscielak/dataviz-kit) repo. Since the app is in a subdirectory, set the **Root Directory** to `ux-spec-skills/docs/prototype` when importing the project; keep the auto-detected Next.js preset. Pushes to `main` publish to [https://dataviz-kit.vercel.app](https://dataviz-kit.vercel.app); other branches get preview URLs.

See [`README-proto.md`](README-proto.md#deploy-vercel) for the full deploy table and the experts-explorer access paths.

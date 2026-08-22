# Mesh Pair Mixer

> Make and share conversation pairs without a coordinator.

**Live → https://baditaflorin.github.io/mesh-pair-mixer/**

Mesh Pair Mixer is a browser-local, peer-to-peer tool for breaking a small group into visible discussion pairs. Enter names, mix them, and every connected peer sees the same assignment.

## Run locally

`mesh-common` must be a sibling directory because this service links to it locally.

```bash
npm install
npm run dev
```

## Verification

```bash
npm run fmt:check
npm run typecheck
npm run test:unit
npm run smoke
npm run demo
```

The app is published as static GitHub Pages content from `main/docs`. It has no accounts, analytics, database, or service backend; shared pair assignments are visible to everyone in the room.

See [privacy notes](docs/privacy.md) and [the deployment decision](docs/adr/0001-deployment-mode.md).

## License

MIT.

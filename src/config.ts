import { createMeshConfig } from "@baditaflorin/mesh-common";

export const config = createMeshConfig({
  appName: "Mesh Pair Mixer",
  description: "Make and share conversation pairs without a coordinator.",
  accentHex: "#ea580c",
  version: __APP_VERSION__,
  commit: __GIT_COMMIT__,
});

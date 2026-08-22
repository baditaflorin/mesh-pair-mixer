import { useState } from "react";
import { useSharedPairings } from "@baditaflorin/mesh-common";
import type { MeshConfig, YRoom } from "@baditaflorin/mesh-common";

type Props = { room: YRoom | null; config: MeshConfig };

export function Feature({ room, config }: Props) {
  const pairings = useSharedPairings(room, "pair-mixer:pairings");
  const [names, setNames] = useState("Ada, Ben, Cleo, Drew");
  const [offset, setOffset] = useState(0);
  const people = names
    .split(",")
    .map((name) => name.trim())
    .filter(Boolean);

  const mix = () => {
    if (people.length < 2) return;
    const rotated = people.map((_, index) => people[(index + offset) % people.length] ?? "");
    pairings.set(
      Array.from({ length: Math.ceil(rotated.length / 2) }, (_, index) => ({
        id: `pair-${index + 1}`,
        peers: rotated.slice(index * 2, index * 2 + 2),
      })),
    );
    setOffset((current) => (current + 1) % people.length);
  };

  return (
    <main className="feature-placeholder pair-mixer">
      <h1>{config.appName}</h1>
      <p className="lede">{config.description}</p>
      <p className="feature-status">
        {room ? `Connected · ${room.peerCount} peer(s)` : "Connecting…"}
      </p>
      <label className="names-label" htmlFor="participants">
        Participants (comma separated)
      </label>
      <textarea
        id="participants"
        value={names}
        onChange={(event) => setNames(event.target.value)}
        rows={3}
        aria-describedby="pair-help"
      />
      <p id="pair-help">Everyone in this room sees the same pair list.</p>
      <div className="action-row">
        <button type="button" disabled={!room || people.length < 2} onClick={mix}>
          Mix pairs
        </button>
        <button type="button" disabled={!pairings.pairings.length} onClick={pairings.clear}>
          Clear pairs
        </button>
      </div>
      <section aria-live="polite" aria-label="Shared pairs" className="pair-list">
        <h2>{pairings.pairings.length ? "Current pairs" : "No pairs yet"}</h2>
        <ol>
          {pairings.pairings.map((pair) => (
            <li key={pair.id}>{pair.peers.join(" + ")}</li>
          ))}
        </ol>
      </section>
    </main>
  );
}

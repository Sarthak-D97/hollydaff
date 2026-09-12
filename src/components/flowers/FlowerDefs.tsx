import { FlowerShape, flowerPalettes, flowerSymbolId, type FlowerKind } from "./heads";

/**
 * Shared SVG definitions, rendered once in the root layout.
 * - Every flower/colour is drawn once as a <symbol>; the rest of the site references it with <use>.
 * - The "fuzz" filter roughens edges slightly so drawn flowers pick up the soft look of real chenille stems.
 */
export function FlowerDefs() {
  const kinds = Object.keys(flowerPalettes) as FlowerKind[];
  return (
    <svg width="0" height="0" aria-hidden style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}>
      <defs>
        {kinds.flatMap((kind) =>
          Object.keys(flowerPalettes[kind]).map((colour) => (
            <symbol key={`${kind}-${colour}`} id={flowerSymbolId(kind, colour)} viewBox="0 0 100 100" overflow="visible">
              <FlowerShape kind={kind} colour={colour} />
            </symbol>
          )),
        )}
        <filter id="hd-fuzz" x="-15%" y="-15%" width="130%" height="130%">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="7" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.4" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <filter id="hd-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#3c2d28" floodOpacity="0.18" />
        </filter>
      </defs>
    </svg>
  );
}

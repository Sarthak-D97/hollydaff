import type { SVGProps } from "react";
import { FlowerHead, type FlowerKind } from "./heads";

type FlowerProps = Omit<SVGProps<SVGSVGElement>, "children"> & {
  kind: FlowerKind;
  colour?: string;
  size?: number | string;
  fuzzy?: boolean;
  title?: string;
};

export function Flower({ kind, colour, size = 48, fuzzy = false, title, ...rest }: FlowerProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <g filter={fuzzy ? "url(#hd-fuzz)" : undefined}>
        <FlowerHead kind={kind} colour={colour} />
      </g>
    </svg>
  );
}

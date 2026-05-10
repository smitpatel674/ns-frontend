import type { CSSProperties } from "react";

export function motionDelay(index: number, step = 80, base = 0): CSSProperties {
  return { "--motion-delay": `${base + index * step}ms` } as CSSProperties;
}

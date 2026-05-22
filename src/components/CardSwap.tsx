"use client";
import React, { useEffect, useRef, useState, Children, ReactNode } from "react";

// Symmetric fan: front card bottom-left, back card top-right, middle at center
// Matches design's translate(-14%,+8%) / (0,0) / (+14%,-8%) layout
function buildPositions(count: number, cardDistance: number, verticalDistance: number) {
  const ROT = [-5, 2, 7, 10];
  const half = (count - 1) / 2;
  return Array.from({ length: count }, (_, i) => ({
    x:   (i - half) * cardDistance,
    y:   (half - i) * verticalDistance,
    rot:  ROT[i] ?? ROT[ROT.length - 1] + (i - ROT.length + 1) * 3,
    z:    90 - i * 60,
  }));
}

export interface CardProps {
  children: ReactNode;
  style?: React.CSSProperties;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export interface CardSwapProps {
  children: ReactNode;
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

export function Card({ children, style, className = "", onClick }: CardProps) {
  return (
    <div
      className={`cs-card${className ? ` ${className}` : ""}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default function CardSwap({
  children,
  cardDistance = 50,
  verticalDistance = 55,
  delay = 5000,
  pauseOnHover = false,
  style,
  className = "",
}: CardSwapProps) {
  const cards = Children.toArray(children);
  const count = cards.length;

  const [stack, setStack] = useState<number[]>(() =>
    Array.from({ length: count }, (_, i) => i)
  );
  const [exitingIdx, setExitingIdx] = useState<number | null>(null);
  const [snapIdx,    setSnapIdx]    = useState<number | null>(null);

  const pausedRef = useRef(false);
  const busyRef   = useRef(false);
  const stackRef  = useRef(stack);
  stackRef.current = stack;

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function stopTimer() {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
  }

  function triggerSwap() {
    if (busyRef.current || pausedRef.current) return;
    busyRef.current = true;

    const leaving = stackRef.current[0];
    setExitingIdx(leaving);

    // After exit animation (0.55s): rotate stack, snap card below-back
    setTimeout(() => {
      setStack(prev => { const next = [...prev]; next.push(next.shift()!); return next; });
      setExitingIdx(null);
      setSnapIdx(leaving);

      // Next frame: clear snap → enter animation from below-back to back
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setSnapIdx(null);
          setTimeout(() => { busyRef.current = false; }, 700);
        });
      });
    }, 550);
  }

  function startTimer() {
    stopTimer();
    timerRef.current = setInterval(triggerSwap, delay);
  }

  useEffect(() => {
    startTimer();
    return stopTimer;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delay]);

  function bringToFront(stackPos: number) {
    if (stackPos === 0 || busyRef.current) return;
    setStack(prev => {
      const card = prev[stackPos];
      return [card, ...prev.filter((_, i) => i !== stackPos)];
    });
    startTimer();
  }

  const positions = buildPositions(count, cardDistance, verticalDistance);
  const frontPos = positions[0];
  const backPos  = positions[positions.length - 1];

  return (
    <div
      className={`cs-root${className ? ` ${className}` : ""}`}
      style={style}
      onMouseEnter={() => { if (pauseOnHover) pausedRef.current = true; }}
      onMouseLeave={() => { if (pauseOnHover) pausedRef.current = false; }}
    >
      {stack.map((cardIdx, stackPos) => {
        const pos        = positions[stackPos] ?? backPos;
        const isExiting  = exitingIdx === cardIdx;
        const isSnapping = snapIdx    === cardIdx;

        let tx: number, ty: number, tz: number, rot: number, opacity: number, transition: string;

        if (isExiting) {
          // Drop down and slightly left, heavy rotation
          tx = frontPos.x - 40;
          ty = frontPos.y + 180;
          tz = frontPos.z;
          rot = -24;
          opacity = 0;
          transition = "transform 0.55s cubic-bezier(0.55,0,1,0.45), opacity 0.4s ease-in";
        } else if (isSnapping) {
          // Snap instantly to slightly below back position (no transition)
          tx = backPos.x;
          ty = backPos.y + 24;
          tz = backPos.z;
          rot = backPos.rot;
          opacity = 0;
          transition = "none";
        } else {
          // Normal stack slot — settles with smooth ease-out
          tx = pos.x;
          ty = pos.y;
          tz = pos.z;
          rot = pos.rot;
          opacity = 1;
          transition = "transform 0.7s cubic-bezier(0.22,1,0.36,1), opacity 0.6s cubic-bezier(0.22,1,0.36,1)";
        }

        const transform = `translate(-50%,-50%) translate(${tx}px,${ty}px) translateZ(${tz}px) rotate(${rot}deg)`;

        const child = cards[cardIdx] as React.ReactElement<CardProps>;
        return React.cloneElement(child, {
          key: cardIdx,
          style: {
            ...child.props.style,
            zIndex: 100 - stackPos,
            transform,
            opacity,
            transition,
          } as React.CSSProperties,
          onClick: (e: React.MouseEvent<HTMLDivElement>) => {
            bringToFront(stackPos);
            child.props.onClick?.(e);
          },
        });
      })}
    </div>
  );
}

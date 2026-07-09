import { useRef, useEffect, useCallback, useState } from 'react';

/* ── Configuration ── */
const GRID_SIZE = 72;
const WARP_RADIUS = 160;
const MAX_DISP = 8;
const LERP_SPEED = 0.06;
const STEP = 5;
const BASE_ALPHA = 0.09;
const DOT_MAX_ALPHA = 0.18;
const DOT_FADE_IN = 0.12;
const DOT_FADE_OUT = 0.025;

function lerp(a, b, t) {
  return a + (b - a) * t;
}

/* Displacement toward cursor — quadratic falloff, feels like magnetic pull */
function displace(px, py, mx, my) {
  const dx = mx - px;
  const dy = my - py;
  const dist = Math.sqrt(dx * dx + dy * dy);
  if (dist > WARP_RADIUS || dist < 0.5) return [0, 0];
  const t = 1 - dist / WARP_RADIUS;
  const force = t * t * MAX_DISP;
  return [(dx / dist) * force, (dy / dist) * force];
}

export default function HeroGrid({ containerRef }) {
  const canvasRef = useRef(null);
  const targetRef = useRef({ x: -1000, y: -1000 });
  const currentRef = useRef({ x: -1000, y: -1000 });
  const dotsRef = useRef({});
  const rafRef = useRef(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const touch =
      'ontouchstart' in window ||
      window.matchMedia('(pointer: coarse)').matches;
    setIsTouch(touch);
  }, []);

  const draw = useCallback(
    (canvas, ctx) => {
      const { width, height } = canvas;
      const dpr = window.devicePixelRatio || 1;
      const w = width / dpr;
      const h = height / dpr;

      ctx.clearRect(0, 0, width, height);
      ctx.save();
      ctx.scale(dpr, dpr);

      /* Smooth cursor interpolation */
      if (!isTouch) {
        currentRef.current.x = lerp(currentRef.current.x, targetRef.current.x, LERP_SPEED);
        currentRef.current.y = lerp(currentRef.current.y, targetRef.current.y, LERP_SPEED);
      }

      const mx = isTouch ? -1000 : currentRef.current.x;
      const my = isTouch ? -1000 : currentRef.current.y;

      ctx.strokeStyle = `rgba(255, 255, 255, ${BASE_ALPHA})`;
      ctx.lineWidth = 0.7;

      /* ── Warped vertical lines ── */
      for (let gx = 0; gx <= w; gx += GRID_SIZE) {
        ctx.beginPath();
        for (let py = 0; py <= h; py += STEP) {
          const [dx] = displace(gx, py, mx, my);
          if (py === 0) ctx.moveTo(gx + dx, py);
          else ctx.lineTo(gx + dx, py);
        }
        ctx.stroke();
      }

      /* ── Warped horizontal lines ── */
      for (let gy = 0; gy <= h; gy += GRID_SIZE) {
        ctx.beginPath();
        for (let px = 0; px <= w; px += STEP) {
          const [, dy] = displace(px, gy, mx, my);
          if (px === 0) ctx.moveTo(px, gy + dy);
          else ctx.lineTo(px, gy + dy);
        }
        ctx.stroke();
      }

      /* ── Intersection dots: fade in near cursor, slowly fade out ── */
      const dots = dotsRef.current;
      for (let gx = 0; gx <= w; gx += GRID_SIZE) {
        for (let gy = 0; gy <= h; gy += GRID_SIZE) {
          const key = gx * 10000 + gy;
          const ddx = mx - gx;
          const ddy = my - gy;
          const dist = Math.sqrt(ddx * ddx + ddy * ddy);

          /* Target brightness based on proximity */
          const target =
            dist < WARP_RADIUS
              ? Math.pow(1 - dist / WARP_RADIUS, 2) * DOT_MAX_ALPHA
              : 0;

          const prev = dots[key] || 0;
          const speed = target > prev ? DOT_FADE_IN : DOT_FADE_OUT;
          const alpha = lerp(prev, target, speed);
          dots[key] = alpha;

          if (alpha > 0.004) {
            const [ox, oy] = displace(gx, gy, mx, my);
            ctx.beginPath();
            ctx.arc(gx + ox, gy + oy, 1.4 + alpha * 6, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(223, 255, 0, ${alpha})`;
            ctx.fill();
          }
        }
      }

      ctx.restore();
    },
    [isTouch],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef?.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');

    /* Size canvas to match the hero section, not the canvas itself */
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    resize();

    /* ResizeObserver for robust sizing on layout shifts */
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    window.addEventListener('resize', resize);

    const onMouseMove = (e) => {
      if (isTouch) return;
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        targetRef.current = { x, y };
      } else {
        targetRef.current = { x: -1000, y: -1000 };
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    const loop = () => {
      draw(canvas, ctx);
      rafRef.current = requestAnimationFrame(loop);
    };

    if (isTouch) {
      draw(canvas, ctx);
    } else {
      rafRef.current = requestAnimationFrame(loop);
    }

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [draw, isTouch, containerRef]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}

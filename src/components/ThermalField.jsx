import { useEffect, useRef } from 'react'

// Colour ramp of a thermal camera: cold (almost the page background) to hot (yellow).
const STOPS = [
  [0.0, [8, 9, 13]],
  [0.18, [28, 18, 80]],
  [0.4, [92, 30, 140]],
  [0.6, [192, 38, 143]],
  [0.8, [255, 106, 26]],
  [1.0, [255, 210, 63]],
]

function buildLUT() {
  const lut = new Uint8ClampedArray(256 * 3)
  for (let i = 0; i < 256; i++) {
    const t = i / 255
    let s = 0
    while (s < STOPS.length - 2 && t > STOPS[s + 1][0]) s++
    const [t0, c0] = STOPS[s]
    const [t1, c1] = STOPS[s + 1]
    const k = Math.min(1, Math.max(0, (t - t0) / (t1 - t0)))
    for (let c = 0; c < 3; c++) lut[i * 3 + c] = c0[c] + (c1[c] - c0[c]) * k
  }
  return lut
}

export default function ThermalField({ hostRef }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const host = hostRef.current
    if (!canvas || !host) return

    const ctx = canvas.getContext('2d')
    const lut = buildLUT()
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let W = 0
    let H = 0
    let heat = new Float32Array(0)
    let tmp = new Float32Array(0)
    let img = null
    const ptr = { x: 0, y: 0, lastX: 0, lastY: 0, on: false }
    let raf = 0
    let running = false

    function resize() {
      const rect = host.getBoundingClientRect()
      if (!rect.width || !rect.height) return
      W = rect.width < 700 ? 110 : 176
      H = Math.max(40, Math.round((W * rect.height) / rect.width))
      canvas.width = W
      canvas.height = H
      heat = new Float32Array(W * H)
      tmp = new Float32Array(W * H)
      img = ctx.createImageData(W, H)
      if (reduceMotion) {
        for (let i = 0; i < 90; i++) step(i * 120)
        draw()
      }
    }

    function stamp(cx, cy, r, amt) {
      const x0 = Math.max(0, Math.floor(cx - r))
      const x1 = Math.min(W - 1, Math.ceil(cx + r))
      const y0 = Math.max(0, Math.floor(cy - r))
      const y1 = Math.min(H - 1, Math.ceil(cy + r))
      for (let y = y0; y <= y1; y++) {
        for (let x = x0; x <= x1; x++) {
          const d = Math.hypot(x - cx, y - cy)
          if (d < r) {
            const f = 1 - d / r
            heat[y * W + x] += amt * f * f
          }
        }
      }
    }

    function step(t) {
      // spread heat to neighbours and let it cool
      for (let y = 1; y < H - 1; y++) {
        for (let x = 1; x < W - 1; x++) {
          const i = y * W + x
          tmp[i] =
            ((heat[i] * 4 + heat[i - 1] + heat[i + 1] + heat[i - W] + heat[i + W]) / 8) * 0.972
        }
      }
      const swap = heat
      heat = tmp
      tmp = swap

      // slow drifting warm bodies, so the image is alive before anyone touches it
      for (let k = 0; k < 3; k++) {
        const cx = W * (0.5 + 0.38 * Math.sin(t * 0.00021 * (k + 1) + k * 2.1))
        const cy = H * (0.5 + 0.34 * Math.cos(t * 0.00017 * (k + 2) + k * 1.3))
        stamp(cx, cy, 9 + k * 2.5, 0.024)
      }

      if (ptr.on) {
        const dx = ptr.x - ptr.lastX
        const dy = ptr.y - ptr.lastY
        const n = Math.max(1, Math.ceil(Math.hypot(dx, dy) / 3))
        for (let s = 1; s <= n; s++) {
          stamp(ptr.lastX + (dx * s) / n, ptr.lastY + (dy * s) / n, 11, 0.07)
        }
        ptr.lastX = ptr.x
        ptr.lastY = ptr.y
      }
    }

    function draw() {
      const data = img.data
      for (let i = 0, p = 0; i < heat.length; i++, p += 4) {
        const v = 1 - Math.exp(-heat[i] * 1.4)
        const idx = ((v * 255) | 0) * 3
        data[p] = lut[idx]
        data[p + 1] = lut[idx + 1]
        data[p + 2] = lut[idx + 2]
        data[p + 3] = 255
      }
      ctx.putImageData(img, 0, 0)
    }

    function loop(t) {
      step(t)
      draw()
      raf = requestAnimationFrame(loop)
    }

    function start() {
      if (running || reduceMotion) return
      running = true
      raf = requestAnimationFrame(loop)
    }

    function stop() {
      running = false
      cancelAnimationFrame(raf)
    }

    function toCanvas(e) {
      const rect = host.getBoundingClientRect()
      return [((e.clientX - rect.left) / rect.width) * W, ((e.clientY - rect.top) / rect.height) * H]
    }

    function onMove(e) {
      const [x, y] = toCanvas(e)
      if (!ptr.on) {
        ptr.lastX = x
        ptr.lastY = y
      }
      ptr.x = x
      ptr.y = y
      ptr.on = true
    }

    function onLeave() {
      ptr.on = false
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(host)
    const io = new IntersectionObserver(([entry]) => (entry.isIntersecting ? start() : stop()))
    io.observe(host)

    host.addEventListener('pointermove', onMove)
    host.addEventListener('pointerdown', onMove)
    host.addEventListener('pointerleave', onLeave)

    return () => {
      stop()
      ro.disconnect()
      io.disconnect()
      host.removeEventListener('pointermove', onMove)
      host.removeEventListener('pointerdown', onMove)
      host.removeEventListener('pointerleave', onLeave)
    }
  }, [hostRef])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    />
  )
}

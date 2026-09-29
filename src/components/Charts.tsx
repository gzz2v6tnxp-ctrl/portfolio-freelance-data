import { useState } from 'react'
import type { ReactNode } from 'react'
import { useChartReveal } from '../lib/hooks'

/* Categorical ramp — fixed order, never cycled (dataviz validated, light + dark). */
export const CAT = ['var(--c1)', 'var(--c2)', 'var(--c3)', 'var(--c4)', 'var(--c5)']

export interface Datum {
  label: string
  value: number
  display: string
}

interface FrameProps {
  title: string
  note?: string
  tableLabel: string
  metricLabel: string
  valueLabel: string
  data: Datum[]
  children: ReactNode
}

/** Title, note, plot, and an always-available data table. */
export function ChartFrame({ title, note, tableLabel, metricLabel, valueLabel, data, children }: FrameProps) {
  return (
    <figure className="chart">
      <figcaption>
        <div className="chart-title">{title}</div>
        {note && <div className="chart-note">{note}</div>}
      </figcaption>
      <div className="chart-body">{children}</div>
      <details className="data-table">
        <summary>{tableLabel}</summary>
        <table>
          <thead>
            <tr><th>{metricLabel}</th><th>{valueLabel}</th></tr>
          </thead>
          <tbody>
            {data.map(d => (
              <tr key={d.label}><td>{d.label}</td><td>{d.display}</td></tr>
            ))}
          </tbody>
        </table>
      </details>
    </figure>
  )
}

function Tooltip({ x, y, label, value }: { x: number; y: number; label: string; value: string }) {
  return (
    <div className="tooltip" style={{ left: x, top: y }}>
      <span className="tooltip-key">{label} · </span>{value}
    </div>
  )
}

type Hover = { i: number; x: number; y: number } | null

/**
 * Bounded percentages as horizontal bars on a shared 0–100 axis.
 * One row per measure, identity carried by the row label and a fixed hue.
 */
export function QualityBars({ data }: { data: Datum[] }) {
  const { ref, p } = useChartReveal()
  const [hover, setHover] = useState<Hover>(null)
  const w = 520
  const labelW = 130
  const valueW = 50
  const rowH = 48
  const barH = 18
  const plotW = w - labelW - valueW
  const h = data.length * rowH + 28
  const xOf = (v: number) => labelW + (v / 100) * plotW
  const ticks = [0, 25, 50, 75, 100]

  return (
    <div ref={ref}>
      <svg className="chart-svg" viewBox={`0 0 ${w} ${h}`} role="img"
        aria-label={data.map(d => `${d.label}: ${d.display}`).join('; ')}>
        {ticks.map(t => (
          <line key={t} className="grid-line" x1={xOf(t)} y1={0} x2={xOf(t)} y2={h - 28} />
        ))}
        {data.map((d, i) => {
          const y = i * rowH + 15
          const full = xOf(d.value) - labelW
          const bw = Math.max(2, full * p)
          return (
            <g key={d.label} className="bar-mark"
              onMouseEnter={e => setHover({ i, x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY })}
              onMouseMove={e => setHover({ i, x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY })}
              onMouseLeave={() => setHover(null)}>
              <rect x={0} y={i * rowH} width={w} height={rowH} fill="transparent" />
              <text className="cat-label" x={0} y={y + barH / 2 + 4}>{d.label}</text>
              <rect x={labelW} y={y} width={bw} height={barH} rx={4} fill={CAT[i]} />
              <text className="value-label" x={labelW + full + 8} y={y + barH / 2 + 4} opacity={p}>{d.display}</text>
            </g>
          )
        })}
        <line className="axis-line" x1={labelW} y1={h - 28} x2={xOf(100)} y2={h - 28} />
        {ticks.map(t => (
          <text key={t} className="tick-label" x={xOf(t)} y={h - 10}
            textAnchor={t === 0 ? 'start' : t === 100 ? 'end' : 'middle'}>
            {t === 100 ? '100 %' : t}
          </text>
        ))}
      </svg>
      {hover && <Tooltip x={hover.x} y={hover.y} label={data[hover.i].label} value={data[hover.i].display} />}
    </div>
  )
}

export interface Span {
  label: string
  sub: string
  start: number
  end: number
  current?: boolean
}

/** Timeline spans — one lane per role, drawn along a shared year axis. */
export function Timeline({ spans, min, max }: { spans: Span[]; min: number; max: number }) {
  const { ref, p } = useChartReveal()
  const [hover, setHover] = useState<Hover>(null)
  const w = 520
  const laneH = 32
  const h = spans.length * laneH + 30
  const years: number[] = []
  for (let y = Math.ceil(min); y <= Math.floor(max); y++) years.push(y)
  const xOf = (t: number) => ((t - min) / (max - min)) * w

  return (
    <div ref={ref}>
      <svg className="chart-svg" viewBox={`0 0 ${w} ${h}`} role="img"
        aria-label={spans.map(s => `${s.label}: ${s.sub}`).join('; ')}>
        {years.map(y => (
          <line key={y} className="grid-line" x1={xOf(y)} y1={0} x2={xOf(y)} y2={h - 26} />
        ))}
        {spans.map((s, i) => {
          const x = xOf(s.start)
          const full = xOf(s.end) - x
          const bw = Math.max(3, full * p)
          const y = i * laneH + 6
          // Labels sit under the bar's start, but flip to right-aligned near the
          // right edge so they never run past the plot.
          const flip = x > w * 0.62
          return (
            <g key={s.label} className="bar-mark"
              onMouseEnter={e => setHover({ i, x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY })}
              onMouseMove={e => setHover({ i, x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY })}
              onMouseLeave={() => setHover(null)}>
              <rect x={0} y={y - 4} width={w} height={laneH - 4} fill="transparent" />
              <rect x={x} y={y} width={bw} height={10} rx={3} fill={CAT[i]} />
              <text className="cat-label" x={flip ? xOf(s.end) : x} y={y + 24} textAnchor={flip ? 'end' : 'start'}>
                {s.label} · {s.sub}
              </text>
            </g>
          )
        })}
        {years.map(y => (
          <text key={y} className="tick-label" x={xOf(y)} y={h - 8} textAnchor={y === years[0] ? 'start' : 'middle'}>{y}</text>
        ))}
      </svg>
      {hover && <Tooltip x={hover.x} y={hover.y} label={spans[hover.i].label} value={spans[hover.i].sub} />}
    </div>
  )
}

import type { Dict } from '../content'
import { EXP_META, QUALITY } from '../content'
import { useReveal } from '../lib/hooks'
import { ChartFrame, QualityBars, Timeline } from './Charts'

export default function Signals({ d }: { d: Dict }) {
  const head = useReveal()
  const body = useReveal()

  const quality = QUALITY.map(q => ({ label: d[q.key], value: q.value, display: `${q.value} %` }))

  const spans = d.exp.map((job, i) => ({
    label: job.org.split(' · ')[0],
    sub: job.period,
    start: EXP_META[i].start,
    end: EXP_META[i].end,
    current: EXP_META[i].current,
  }))
  const minYear = Math.min(...spans.map(s => s.start))
  const maxYear = Math.max(...spans.map(s => s.end))

  return (
    <section id="signals" aria-labelledby="signals-title">
      <div className="shell">
        <div ref={head.ref} className={`section-head ${head.className}`}>
          <div className="eyebrow">{d.sig_k}</div>
          <h2 id="signals-title">{d.sig_t}</h2>
          <p>{d.sig_n}</p>
        </div>

        <div ref={body.ref} className={body.className}>
          <div className="figures">
            <div className="fig"><div className="n">3<small>+</small></div><div className="l">{d.fig1}</div></div>
            <div className="fig"><div className="n">~100</div><div className="l">{d.fig2}</div></div>
            <div className="fig"><div className="n">500<small>K</small></div><div className="l">{d.fig3}</div></div>
            <div className="fig"><div className="n">95<small>%</small></div><div className="l">{d.fig4}</div></div>
          </div>

          <div className="charts">
            <ChartFrame title={d.ch_quality_t} note={d.ch_quality_n}
              tableLabel={d.a11y_table} metricLabel={d.a11y_metric} valueLabel={d.a11y_value} data={quality}>
              <QualityBars data={quality} />
            </ChartFrame>

            <ChartFrame title={d.ch_tenure_t} note={d.ch_tenure_n}
              tableLabel={d.a11y_table} metricLabel={d.a11y_metric} valueLabel={d.a11y_value}
              data={spans.map(s => ({ label: s.label, value: 0, display: s.sub }))}>
              <Timeline spans={spans} min={minYear} max={maxYear} />
            </ChartFrame>
          </div>
        </div>
      </div>
    </section>
  )
}

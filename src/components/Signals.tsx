import type { Dict } from '../content'
import { EXP_META, QUALITY } from '../content'
import { ChartFrame, QualityBars, Timeline } from './Charts'
import { Reveal, RevealItem } from './motion/Reveal'

export default function Signals({ d }: { d: Dict }) {
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

  const figures = [
    { value: <>3<small>+</small></>, label: d.fig1 },
    { value: <>~100</>, label: d.fig2 },
    { value: <>500<small>K</small></>, label: d.fig3 },
    { value: <>95<small>%</small></>, label: d.fig4 },
  ]

  return (
    <section id="signals" aria-labelledby="signals-title">
      <div className="shell">
        <Reveal className="section-head">
          <div className="eyebrow">{d.sig_k}</div>
          <h2 id="signals-title">{d.sig_t}</h2>
          <p>{d.sig_n}</p>
        </Reveal>

        <Reveal stagger>
          <div className="figures">
            {figures.map(figure => (
              <RevealItem className="fig" key={figure.label}>
                <div className="n">{figure.value}</div>
                <div className="l">{figure.label}</div>
              </RevealItem>
            ))}
          </div>

          <div className="charts">
            <RevealItem>
              <ChartFrame title={d.ch_quality_t} note={d.ch_quality_n}
                tableLabel={d.a11y_table} metricLabel={d.a11y_metric} valueLabel={d.a11y_value} data={quality}>
                <QualityBars data={quality} />
              </ChartFrame>
            </RevealItem>

            <RevealItem>
              <ChartFrame title={d.ch_tenure_t} note={d.ch_tenure_n}
                tableLabel={d.a11y_table} metricLabel={d.a11y_metric} valueLabel={d.a11y_value}
                data={spans.map(s => ({ label: s.label, value: 0, display: s.sub }))}>
                <Timeline spans={spans} min={minYear} max={maxYear} />
              </ChartFrame>
            </RevealItem>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

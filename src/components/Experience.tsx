import type { Dict } from '../content'
import { EXP_META } from '../content'
import { useReveal } from '../lib/hooks'

function Job({ d, i }: { d: Dict; i: number }) {
  const job = d.exp[i]
  const r = useReveal<HTMLElement>()
  return (
    <article ref={r.ref} className={`job ${r.className}`}>
      <div>
        <div className="when">{job.period}</div>
        <div className="where">{job.place}</div>
        {EXP_META[i].current && <span className="now">{d.exp_now}</span>}
      </div>
      <div>
        <h3>{job.role}</h3>
        <div className="org">{job.org}</div>
        <ul>
          {job.points.map(pt => <li key={pt}>{pt}</li>)}
        </ul>
      </div>
    </article>
  )
}

export default function Experience({ d }: { d: Dict }) {
  const head = useReveal()
  return (
    <section id="experience">
      <div className="shell">
        <div ref={head.ref} className={`section-head ${head.className}`}>
          <div className="eyebrow">{d.s2k}</div>
          <h2>{d.s2t}</h2>
        </div>
        {d.exp.map((_, i) => <Job d={d} i={i} key={i} />)}
      </div>
    </section>
  )
}

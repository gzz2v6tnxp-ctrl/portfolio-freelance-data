import type { Dict } from '../content'
import { EXP_META } from '../content'
import { Reveal } from './motion/Reveal'

export default function Experience({ d }: { d: Dict }) {
  return (
    <section id="experience">
      <div className="shell">
        <Reveal className="section-head">
          <div className="eyebrow">{d.s2k}</div>
          <h2>{d.s2t}</h2>
        </Reveal>
        {d.exp.map((job, i) => (
          <Reveal as="article" className="job" key={job.period}>
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
          </Reveal>
        ))}
      </div>
    </section>
  )
}

import type { Dict } from '../content'
import { Reveal, RevealItem } from './motion/Reveal'

export default function Capabilities({ d }: { d: Dict }) {
  return (
    <section id="capabilities">
      <div className="shell">
        <Reveal className="section-head">
          <div className="eyebrow">{d.s3k}</div>
          <h2>{d.s3t}</h2>
        </Reveal>
        <Reveal className="stack" stagger>
          {d.stack.map(row => (
            <RevealItem className="row" key={row.k}>
              <div className="k">{row.k}</div>
              <div className="v">{row.v}</div>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

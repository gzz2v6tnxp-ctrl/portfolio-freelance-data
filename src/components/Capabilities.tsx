import type { Dict } from '../content'
import { useReveal } from '../lib/hooks'

export default function Capabilities({ d }: { d: Dict }) {
  const head = useReveal()
  const list = useReveal()
  return (
    <section id="capabilities">
      <div className="shell">
        <div ref={head.ref} className={`section-head ${head.className}`}>
          <div className="eyebrow">{d.s3k}</div>
          <h2>{d.s3t}</h2>
        </div>
        <div ref={list.ref} className={`stack ${list.className}`}>
          {d.stack.map(row => (
            <div className="row" key={row.k}>
              <div className="k">{row.k}</div>
              <div className="v">{row.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import type { Dict } from '../content'
import { CERT_META } from '../content'
import { useReveal } from '../lib/hooks'

export default function About({ d }: { d: Dict }) {
  const r = useReveal()
  return (
    <section id="about">
      <div ref={r.ref} className={`shell about-grid ${r.className}`}>
        <div className="about-text">
          <div className="eyebrow" style={{ marginBottom: 18 }}>{d.s4k}</div>
          <p className="lead">{d.about_lead}</p>
          <div className="body">
            <p>{d.about_p1}</p>
            <p>{d.about_p2}</p>
          </div>
        </div>

        <aside className="about-aside">
          <div className="facts">
            {d.facts.map(f => (
              <div className="row" key={f.k}>
                <div className="k">{f.k}</div>
                <div className="v">{f.v}{f.sub && <small>{f.sub}</small>}</div>
              </div>
            ))}
          </div>

          <div className="certs">
            <div className="eyebrow" style={{ marginBottom: 14 }}>{d.certs_label}</div>
            {d.certs.map((c, i) => (
              <div className="cert" key={c.title}>
                <div className="y">{CERT_META[i].year}</div>
                <div>
                  <h4>{c.title}</h4>
                  <div className="o">{c.org}</div>
                </div>
                <a className="link" href={CERT_META[i].href} target="_blank" rel="noopener">{d.cert_view} ↗</a>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  )
}

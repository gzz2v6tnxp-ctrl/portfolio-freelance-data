import type { Dict } from '../content'
import { LINKS, NAME } from '../content'
import { Reveal, RevealItem } from './motion/Reveal'

export default function Footer({ d }: { d: Dict }) {
  return (
    <footer id="contact" className="footer">
      <Reveal className="shell" stagger>
        <RevealItem>
          <div className="eyebrow" style={{ marginBottom: 18 }}>{d.foot_k}</div>
          <h2>{d.foot_head}</h2>
        </RevealItem>

        <RevealItem className="contact">
          <div>
            <div className="eyebrow">{d.foot_email}</div>
            <a className="v mono link" href={`mailto:${LINKS.email}`}>{LINKS.email}</a>
          </div>
          <div>
            <div className="eyebrow">{d.foot_phone}</div>
            <div className="v mono">{LINKS.phone}</div>
          </div>
          <div>
            <div className="eyebrow">{d.foot_elsewhere}</div>
            <div className="v links">
              <a className="link" href={LINKS.github} target="_blank" rel="noopener">GitHub ↗</a>
              <a className="link" href={LINKS.linkedin} target="_blank" rel="noopener">LinkedIn ↗</a>
              <a className="link" href={LINKS.calendar} target="_blank" rel="noopener">{d.nav_book} ↗</a>
            </div>
          </div>
        </RevealItem>

        <RevealItem className="legal">
          <span>© 2026 {NAME}</span>
          <span>{d.foot_role}</span>
        </RevealItem>
      </Reveal>
    </footer>
  )
}

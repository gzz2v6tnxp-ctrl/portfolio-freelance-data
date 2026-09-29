import type { Dict, Lang } from '../content'
import { EXP_META, IMG, LINKS, NAME } from '../content'

export default function Hero({ d, lang }: { d: Dict; lang: Lang }) {
  const current = d.exp[EXP_META.findIndex(e => e.current)]

  return (
    <section id="top" className="hero">
      <div className="shell hero-grid">
        <div className="hero-text">
          <div className="status">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9, color: 'var(--ink)' }}>
              <span className="dot" />
              {d.avail}
            </span>
            <span className="sep">|</span><span>{d.reloc}</span>
            <span className="sep">|</span><span>{d.loc}</span>
          </div>

          <h1>
            {d.hero_pre}<em>{d.hero_em}</em>{d.hero_post}
          </h1>
          <p className="lead">{d.hero_sub}</p>

          <div className="actions">
            <a className="btn btn-primary" href="#work">{d.cta_work} ↓</a>
            <a className="btn btn-ghost" href={LINKS.cv[lang]} target="_blank" rel="noopener">{d.cta_cv} ↗</a>
          </div>

          <div className="meta">
            <div>
              <div className="eyebrow">{d.panel_currently}</div>
              <div className="v">{d.panel_role}</div>
              <div className="s">{current.org}</div>
            </div>
            <div>
              <div className="eyebrow">{d.panel_mob}</div>
              <div className="v">{d.reloc_strong}</div>
              <div className="s">{d.reloc_sub}</div>
            </div>
            <div>
              <div className="eyebrow">{d.panel_languages}</div>
              <div className="v">{d.lg_fr} {d.lg_fr_lvl}</div>
              <div className="s">{d.lg_en} {d.lg_en_lvl}</div>
            </div>
          </div>
        </div>

        <div className="hero-media">
          <div className="portrait">
            <img src={IMG.portrait} alt={`Portrait de ${NAME}`} width={900} height={675} />
          </div>
          <div className="caption"><span>{NAME}</span><span>{d.portrait_role}</span></div>
        </div>
      </div>
    </section>
  )
}

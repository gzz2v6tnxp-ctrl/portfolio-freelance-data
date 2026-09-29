import { motion } from 'framer-motion'
import type { Dict, Lang } from '../content'
import { EXP_META, IMG, LINKS, NAME } from '../content'
import { revealVariants, scaleInVariants, staggerContainerVariants } from '../lib/motion'

const BUTTON_HOVER = { y: -2 }
const BUTTON_TAP = { scale: 0.97 }

export default function Hero({ d, lang }: { d: Dict; lang: Lang }) {
  const current = d.exp[EXP_META.findIndex(e => e.current)]

  return (
    <section id="top" className="hero">
      <div className="shell hero-grid">
        <motion.div className="hero-text" variants={staggerContainerVariants} initial="hidden" animate="visible">
          <motion.div className="status" variants={revealVariants}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9, color: 'var(--ink)' }}>
              <span className="dot" />
              {d.avail}
            </span>
            <span className="sep">|</span><span>{d.reloc}</span>
            <span className="sep">|</span><span>{d.loc}</span>
          </motion.div>

          <motion.h1 variants={revealVariants}>
            {d.hero_pre}<em>{d.hero_em}</em>{d.hero_post}
          </motion.h1>
          <motion.p className="lead" variants={revealVariants}>{d.hero_sub}</motion.p>

          <motion.div className="actions" variants={revealVariants}>
            <motion.a className="btn btn-primary" href="#work" whileHover={BUTTON_HOVER} whileTap={BUTTON_TAP}>
              {d.cta_work} ↓
            </motion.a>
            <motion.a
              className="btn btn-ghost"
              href={LINKS.cv[lang]}
              target="_blank"
              rel="noopener"
              whileHover={BUTTON_HOVER}
              whileTap={BUTTON_TAP}
            >
              {d.cta_cv} ↗
            </motion.a>
          </motion.div>

          <motion.div className="meta" variants={revealVariants}>
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
          </motion.div>
        </motion.div>

        <motion.div className="hero-media" variants={scaleInVariants} initial="hidden" animate="visible">
          <div className="portrait">
            <img src={IMG.portrait} alt={`Portrait de ${NAME}`} width={900} height={675} />
          </div>
          <div className="caption"><span>{NAME}</span><span>{d.portrait_role}</span></div>
        </motion.div>
      </div>
    </section>
  )
}

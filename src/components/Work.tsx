import type { Dict } from '../content'
import { LINKS } from '../content'
import { RagDiagram, ScribeDiagram } from './Diagrams'
import { Reveal, RevealItem } from './motion/Reveal'

const TAGS1 = ['Qdrant', 'BM25', 'Embeddings multimodaux', 'Gemini', 'CoVe', 'Docker']
const TAGS2 = ['Llama 3', 'PEFT', 'Transformers', 'Airflow', 'ROUGE-L', 'BERTScore']

export default function Work({ d }: { d: Dict }) {
  return (
    <section id="work">
      <div className="shell">
        <Reveal className="section-head">
          <div className="eyebrow">{d.s1k}</div>
          <h2>{d.s1t}</h2>
          <p>{d.s1n}</p>
        </Reveal>

        <Reveal as="article" className="feature">
          <div className="txt">
            <div className="eyebrow"><span className="accent">{d.st_prod}</span> · Malitix</div>
            <h3>{d.f1_title}</h3>
            <p className="desc">{d.f1_desc}</p>
            <div className="metrics">
              <div><b>~100<small>/j</small></b><span>{d.f1_lbl_conv}</span></div>
              <div><b>800+</b><span>{d.f1_lbl_prod}</span></div>
              <div><b>80 %</b><span>{d.f1_lbl_rel}</span></div>
              <div><b>2 sem.</b><span>{d.f1_lbl_mvp}</span></div>
            </div>
            <div className="tags">{TAGS1.map(t => <span key={t}>{t}</span>)}</div>
            <div className="links">
              <a className="link" href={LINKS.ragRepo} target="_blank" rel="noopener">{d.link_code} ↗</a>
            </div>
          </div>
          <div className="fig-area"><RagDiagram t={d.d1} /></div>
        </Reveal>

        <Reveal as="article" className="feature rev">
          <div className="txt">
            <div className="eyebrow">{d.st_ft}</div>
            <h3>{d.f2_title}</h3>
            <p className="desc">{d.f2_desc}</p>
            <div className="metrics">
              <div><b>8B</b><span>Llama 3</span></div>
              <div><b>LoRA</b><span>QLoRA / PEFT</span></div>
              <div><b>SOAP</b><span>{d.f2_lbl_struct}</span></div>
              <div><b>PII</b><span>{d.f2_lbl_anon}</span></div>
            </div>
            <div className="tags">{TAGS2.map(t => <span key={t}>{t}</span>)}</div>
            <div className="links">
              <a className="link" href={LINKS.scribeRepo} target="_blank" rel="noopener">{d.link_code} ↗</a>
              <a className="link" href={LINKS.scribeModel} target="_blank" rel="noopener">{d.link_model} ↗</a>
            </div>
          </div>
          <div className="fig-area"><ScribeDiagram t={d.d2} /></div>
        </Reveal>

        <Reveal stagger>
          <div className="tiles">
            {d.projects.map(p => (
              <RevealItem as="article" className="tile" key={p.title} whileHover={{ y: -4 }}>
                <div className="org">{p.org}</div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
                <div className="m">{p.metric}</div>
              </RevealItem>
            ))}
          </div>
          <RevealItem className="also">
            <span className="eyebrow">{d.also_label}</span>
            {d.also.map(a => <span key={a}>{a}</span>)}
          </RevealItem>
        </Reveal>
      </div>
    </section>
  )
}

/* Architecture diagrams for the two featured projects. Labels come from the dictionary. */

type T = Record<string, string>

function Arrow({ id }: { id: string }) {
  return (
    <defs>
      <marker id={id} viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto">
        <path d="M0 0.5 L7 4 L0 7.5" fill="none" stroke="var(--ink-3)" strokeWidth="1.2" />
      </marker>
    </defs>
  )
}

export function RagDiagram({ t }: { t: T }) {
  const m = 'url(#ah-rag)'
  return (
    <div className="diagram">
      <svg viewBox="0 0 640 300" role="img" aria-label={t.aria}>
        <Arrow id="ah-rag" />
        <rect className="box" x="8" y="60" width="120" height="56" />
        <text className="t" x="68" y="84" textAnchor="middle">{t.input}</text>
        <text className="s" x="68" y="102" textAnchor="middle">{t.input_sub}</text>
        <path className="arrow" d="M128 88 H176" markerEnd={m} />

        <rect className="band" x="180" y="18" width="220" height="160" />
        <text className="bandt" x="190" y="34">{t.band}</text>
        <rect className="box" x="196" y="52" width="88" height="44" />
        <text className="t" x="240" y="78" textAnchor="middle">{t.bm25}</text>
        <rect className="box" x="196" y="112" width="88" height="44" />
        <text className="t" x="240" y="132" textAnchor="middle">{t.emb}</text>
        <text className="s" x="240" y="146" textAnchor="middle">{t.emb_sub}</text>
        <path className="arrow" d="M284 74 H300 V96 H312" markerEnd={m} />
        <path className="arrow" d="M284 134 H300 V112 H312" markerEnd={m} />
        <rect className="box-hi" x="316" y="80" width="72" height="48" />
        <text className="t" x="352" y="100" textAnchor="middle">{t.store}</text>
        <text className="s" x="352" y="116" textAnchor="middle">{t.store_sub}</text>

        <path className="arrow" d="M388 104 H424" markerEnd={m} />
        <rect className="box" x="428" y="80" width="86" height="48" />
        <text className="t" x="471" y="100" textAnchor="middle">{t.llm}</text>
        <text className="s" x="471" y="116" textAnchor="middle">{t.llm_sub}</text>
        <path className="arrow" d="M514 104 H548" markerEnd={m} />
        <rect className="box" x="552" y="80" width="80" height="48" />
        <text className="t" x="592" y="100" textAnchor="middle">{t.cove}</text>
        <text className="s" x="592" y="116" textAnchor="middle">{t.cove_sub}</text>
        <path className="arrow" d="M592 128 V178 H520" markerEnd={m} />
        <rect className="box" x="428" y="158" width="86" height="44" />
        <text className="t" x="471" y="176" textAnchor="middle">{t.out}</text>
        <text className="s" x="471" y="192" textAnchor="middle">{t.out_sub}</text>
        <path className="arrow" d="M428 180 H140 V116" markerEnd={m} />

        <rect className="band" x="8" y="222" width="624" height="62" />
        <text className="bandt" x="18" y="240">{t.obs}</text>
        <text className="t" x="18" y="266">{t.obs1}</text>
        <text className="t" x="230" y="266">{t.obs2}</text>
        <text className="t" x="470" y="266">{t.obs3}</text>
      </svg>
    </div>
  )
}

export function ScribeDiagram({ t }: { t: T }) {
  const m = 'url(#ah-scribe)'
  return (
    <div className="diagram">
      <svg viewBox="0 0 640 300" role="img" aria-label={t.aria}>
        <Arrow id="ah-scribe" />
        <rect className="box" x="8" y="76" width="126" height="56" />
        <text className="t" x="71" y="100" textAnchor="middle">{t.input}</text>
        <text className="s" x="71" y="118" textAnchor="middle">{t.input_sub}</text>
        <path className="arrow" d="M134 104 H170" markerEnd={m} />
        <rect className="box" x="174" y="76" width="110" height="56" />
        <text className="t" x="229" y="100" textAnchor="middle">{t.anon}</text>
        <text className="s" x="229" y="118" textAnchor="middle">{t.anon_sub}</text>
        <path className="arrow" d="M284 104 H320" markerEnd={m} />
        <rect className="box-hi" x="324" y="66" width="130" height="76" />
        <text className="t" x="389" y="92" textAnchor="middle">{t.model}</text>
        <text className="s" x="389" y="110" textAnchor="middle">{t.model_sub}</text>
        <text className="s" x="389" y="126" textAnchor="middle">{t.model_sub2}</text>
        <path className="arrow" d="M454 104 H490" markerEnd={m} />
        <rect className="box" x="494" y="30" width="138" height="150" />
        <text className="t" x="563" y="52" textAnchor="middle">{t.soap}</text>
        <text className="s" x="508" y="80">{t.s}</text>
        <text className="s" x="508" y="104">{t.o}</text>
        <text className="s" x="508" y="128">{t.a}</text>
        <text className="s" x="508" y="152">{t.p}</text>
        <path className="arrow" d="M563 180 V212 H420" markerEnd={m} />
        <rect className="box" x="300" y="190" width="116" height="44" />
        <text className="t" x="358" y="208" textAnchor="middle">{t.eval}</text>
        <text className="s" x="358" y="224" textAnchor="middle">{t.eval_sub}</text>

        <rect className="band" x="8" y="250" width="624" height="40" />
        <text className="bandt" x="18" y="266">{t.orch}</text>
        <text className="t" x="120" y="275">{t.orch1}</text>
        <text className="t" x="400" y="275">{t.orch2}</text>
      </svg>
    </div>
  )
}

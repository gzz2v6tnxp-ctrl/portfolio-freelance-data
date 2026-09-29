export type Lang = 'EN' | 'FR'

export const NAME = 'Irinasoa Sitraka Laurà RAVELOJAONA'

export interface Project {
  org: string
  title: string
  desc: string
  metric: string
}

export interface Job {
  period: string
  role: string
  org: string
  place: string
  points: string[]
}

export interface Row {
  k: string
  v: string
  sub?: string
}

export interface Cert {
  title: string
  org: string
}

export interface Dict {
  nav_work: string; nav_exp: string; nav_stack: string; nav_about: string; nav_contact: string; nav_book: string
  theme_light: string; theme_dark: string
  avail: string; reloc: string; loc: string
  hero_pre: string; hero_em: string; hero_post: string; hero_sub: string
  cta_work: string; cta_cv: string
  panel_currently: string; panel_role: string; panel_mob: string; panel_languages: string
  reloc_strong: string; reloc_sub: string
  lg_fr: string; lg_fr_lvl: string; lg_en: string; lg_en_lvl: string
  portrait_role: string
  // signals
  sig_k: string; sig_t: string; sig_n: string
  fig1: string; fig2: string; fig3: string; fig4: string
  ch_quality_t: string; ch_quality_n: string
  ch_tenure_t: string; ch_tenure_n: string
  lbl_relevance: string; lbl_accuracy: string; lbl_cv: string
  a11y_table: string; a11y_metric: string; a11y_value: string
  // work
  s1k: string; s1t: string; s1n: string
  st_prod: string; st_ft: string
  f1_title: string; f1_desc: string
  f1_lbl_conv: string; f1_lbl_prod: string; f1_lbl_rel: string; f1_lbl_mvp: string
  f2_title: string; f2_desc: string
  f2_lbl_struct: string; f2_lbl_anon: string
  link_code: string; link_model: string
  d1: Record<string, string>
  d2: Record<string, string>
  projects: Project[]
  also_label: string; also: string[]
  // experience
  s2k: string; s2t: string; exp_now: string
  exp: Job[]
  // stack
  s3k: string; s3t: string
  stack: Row[]
  // about
  s4k: string; about_lead: string; about_p1: string; about_p2: string
  facts: Row[]
  certs_label: string; cert_view: string
  certs: Cert[]
  // footer
  foot_k: string; foot_head: string; foot_email: string; foot_phone: string; foot_elsewhere: string; foot_role: string
}

export const DICT: Record<Lang, Dict> = {
  EN: {
    nav_work: 'Work', nav_exp: 'Experience', nav_stack: 'Stack', nav_about: 'About', nav_contact: 'Contact', nav_book: 'Book a call',
    theme_light: 'Light', theme_dark: 'Dark',
    avail: 'Open to new opportunities', reloc: 'International mobility', loc: 'Based in Antananarivo',
    hero_pre: 'Production-grade ', hero_em: 'GenAI', hero_post: ', from research to real traffic.',
    hero_sub: 'AI & ML Engineer with 3+ years designing, deploying and monitoring production AI: multi-agent orchestration, RAG pipelines, Document AI (OCR + LLM), computer vision and MLOps on GCP & AWS. Every model and pipeline ships deployed, tested and monitored.',
    cta_work: 'Selected work', cta_cv: 'Download CV',
    panel_currently: 'Currently', panel_role: 'AI Engineer', panel_mob: 'Mobility', panel_languages: 'Languages',
    reloc_strong: 'Ready to relocate', reloc_sub: 'Visa sponsorship required',
    lg_fr: 'French', lg_fr_lvl: 'fluent', lg_en: 'English', lg_en_lvl: 'professional',
    portrait_role: 'AI & ML Engineer',
    sig_k: 'Signals', sig_t: 'Production, measured.', sig_n: 'Every figure comes from a system running in production, not from a benchmark.',
    fig1: 'in production', fig2: 'conversations per day', fig3: 'CV training images', fig4: 'document extraction accuracy',
    ch_quality_t: 'Quality gates', ch_quality_n: 'Measured on live traffic.',
    ch_tenure_t: 'Track record', ch_tenure_n: 'Roles by span, 2021 to today.',
    lbl_relevance: 'RAG relevance', lbl_accuracy: 'Extraction accuracy', lbl_cv: 'Computer vision',
    a11y_table: 'Data table', a11y_metric: 'Metric', a11y_value: 'Value',
    s1k: 'Selected work', s1t: 'Systems that shipped.', s1n: 'Production work, not demos. Each one handles real users, documents or traffic.',
    st_prod: 'In production', st_ft: 'Fine-tuned · personal project',
    f1_title: 'Agentic multimodal RAG, sales assistant',
    f1_desc: 'An assistant on WhatsApp and Messenger handling ~100 conversations a day across 800+ products. Hybrid BM25 + multimodal embeddings on Qdrant, real-time ordering and Chain-of-Verification for reliable answers.',
    f1_lbl_conv: 'Conversations', f1_lbl_prod: 'Products', f1_lbl_rel: 'Relevance', f1_lbl_mvp: 'To MVP',
    f2_title: 'Clinical Scribe, healthcare LLM',
    f2_desc: 'Llama 3 8B fine-tuned (LoRA / QLoRA) to turn doctor–patient transcripts into structured SOAP clinical notes. Airflow-orchestrated pipeline, PII anonymization, ROUGE-L and BERTScore evaluation.',
    f2_lbl_struct: 'Structured', f2_lbl_anon: 'Anonymized',
    link_code: 'Source code', link_model: 'Model repo',
    d1: {
      aria: 'Pipeline diagram: WhatsApp and Messenger messages, hybrid search with BM25 and multimodal embeddings in Qdrant, Gemini LLM, Chain-of-Verification, answer and order. Observability with Langfuse, Arize Phoenix and n8n.',
      input: 'WhatsApp · Messenger', input_sub: 'text + image', band: 'Hybrid search', bm25: 'BM25', emb: 'Embeddings', emb_sub: 'multimodal',
      store: 'Qdrant', store_sub: '800+ products', llm: 'LLM', llm_sub: 'Gemini', cove: 'CoVe', cove_sub: 'verification',
      out: 'Answer', out_sub: '+ order', obs: 'Observability', obs1: 'Langfuse · LLM tracing', obs2: 'Arize Phoenix · retriever monitoring', obs3: 'n8n · orchestration',
    },
    d2: {
      aria: 'Pipeline diagram: doctor–patient transcript, PII anonymization, fine-tuned Llama 3 8B, SOAP note in four sections, ROUGE-L and BERTScore evaluation. Airflow orchestration.',
      input: 'Transcript', input_sub: 'doctor – patient', anon: 'Anonymization', anon_sub: 'PII', model: 'Llama 3 8B', model_sub: 'LoRA / QLoRA · PEFT', model_sub2: 'fine-tuned',
      soap: 'SOAP note', s: 'S · Subjective', o: 'O · Objective', a: 'A · Assessment', p: 'P · Plan',
      eval: 'Evaluation', eval_sub: 'ROUGE-L · BERTScore', orch: 'Orchestration', orch1: 'Apache Airflow · daily DAG', orch2: 'Hugging Face · published model',
    },
    projects: [
      { org: 'Malitix', title: 'Multi-agent system (C7)', desc: 'Orchestration of complex AI tasks in production. n8n workflows, Langfuse tracing.', metric: 'In production' },
      { org: 'Blackcell · Alvarez & Marsal', title: 'Document AI, INPI KPIs', desc: 'OCR + LLM pipeline on legal and financial documents, plus big data on public open data: cross-referencing Bodacc and RNE records to feed INPI KPIs. Selected from 90 candidates.', metric: '560 → 400K companies · −70% requests' },
      { org: 'Malitix', title: 'Document intelligence', desc: 'OCR (Doctr) + LLM extraction, per-field confidence scoring, LLM-as-Judge validation.', metric: '95% · ~100 docs/day' },
      { org: 'Malitix', title: 'Computer vision', desc: 'Stamp and signature detection (YOLO), age classification (ResNet), augmented dataset.', metric: '100K → 500K images' },
    ],
    also_label: 'Also', also: ['Bank-statement anomaly detection · ~200/day', 'Sports-coaching RAG chatbot', 'XGBoost credit scoring', 'Local LLM benchmarking'],
    s2k: 'Experience', s2t: "Where I've shipped.", exp_now: 'Current role',
    exp: [
      { period: 'Apr 2026 – today', role: 'AI Engineer, Multi-Agent & RAG', org: 'Matsiya', place: 'France', points: ['Audited and refactored 5 RAG services (~10,700 lines): inconsistencies, dead code, harmonized patterns.', 'Designed the KnowledgeSource v2 architecture for the platform’s agent-builder.', '898 green tests on the agentic scope.'] },
      { period: 'Jul – Sep 2026', role: 'AI Engineer, Document AI', org: 'Blackcell · via Alvarez & Marsal', place: 'France', points: ['Selected from 90 candidates to design a Document AI pipeline (OCR + LLM) on legal and financial documents.', 'Big data on public open data: cross-referenced Bodacc and RNE records to feed INPI KPIs (560 to 400K companies).', 'Bulk-optimized HTTP requests: −70% volume.'] },
      { period: 'Mar 2024 – Apr 2026', role: 'AI Engineer, GenAI, RAG & Computer Vision', org: 'Malitix', place: 'Antananarivo', points: ['Multi-agent system (C7) orchestrating AI tasks in production.', 'Multimodal sales assistant: hybrid RAG on Qdrant, 80% relevance, MVP in 2 weeks.', 'Document AI ~100 docs/day at 95%; vision (YOLO, ResNet); bank anomalies on Dataflow.', 'MLOps: Langfuse, Arize Phoenix, n8n.'] },
      { period: 'Jul 2023 – Feb 2024', role: 'Data Scientist', org: 'Relia Consulting', place: 'Antananarivo', points: ['Accounting chatbot with Rasa: training data, conversational flows, end-to-end tests.', 'Stock prediction (linear regression, Adam), tracked in Weights & Biases.'] },
      { period: '2021 – today', role: 'Freelance, Developer & Data Analyst (healthcare)', org: 'Independent engagements', place: 'International', points: ['Sports-coaching RAG chatbot: Pinecone + Groq, Botpress, automated CRM.', 'KPI dashboard (Power BI) and optimization algorithm for a health-insurance brokerage.', 'Back-end and PostgreSQL for a government project (Mauritius), CNAPS modules.'] },
    ],
    s3k: 'Stack', s3t: 'Capabilities, indexed.',
    stack: [
      { k: 'GenAI & RAG', v: 'PydanticAI · LlamaIndex · LangChain · LangGraph · multi-agent orchestration · MCP · hybrid search BM25 + embeddings · pgvector · Qdrant · Pinecone · Weaviate' },
      { k: 'LLMs', v: 'Gemini · OpenAI · Claude · Llama 3 · Groq · Ollama · LLM-as-Judge · confidence scoring · LoRA / QLoRA / PEFT' },
      { k: 'Document AI', v: 'Doctr OCR · LLM extraction + validation · legal and financial pipelines' },
      { k: 'Machine & Deep Learning', v: 'PyTorch · TensorFlow · Scikit-learn · XGBoost · Transformers · YOLO · ResNet · transfer learning · augmentation' },
      { k: 'MLOps & Cloud', v: 'Docker · MLflow · Langfuse · Arize Phoenix · Weights & Biases · CI/CD · automated tests · GCP Dataflow, Cloud Run · AWS' },
      { k: 'Data', v: 'Python · advanced SQL · PostgreSQL · Airflow · data modeling · Power BI' },
      { k: 'Back-end & more', v: 'FastAPI · Next.js · Git · n8n · Rasa' },
    ],
    s4k: 'About',
    about_lead: 'I build AI systems that survive contact with real users, and I keep them observable once they do.',
    about_p1: 'Three-plus years across multi-agent orchestration, hybrid RAG pipelines, Document AI, computer vision and MLOps. My focus is the unglamorous part: hybrid retrieval that actually returns the right thing, LLM evaluation you can trust, and the tracing, monitoring and tests that keep a system honest in production.',
    about_p2: 'I currently work with French teams, Matsiya and Blackcell through Alvarez & Marsal, who selected me from 90 candidates for a strategic Document AI project. Next step: relocating to join a team on site, closer to the product and the people using it.',
    facts: [
      { k: 'Education', v: 'Computer Science Engineering degree', sub: 'École Nationale d’Informatique, Univ. of Fianarantsoa · 2018–2023 · GPA 3.2/4' },
      { k: 'Specializations', v: 'Machine Learning, Deep Learning, Statistical Learning, data modeling, programming' },
      { k: 'Mobility', v: 'Open to international mobility', sub: 'Visa sponsorship required' },
      { k: 'Clients', v: 'Matsiya · Blackcell (Alvarez & Marsal)' },
      { k: 'Languages', v: 'French fluent · English professional' },
    ],
    certs_label: 'Certifications', cert_view: 'View',
    certs: [
      { title: 'Data Science & AI Specialization', org: 'Columbia University' },
      { title: 'Datatour finalist', org: 'National data competition' },
    ],
    foot_k: 'Contact', foot_head: "Let's build something reliable.", foot_email: 'Email', foot_phone: 'Phone', foot_elsewhere: 'Elsewhere',
    foot_role: 'AI & Machine Learning Engineer · Open to mobility',
  },
  FR: {
    nav_work: 'Travaux', nav_exp: 'Parcours', nav_stack: 'Stack', nav_about: 'À propos', nav_contact: 'Contact', nav_book: 'Réserver un appel',
    theme_light: 'Clair', theme_dark: 'Sombre',
    avail: 'Ouverte à de nouvelles opportunités', reloc: 'Mobilité internationale', loc: 'Basée à Antananarivo',
    hero_pre: 'Du ', hero_em: 'GenAI', hero_post: ' prêt pour la production, de la recherche au trafic réel.',
    hero_sub: 'Ingénieure IA & ML, 3+ ans à concevoir, déployer et monitorer des systèmes IA en production : orchestration multi-agents, pipelines RAG, Document AI (OCR + LLM), vision par ordinateur et MLOps sur GCP & AWS. Chaque modèle et pipeline est déployé, testé et monitoré.',
    cta_work: 'Travaux choisis', cta_cv: 'Télécharger le CV',
    panel_currently: 'Actuellement', panel_role: 'AI Engineer', panel_mob: 'Mobilité', panel_languages: 'Langues',
    reloc_strong: 'Prête pour une relocalisation', reloc_sub: 'Sponsoring visa requis',
    lg_fr: 'Français', lg_fr_lvl: 'courant', lg_en: 'Anglais', lg_en_lvl: 'professionnel',
    portrait_role: 'Ingénieure IA & ML',
    sig_k: 'Signaux', sig_t: 'La production, mesurée.', sig_n: "Chaque chiffre provient d'un système qui tourne en production, pas d'un benchmark.",
    fig1: 'en production', fig2: 'conversations par jour', fig3: "images d'entraînement CV", fig4: 'de précision en extraction documentaire',
    ch_quality_t: 'Seuils de qualité', ch_quality_n: 'Mesurés sur le trafic réel.',
    ch_tenure_t: 'Parcours', ch_tenure_n: "Postes par durée, 2021 à aujourd'hui.",
    lbl_relevance: 'Pertinence RAG', lbl_accuracy: 'Précision extraction', lbl_cv: 'Computer vision',
    a11y_table: 'Tableau de données', a11y_metric: 'Indicateur', a11y_value: 'Valeur',
    s1k: 'Travaux choisis', s1t: 'Des systèmes en production.', s1n: 'Du concret, pas des démos. Chacun gère de vrais utilisateurs, documents ou trafic.',
    st_prod: 'En production', st_ft: 'Fine-tuné · projet personnel',
    f1_title: 'RAG multimodal agentique, assistant commercial',
    f1_desc: 'Un assistant sur WhatsApp et Messenger qui gère ~100 conversations par jour sur 800+ produits. Recherche hybride BM25 + embeddings multimodaux sur Qdrant, commande en temps réel et Chain-of-Verification pour des réponses fiables.',
    f1_lbl_conv: 'Conversations', f1_lbl_prod: 'Produits', f1_lbl_rel: 'Pertinence', f1_lbl_mvp: "Jusqu'au MVP",
    f2_title: 'Clinical Scribe, LLM santé',
    f2_desc: 'Llama 3 8B fine-tuné (LoRA / QLoRA) pour convertir des transcriptions médecin–patient en notes cliniques SOAP structurées. Pipeline orchestré par Airflow, anonymisation des PII, évaluation ROUGE-L et BERTScore.',
    f2_lbl_struct: 'Structuré', f2_lbl_anon: 'Anonymisé',
    link_code: 'Code source', link_model: 'Dépôt du modèle',
    d1: {
      aria: 'Schéma du pipeline : messages WhatsApp et Messenger, recherche hybride BM25 et embeddings multimodaux dans Qdrant, LLM Gemini, Chain-of-Verification, réponse et commande. Observabilité Langfuse, Arize Phoenix et n8n.',
      input: 'WhatsApp · Messenger', input_sub: 'texte + image', band: 'Recherche hybride', bm25: 'BM25', emb: 'Embeddings', emb_sub: 'multimodaux',
      store: 'Qdrant', store_sub: '800+ produits', llm: 'LLM', llm_sub: 'Gemini', cove: 'CoVe', cove_sub: 'vérification',
      out: 'Réponse', out_sub: '+ commande', obs: 'Observabilité', obs1: 'Langfuse · tracing LLM', obs2: 'Arize Phoenix · monitoring retriever', obs3: 'n8n · orchestration',
    },
    d2: {
      aria: 'Schéma du pipeline : transcription médecin–patient, anonymisation PII, Llama 3 8B fine-tuné, note SOAP en quatre sections, évaluation ROUGE-L et BERTScore. Orchestration Airflow.',
      input: 'Transcription', input_sub: 'médecin – patient', anon: 'Anonymisation', anon_sub: 'PII', model: 'Llama 3 8B', model_sub: 'LoRA / QLoRA · PEFT', model_sub2: 'fine-tuné',
      soap: 'Note SOAP', s: 'S · Subjectif', o: 'O · Objectif', a: 'A · Analyse', p: 'P · Plan',
      eval: 'Évaluation', eval_sub: 'ROUGE-L · BERTScore', orch: 'Orchestration', orch1: 'Apache Airflow · DAG quotidien', orch2: 'Hugging Face · modèle publié',
    },
    projects: [
      { org: 'Malitix', title: 'Système multi-agents (C7)', desc: 'Orchestration de tâches IA complexes en production. Workflows n8n, tracing Langfuse.', metric: 'En production' },
      { org: 'Blackcell · Alvarez & Marsal', title: 'Document AI, KPIs INPI', desc: "Pipeline OCR + LLM sur documents juridiques et financiers, et big data sur open data publique : croisement des données Bodacc et RNE pour alimenter des KPIs INPI. Sélectionnée parmi 90 candidats.", metric: '560 → 400K sociétés · −70 % de requêtes' },
      { org: 'Malitix', title: 'Intelligence documentaire', desc: 'Extraction OCR (Doctr) + LLM, score de confiance par champ, validation LLM-as-Judge.', metric: '95 % · ~100 docs/jour' },
      { org: 'Malitix', title: 'Vision par ordinateur', desc: "Détection de cachets et signatures (YOLO), classification d'âge (ResNet), dataset augmenté.", metric: '100K → 500K images' },
    ],
    also_label: 'Aussi', also: ["Détection d'anomalies bancaires · ~200 relevés/jour", 'Chatbot RAG coaching sportif', 'Credit scoring XGBoost', 'Benchmarking LLM local'],
    s2k: 'Parcours', s2t: "Là où j'ai livré.", exp_now: 'Poste actuel',
    exp: [
      { period: "Avr. 2026 – aujourd'hui", role: 'AI Engineer, Multi-Agent & RAG', org: 'Matsiya', place: 'France', points: ['Audit et refactoring de 5 services RAG (~10 700 lignes) : incohérences, code mort, harmonisation des patterns.', "Conception de l'architecture KnowledgeSource v2 pour l'agent-builder de la plateforme.", '898 tests verts sur le scope agentique.'] },
      { period: 'Juil. – sept. 2026', role: 'AI Engineer, Document AI', org: 'Blackcell · mission via Alvarez & Marsal', place: 'France', points: ['Sélectionnée parmi 90 candidats pour concevoir un pipeline Document AI (OCR + LLM) sur documents juridiques et financiers.', 'Big data sur open data publique : croisement des données Bodacc et RNE pour alimenter des KPIs INPI (560 à 400K sociétés).', 'Optimisation bulk des requêtes HTTP : −70 % de volume.'] },
      { period: 'Mars 2024 – avr. 2026', role: 'AI Engineer, GenAI, RAG & Computer Vision', org: 'Malitix', place: 'Antananarivo', points: ["Système multi-agents (C7) pour l'orchestration de tâches IA en production.", 'Assistant de vente multimodal : RAG hybride sur Qdrant, 80 % de pertinence, MVP en 2 semaines.', 'Document AI ~100 docs/jour à 95 % ; vision (YOLO, ResNet) ; anomalies bancaires sur Dataflow.', 'MLOps : Langfuse, Arize Phoenix, n8n.'] },
      { period: 'Juil. 2023 – fév. 2024', role: 'Data Scientist', org: 'Relia Consulting', place: 'Antananarivo', points: ["Chatbot comptable via Rasa : données d'entraînement, flows conversationnels, tests end-to-end.", 'Prédiction de stock (régression linéaire, Adam), suivi Weights & Biases.'] },
      { period: "2021 – aujourd'hui", role: 'Freelance, Dev & Analyste Data (domaine santé)', org: 'Missions indépendantes', place: 'International', points: ['Chatbot RAG coaching sportif : Pinecone + Groq, Botpress, CRM automatisé.', "Dashboard KPIs (Power BI) et algorithme d'optimisation pour le courtage santé.", 'Back-end et PostgreSQL pour un projet ministériel (Maurice), modules CNAPS.'] },
    ],
    s3k: 'Stack', s3t: 'Compétences, indexées.',
    stack: [
      { k: 'GenAI & RAG', v: 'PydanticAI · LlamaIndex · LangChain · LangGraph · orchestration multi-agents · MCP · recherche hybride BM25 + embeddings · pgvector · Qdrant · Pinecone · Weaviate' },
      { k: 'LLMs', v: 'Gemini · OpenAI · Claude · Llama 3 · Groq · Ollama · LLM-as-Judge · scoring de confiance · LoRA / QLoRA / PEFT' },
      { k: 'Document AI', v: 'OCR Doctr · extraction + validation LLM · pipelines juridiques et financiers' },
      { k: 'Machine & Deep Learning', v: 'PyTorch · TensorFlow · Scikit-learn · XGBoost · Transformers · YOLO · ResNet · transfer learning · augmentation' },
      { k: 'MLOps & Cloud', v: 'Docker · MLflow · Langfuse · Arize Phoenix · Weights & Biases · CI/CD · tests automatisés · GCP Dataflow, Cloud Run · AWS' },
      { k: 'Data', v: 'Python · SQL avancé · PostgreSQL · Airflow · modélisation de données · Power BI' },
      { k: 'Back-end & autres', v: 'FastAPI · Next.js · Git · n8n · Rasa' },
    ],
    s4k: 'À propos',
    about_lead: "Je construis des systèmes d'IA qui survivent au contact des vrais utilisateurs, et je les garde observables une fois en production.",
    about_p1: "Plus de trois ans entre orchestration multi-agents, pipelines RAG hybrides, Document AI, vision par ordinateur et MLOps. Mon terrain, c'est la partie ingrate : une recherche hybride qui renvoie vraiment la bonne chose, une évaluation LLM fiable, et le tracing, le monitoring et les tests qui gardent un système honnête en production.",
    about_p2: "Je travaille aujourd'hui avec des équipes françaises, Matsiya et Blackcell via Alvarez & Marsal, qui m'a sélectionnée parmi 90 candidats pour un projet Document AI stratégique. Prochaine étape : m'installer pour rejoindre une équipe sur place, au plus près du produit et de ses utilisateurs.",
    facts: [
      { k: 'Formation', v: 'Ingénieure en informatique', sub: "École Nationale d'Informatique, Univ. de Fianarantsoa · 2018–2023 · GPA 3,2/4" },
      { k: 'Spécialités', v: 'Machine Learning, Deep Learning, Statistical Learning, modélisation de données, programmation' },
      { k: 'Mobilité', v: 'Ouverte à la mobilité internationale', sub: 'Sponsoring visa requis' },
      { k: 'Clients', v: 'Matsiya · Blackcell (Alvarez & Marsal)' },
      { k: 'Langues', v: 'Français courant · Anglais professionnel' },
    ],
    certs_label: 'Certifications', cert_view: 'Voir',
    certs: [
      { title: 'Data Science & AI Specialization', org: 'Columbia University' },
      { title: 'Finaliste Datatour', org: 'Compétition nationale de données' },
    ],
    foot_k: 'Contact', foot_head: 'Construisons quelque chose de fiable.', foot_email: 'Email', foot_phone: 'Téléphone', foot_elsewhere: 'Ailleurs',
    foot_role: 'Ingénieure IA & Machine Learning · Ouverte à la mobilité',
  },
}

/* Timeline geometry (decimal years). Order matches `exp`. */
export const EXP_META = [
  { current: true, start: 2026.25, end: 2026.75 },
  { current: false, start: 2026.5, end: 2026.75 },
  { current: false, start: 2024.17, end: 2026.25 },
  { current: false, start: 2023.5, end: 2024.17 },
  { current: false, start: 2021, end: 2026.75 },
]

/* Quality gates, measured in production. Order matches the chart rows. */
export const QUALITY = [
  { key: 'lbl_relevance', value: 80 },
  { key: 'lbl_accuracy', value: 95 },
  { key: 'lbl_cv', value: 80 },
] as const

export const CERT_META = [
  { year: '2024', href: 'https://badges.plus.columbia.edu/ca158ce4-b301-46dc-b90f-5b92e2c30f6d' },
  { year: '2025', href: 'https://drive.google.com/file/d/1PEwXtr2fuLAv8vt5lkEvw01LHaFpDHk7/view?usp=sharing' },
]

export const LINKS = {
  calendar: 'https://calendar.app.google/9fJTBfg1uLx1Xhzn8',
  github: 'https://github.com/Irina-Igmm',
  linkedin: 'https://www.linkedin.com/in/sitraka-ravelojaona/',
  ragRepo: 'https://github.com/gzz2v6tnxp-ctrl/genai-workflow-automate',
  scribeRepo: 'https://github.com/gzz2v6tnxp-ctrl/clinical-scribe',
  scribeModel: 'https://huggingface.co/Irina-Igmm/clinical-scribe-llama-3-merged',
  email: 'irinasitraka67@gmail.com',
  phone: '+261 34 52 128 18',
  // One French CV for both languages until an English version exists.
  cv: { EN: '/Sitraka_Ravelojaona_CV_FR.pdf', FR: '/Sitraka_Ravelojaona_CV_FR.pdf' } satisfies Record<Lang, string>,
}

export const IMG = {
  portrait: '/assets/f2811a79-a4c2-4636-b889-51e68f4d6a60.jpg',
}

import { PortfolioItem, BlogPost } from '../types';

export const PORTFOLIO_PROJECTS: PortfolioItem[] = [
  {
    id: 'proj-1',
    title: 'Enterprise Multi-Modal RAG & Document Intelligence',
    subtitle: 'Autonomous Knowledge Search across 2.5 Million Financial & Legal Records',
    category: 'Generative AI & LLMs',
    clientIndustry: 'FinTech & Banking',
    clientRegion: 'Global (North America & EU)',
    duration: '12 Weeks',
    summary: 'Engineered a highly secure hybrid vector-search RAG engine with fine-tuned embeddings and strict citation tracing, reducing compliance search time by 82%.',
    problem: 'The client’s risk & legal team spent over 18,000 hours annually manually cross-referencing multi-tiered regulatory documents, loan contracts, and internal compliance guidelines across fragmented databases.',
    solution: 'GenX Technologies implemented a custom Multi-Modal RAG pipeline powered by fine-tuned domain LLMs, Qdrant vector database, and OCR vision processing for tables/charts. Integrated zero-trust row-level security and strict provenance tracking to ensure hallucination-free output.',
    metrics: [
      { label: 'Search Latency', value: '82% Drop', description: 'From 45 mins to 4.2 seconds average query time' },
      { label: 'Compliance Accuracy', value: '99.6%', description: 'Verified against benchmark legal test dataset' },
      { label: 'Annual Cost Saving', value: '$2.8M', description: 'Reduction in manual audit and compliance overhead' }
    ],
    techStack: ['Gemini 3.6 Flash', 'Qdrant Vector DB', 'PyTorch', 'LangChain', 'FastAPI', 'Docker'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    architectureDiagram: 'Client Request → API Gateway → Security Guardrails → Vector Retrieval (Qdrant) + OCR Vision → RAG Reranker → Fine-Tuned LLM → Cited Audit Response',
    interactiveDemoType: 'rag',
    resultsSummary: 'Successfully deployed across 4,500 active compliance officers with 99.6% fact-verification accuracy and 0 data leakage breaches.',
    clientQuote: {
      text: "GenX Technologies delivered a solution that transformed our compliance workflow. What used to take a team of analysts days now takes seconds with complete confidence in citation accuracy.",
      author: "Marcus Vance",
      role: "Chief Compliance Officer, Nexus Financial"
    }
  },
  {
    id: 'proj-2',
    title: 'High-Speed Manufacturing Defect Vision Inspection',
    subtitle: 'Sub-Millisecond Edge Vision System for Semiconductor Precision Quality Control',
    category: 'Computer Vision',
    clientIndustry: 'Industrial Automation & Semiconductors',
    clientRegion: 'Germany',
    duration: '16 Weeks',
    summary: 'Deployed custom YOLOv9 & TensorRT edge vision models on NVIDIA Jetson Orin to detect microscopic silicon wafer defects at 120 FPS with 99.8% precision.',
    problem: 'Manual optic inspection lines missed 3.5% of micro-fractures in silicon wafers, causing costly down-line assembly failures and $4.2M in annual scrapped inventory.',
    solution: 'GenX developed an end-to-end edge computer vision pipeline using high-speed industrial cameras, custom synthetic data generation with NeRFs, and TensorRT quantized neural networks for real-time robotic sorting.',
    metrics: [
      { label: 'Model Throughput', value: '120 FPS', description: 'Sub-8ms inference latency on edge hardware' },
      { label: 'Defect Detection', value: '99.8%', description: 'Captured micro-fractures down to 5 microns' },
      { label: 'Scrap Reduction', value: '74%', description: '$3.1M inventory scrap cost saved annually' }
    ],
    techStack: ['YOLOv9', 'NVIDIA TensorRT', 'OpenCV', 'PyTorch', 'C++', 'Jetson Orin'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    architectureDiagram: 'Industrial Camera (120 FPS) → Jetson Orin TensorRT Engine → Real-time Defect Segmentation → PLC Robotic Ejector Signal (<5ms)',
    interactiveDemoType: 'vision',
    resultsSummary: 'Achieved zero false-pass defects on 10M+ produced units in the first 6 months of live line operations.',
    clientQuote: {
      text: "The speed and accuracy of GenX's edge vision model exceeded our expectations. It seamlessly integrated with our Siemens PLC hardware.",
      author: "Dr. Elena Rostova",
      role: "VP of Quality Engineering, MicroPrecision Solutions"
    }
  },
  {
    id: 'proj-3',
    title: 'Autonomous Supply Chain Predictive Analytics',
    subtitle: 'Dynamic Demand Forecasting & Route Optimization Engine for E-Commerce Logistics',
    category: 'Predictive Analytics',
    clientIndustry: 'Supply Chain & E-Commerce Logistics',
    clientRegion: 'United States',
    duration: '10 Weeks',
    summary: 'Built a multi-variate time-series forecasting model integrating weather, local trend telemetry, and fuel volatility to optimize inventory allocation across 45 regional hubs.',
    problem: 'Unpredictable seasonal demand spikes led to 14% stockouts in tier-1 logistics nodes while overstocking low-velocity fulfillment centers.',
    solution: 'GenX implemented Transformer-based time-series models (PatchTST) with Bayesian optimization to forecast SKUs 60 days ahead at 94% accuracy, coupled with a genetic route optimizer.',
    metrics: [
      { label: 'Forecast Accuracy', value: '94.2%', description: '31% improvement over traditional ARIMA models' },
      { label: 'Stockout Reduction', value: '68%', description: 'Maximized product availability during peak seasons' },
      { label: 'Logistics Mileage', value: '-18%', description: 'Optimized routing saved 1.2M fleet miles' }
    ],
    techStack: ['PyTorch (PatchTST)', 'Optuna', 'Apache Spark', 'Scikit-learn', 'PostgreSQL', 'Google Cloud AI'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    interactiveDemoType: 'predictive',
    resultsSummary: 'Reduced dead-stock inventory holding costs by $1.9M while boosting order fulfillment speed by 28%.',
    clientQuote: {
      text: "GenX turned our chaotic logistics data into a clear strategic advantage. Our fulfillment team relies on their predictive dashboard daily.",
      author: "Siddharth Mehta",
      role: "Head of Operations, TransGlobal Logistics"
    }
  },
  {
    id: 'proj-4',
    title: 'Agentic Customer Experience Orchestrator',
    subtitle: 'Multi-Agent Support Resolution System Handling 60,000 Daily Customer Queries',
    category: 'Autonomous AI Agents',
    clientIndustry: 'SaaS & Telecommunications',
    clientRegion: 'Singapore & APAC',
    duration: '14 Weeks',
    summary: 'Engineered a stateful multi-agent system with human-in-the-loop guardrails to autonomously handle billing disputes, tier-2 technical troubleshooting, and account upgrades.',
    problem: 'Average customer support wait times exceeded 45 minutes during peak product releases, driving churn and soaring support desk staffing costs.',
    solution: 'GenX created a swarm of specialized AI agents (Billing Agent, Tech Diagnostic Agent, Account Supervisor) using LangGraph and function calling to execute live CRM actions with safe fallback paths.',
    metrics: [
      { label: 'First Contact Resolve', value: '76%', description: 'Queries resolved automatically without human escalation' },
      { label: 'Avg Resolution Time', value: '< 90 Secs', description: 'Down from 45 minutes queue delay' },
      { label: 'CSAT Score Uplift', value: '+38%', description: 'Customer satisfaction surged from 3.2 to 4.7 stars' }
    ],
    techStack: ['Gemini 3.6 Flash', 'LangGraph', 'Redis', 'Node.js', 'Salesforce API', 'Twilio'],
    featured: false,
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
    interactiveDemoType: 'agent',
    resultsSummary: 'Handled over 1.8M customer conversations in the first quarter with 99.1% execution reliability.',
    clientQuote: {
      text: "GenX Technologies built a true AI workforce for us. It doesn't just answer questions—it takes authorized actions safely and seamlessly.",
      author: "Chloe Tan",
      role: "VP of Customer Success, TelecomOne"
    }
  },
  {
    id: 'proj-5',
    title: 'Smart Health Diagnostics & Patient Triage AI',
    subtitle: 'HIPAA-Compliant Radiological Image Classification & Emergency Triage Assistant',
    category: 'Computer Vision',
    clientIndustry: 'Healthcare & Medical Devices',
    clientRegion: 'United Kingdom',
    duration: '18 Weeks',
    summary: 'Developed a DICOM-native deep learning visual diagnostic model that prioritizes urgent CT scans and chest X-rays for radiologists, saving critical minutes in emergency rooms.',
    problem: 'Emergency department radiologists faced heavy backlog delays, waiting up to 3 hours to review emergency scans for high-risk pulmonary embolisms and hemorrhages.',
    solution: 'GenX built an edge-deployed Vision Transformer (ViT) ensemble trained on 400,000 annotated DICOM scans with explainable AI heatmap outputs (Grad-CAM) to flag immediate emergency cases.',
    metrics: [
      { label: 'Triage Time Saved', value: '88% Faster', description: 'Emergency scan flagging reduced from 180 to 12 mins' },
      { label: 'Diagnostic Sensitivity', value: '98.9%', description: 'Zero missed critical emergency pathology cases' },
      { label: 'Radiologist Capacity', value: '2.2x', description: 'Scan review rate doubled with explainable heatmaps' }
    ],
    techStack: ['PyTorch', 'MONAI', 'Vision Transformers', 'FastAPI', 'AWS HealthImaging', 'DICOM Web'],
    featured: false,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    resultsSummary: 'Deployed across 12 regional hospital networks with full HIPAA/GDPR health data compliance certification.',
    clientQuote: {
      text: "The explainability of GenX's AI visual heatmaps gave our medical staff instant trust. It directly helps save lives in emergency care.",
      author: "Dr. Arthur Pendelton",
      role: "Chief Medical Officer, NHS Healthcare Trust"
    }
  },
  {
    id: 'proj-6',
    title: 'Edge AI Smart Grid & Energy Load Balancer',
    subtitle: 'Real-Time Microgrid Anomaly Detection & Solar Energy Distribution',
    category: 'Edge AI & IoT',
    clientIndustry: 'Clean Energy & Utilities',
    clientRegion: 'Australia',
    duration: '12 Weeks',
    summary: 'Engineered lightweight embedded ML models for solar microgrid nodes to predict load surges and prevent blackouts autonomously without internet connectivity.',
    problem: 'Intermittent renewable solar generation caused grid voltage fluctuations and costly transformer overloads during peak solar hours.',
    solution: 'GenX deployed quantized TinyML models directly onto ARM Cortex microcontrollers in smart transformers to adjust load distribution in real-time.',
    metrics: [
      { label: 'Grid Overload Downtime', value: '-92%', description: 'Eliminated thermal transformer trips' },
      { label: 'Energy Utilization', value: '+24%', description: 'Captured surplus solar output back to battery storage' },
      { label: 'On-Device Latency', value: '1.5 ms', description: 'Real-time decision making on embedded ARM chips' }
    ],
    techStack: ['TensorFlow Lite Micro', 'C++', 'ARM Cortex-M55', 'MQTT', 'InfluxDB', 'Grafana'],
    featured: false,
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80',
    resultsSummary: 'Protected 85,000 residential solar setups from grid frequency collapse during extreme summer heatwaves.',
    clientQuote: {
      text: "GenX's TinyML expertise allowed us to put intelligence right at the transformer level without requiring expensive cloud infrastructure.",
      author: "Liam O'Connor",
      role: "Grid Operations Director, AusRenewables"
    }
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    slug: 'building-production-grade-rag-pipelines',
    title: 'Building Production-Grade RAG Pipelines: Lessons from 15 Enterprise Deployments',
    excerpt: 'Moving from a naive vector search to an enterprise-grade RAG pipeline requires hybrid search, contextual chunking, re-ranking, and strict evaluation metrics. Here is our field guide.',
    content: `
### Introduction

Retrieval Augmented Generation (RAG) has emerged as the standard pattern for bringing proprietary corporate knowledge into Large Language Models (LLMs). However, transitioning a simple prototype using basic cosine similarity into a production-grade system that answers millions of user queries reliably is a massive engineering leap.

Over the past two years, **GenX Technologies** has architected and deployed over 15 production RAG systems across banking, healthcare, and industrial enterprise clients. In this article, we share the core architectural pillars necessary for deterministic, high-accuracy RAG pipelines.

---

### Pillar 1: Advanced Hybrid Search over Naive Vector Matching

Dense vector embeddings excel at semantic similarity, but struggle with precise keyword matching (e.g., part numbers, specific legal clause codes, or acronyms like \`SEC-10K-2025\`).

To solve this, a production pipeline must pair **Dense Vector Search** (e.g., Gemini / OpenAI embeddings stored in Qdrant or PGVector) with **Sparse Lexical Search** (e.g., BM25 / Elasticsearch).

\`\`\`
Hybrid Query Score = (α * Dense_Vector_Similarity) + ((1 - α) * BM25_Lexical_Score)
\`\`\`

By dynamically weighting \`α\` based on query intent detection, search retrieval accuracy increases by **25% to 35%**.

---

### Pillar 2: Semantic Chunking & Parent-Child Retrieval

Fixed token window chunking (e.g., 512 tokens with 50-token overlap) frequently breaks critical context across sentence boundaries or tables.

Instead, we utilize **Semantic Chunking**:
1. Parse document structure (Headings, Markdown sections, Table structures).
2. Store small child chunks (128 tokens) for fine-grained embedding matching.
3. Upon match, retrieve the larger **Parent Document / Section Context** (1,024 tokens) to pass to the LLM prompt.

This ensures the LLM receives full contextual nuances without losing the exact sentence fragment that matched the user's intent.

---

### Pillar 3: Multi-Stage Re-Ranking

Vector databases return the top $K$ nearest neighbors (e.g., $K=20$). Passing all 20 chunks directly to the LLM increases token costs and suffers from the "Lost in the Middle" phenomenon.

Inserting a dedicated **Cross-Encoder Re-ranker** (e.g., BGE-Reranker-Large or Cohere Rerank) filters the top 20 candidates down to the top 4 most relevant chunks before constructing the prompt.

---

### Pillar 4: Strict Provenance & Citation Metadata

Enterprise users will not trust AI responses without clear proof. Every chunk indexed into GenX RAG systems retains rich metadata:
- Document Name & Version
- Page Number & Paragraph Index
- Access Control Control Lists (ACLs)

Our custom system instructions mandate that the LLM cite exact reference tags (e.g., \`[Doc: Q3_Report.pdf, Pg. 14]\`) for every claim made.

---

### Conclusion

A successful enterprise RAG deployment is not about picking the largest LLM; it is about building a meticulous retrieval architecture that delivers the exact ground-truth facts to the model.

*Looking to deploy a enterprise RAG system with zero hallucination risk? Connect with GenX Technologies for an AI Architecture Review.*
`,
    category: 'Generative AI',
    author: {
      name: 'Dr. Evelyn Reed',
      role: 'Chief AI Architect, GenX Technologies',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
    },
    date: 'August 2, 2026',
    readTime: '6 min read',
    likes: 142,
    featured: true,
    tags: ['RAG', 'Generative AI', 'Vector DB', 'LLM Ops', 'Enterprise AI'],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    keyTakeaways: [
      'Hybrid search (Dense + BM25) outperforms single vector search by 30% in domain tasks.',
      'Parent-Child retrieval prevents loss of context across document boundaries.',
      'Cross-encoder re-ranking significantly reduces token costs and hallucination risk.'
    ]
  },
  {
    id: 'blog-2',
    slug: 'fine-tuning-vs-prompt-engineering',
    title: 'Fine-Tuning vs. Prompt Engineering: Choosing the Right Strategy for Enterprise LLMs',
    excerpt: 'When should you fine-tune Llama 3 or Gemini vs relying on RAG and system prompts? We analyze cost, latency, data privacy, and accuracy tradeoffs.',
    content: `
### The Dilemma Facing Enterprise AI Teams

As companies scale their AI capabilities, engineering leadership inevitably faces a pivotal strategic choice: Should we rely on off-the-shelf foundation models with advanced prompt engineering and RAG, or should we invest in fine-tuning proprietary open-weights or hosted models?

Making the wrong choice can lead to hundreds of thousands of dollars in unnecessary compute expenses or months of lost developer time.

---

### Comparison Matrix

| Decision Criteria | Advanced Prompting + RAG | Model Fine-Tuning (LoRA / QLoRA) |
| :--- | :--- | :--- |
| **Setup Capital** | Low ($1k - $5k) | Medium-High ($20k - $80k) |
| **Latency / Response Time** | Higher (Requires multiple retrieval steps) | Lower (Knowledge encoded in weights) |
| **Style & Output Consistency** | 85-90% deterministic | 98%+ strict schema adherence |
| **Knowledge Updating** | Real-time (Update vector database) | Static (Requires re-training runs) |
| **Domain Jargon Mastery** | Moderate | Superior |

---

### When to Choose Prompt Engineering & RAG
1. **Dynamic Information**: Your knowledge base changes daily or weekly (e.g., news, stock prices, changing inventories).
2. **Strict Provenance**: You require absolute source citations for every sentence output.
3. **Rapid MVP**: You need to validate a product concept within 2 to 4 weeks.

---

### When Fine-Tuning is Essential
1. **Custom Syntax & Schema**: You need the model to output esoteric code formats (e.g., domain-specific SQL dialects, proprietary industrial JSON schemas).
2. **Latency Critical Applications**: Eliminating the overhead of large system prompts and multiple vector retrieval calls saves 300-800ms of critical inference time.
3. **Domain Tone & Persona**: You require a specific corporate brand voice or complex medical/legal reasoning style.

---

### The GenX Hybrid Approach
In practice, the most potent enterprise architectures combine both approaches:
- **Fine-Tune** a smaller 8B parameter model for custom output formatting and fast domain reasoning.
- **Augment with RAG** to inject live, up-to-the-minute enterprise facts into the fine-tuned model prompt.

This yields a lightweight, lightning-fast model with zero staleness risk!
`,
    category: 'AI Strategy',
    author: {
      name: 'Vikram Thorne',
      role: 'Principal ML Engineer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
    },
    date: 'July 28, 2026',
    readTime: '5 min read',
    likes: 98,
    featured: false,
    tags: ['Fine-Tuning', 'LLM', 'Prompt Engineering', 'AI Strategy', 'MLOps'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    keyTakeaways: [
      'Prompting + RAG is ideal for dynamic knowledge that updates frequently.',
      'Fine-tuning is superior for custom syntax, strict latency targets, and domain persona.',
      'Combining LoRA fine-tuning with RAG yields the highest quality enterprise results.'
    ]
  },
  {
    id: 'blog-3',
    slug: 'agentic-ai-workflows-in-2026',
    title: 'Agentic AI Workflows: Moving Beyond Basic Chatbots in 2026',
    excerpt: 'How multi-agent systems, tool execution, and reflection loops are replacing single-prompt chat windows with autonomous digital workforces.',
    content: `
### From Chat Boxes to Autonomous Multi-Agent Systems

The era of simple "Ask a question, get an answer" chatbots is rapidly giving way to **Agentic AI Workflows**. Instead of passively responding to text prompts, autonomous agents break complex user goals into sub-tasks, execute tool calls (database queries, API calls, code execution), evaluate their own outputs, and iteratively refine results until the goal is achieved.

---

### Key Components of an Agentic Architecture

1. **Planner Agent**: Breaks high-level objectives into sequential step-by-step execution plans.
2. **Tool Execution Engine**: Connects agents safely to external tools (SQL databases, REST APIs, Web Browsers, Cloud Functions).
3. **Critic / Evaluator Agent**: Inspects the intermediate outputs against strict guardrails before proceeding.
4. **Memory Layer**: Short-term conversational context coupled with long-term episodic memory (Redis + Vector DB).

---

### Real-World Example: Automated Insurance Claim Processing

In a traditional setup, an customer service rep uses a chatbot to look up policy rules. In a **GenX Agentic Workflow**:

- **Agent 1 (Extractor)** parses uploaded claim receipts and medical notes using Vision LLMs.
- **Agent 2 (Validation)** queries the insurance database via SQL to verify policy coverage limits.
- **Agent 3 (Fraud Inspector)** runs anomaly detection models against historical claim patterns.
- **Agent 4 (Supervisor)** drafts approval or flagged review, updating the claims database automatically.

Human operators only intervene when Agent 3 flags a confidence score below 90%. This reduces claim processing cycles from 5 days to 4 minutes!

---

### Engineering Guardrails
To prevent infinite execution loops or runaway API costs:
- Set strict \`max_iterations\` limits (e.g., maximum 5 tool calls per workflow).
- Implement human-in-the-loop confirmation for high-consequence state changes (e.g., wire transfers or sending external customer emails).
`,
    category: 'ML Engineering',
    author: {
      name: 'Sarah Chen',
      role: 'Director of AI Solutions',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80'
    },
    date: 'July 15, 2026',
    readTime: '7 min read',
    likes: 215,
    featured: true,
    tags: ['AI Agents', 'LangGraph', 'Automation', 'Autonomous Workflows', 'Enterprise AI'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    keyTakeaways: [
      'Agentic workflows automate multi-step business actions rather than just generating text answers.',
      'Reflection loops and critic agents boost task completion accuracy dramatically.',
      'Human-in-the-loop guardrails are crucial for high-consequence enterprise actions.'
    ]
  },
  {
    id: 'blog-4',
    slug: 'real-time-edge-computer-vision-manufacturing',
    title: 'Real-Time Edge Computer Vision in Manufacturing: Reducing Downtime by 40%',
    excerpt: 'Deploying sub-10ms neural networks directly onto factory floors with TensorRT and ONNX Runtime. A case study in industrial edge intelligence.',
    content: `
### The Edge Imperative in Modern Industry

In high-speed manufacturing environments—where conveyor belts move at 15 meters per second—sending video streams to cloud servers for AI processing is impossible due to network latency, bandwidth constraints, and reliability risks.

**Edge AI** brings the inference engine directly onto local hardware next to the assembly line.

---

### Key Architectural Requirements for Factory Floor AI

1. **Sub-10ms Latency**: Inference must complete before the physical product moves past the pneumatic rejector pin.
2. **Zero Internet Dependency**: The line must continue running even if the plant loses external internet connectivity.
3. **Extreme Reliability under Lighting Shifts**: Robustness against ambient factory glare, dust, and vibration.

---

### Optimizing Neural Networks for NVIDIA Jetson Hardware

At GenX Technologies, our vision team uses a 4-step optimization pipeline for industrial vision models:
1. **Model Pruning**: Remove redundant weight channels from YOLOv9 or Vision Transformers.
2. **Quantization (INT8)**: Convert 32-bit floating point weights to 8-bit integers using TensorRT calibration datasets.
3. **Shared Memory Zero-Copy**: Stream camera frames directly into GPU memory, bypassing CPU copying bottlenecks.
4. **Hardware PLC Sync**: Trigger digital I/O pins via microsecond hardware interrupts.

---

### Results
In our recent deployment for a European automotive precision manufacturer, this approach caught 99.8% of micro-welding faults, saving $3.1M in annual scrap material and reducing unexpected line downtime by **41%**.
`,
    category: 'Computer Vision',
    author: {
      name: 'Dr. Evelyn Reed',
      role: 'Chief AI Architect',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
    },
    date: 'June 30, 2026',
    readTime: '6 min read',
    likes: 110,
    featured: false,
    tags: ['Computer Vision', 'Edge AI', 'TensorRT', 'Manufacturing', 'IoT'],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    keyTakeaways: [
      'Edge inference eliminates cloud latency and bandwidth bottlenecks in high-speed manufacturing.',
      'INT8 quantization with TensorRT achieves 4x latency reduction with zero accuracy degradation.',
      'Hardware interrupt integration ensures sub-millisecond physical actuation.'
    ]
  }
];

export const COMPANY_STATS = [
  { value: '35+', label: 'Enterprise AI Deployments', sub: 'Across FinTech, Health, Mfg & Retail' },
  { value: '$45M+', label: 'Verified Client ROI Generated', sub: 'Calculated across operational cost savings' },
  { value: '99.4%', label: 'Average Model Accuracy', sub: 'In production-level benchmark tests' },
  { value: '24/7', label: 'Enterprise SLA & Guardrails', sub: 'Real-time telemetry & latency monitoring' }
];

export const SERVICES_LIST = [
  {
    id: 'generative-ai',
    title: 'Custom Generative AI & Fine-Tuned LLMs',
    icon: 'Sparkles',
    shortDesc: 'Fine-tuned LLMs, Enterprise RAG systems, and secure document intelligence pipelines tailored to your private data.',
    features: [
      'Private Cloud / On-Premise LLM Deployment',
      'Hallucination-Free Vector RAG (Qdrant / PGVector)',
      'Domain-Specific Model Fine-Tuning (LoRA / QLoRA)',
      'Enterprise Data Privacy & Security Compliance'
    ]
  },
  {
    id: 'computer-vision',
    title: 'Edge Computer Vision & Quality Automation',
    icon: 'Eye',
    shortDesc: 'Sub-millisecond visual inspection, object tracking, and automated defect detection for smart manufacturing and robotics.',
    features: [
      'High-FPS Manufacturing Defect Detection',
      'TensorRT / ONNX Edge Hardware Quantization',
      'Medical & DICOM Imaging Analytics',
      'Real-Time Video Stream Anomaly Detection'
    ]
  },
  {
    id: 'agentic-ai',
    title: 'Autonomous AI Agents & Workflow Orchestration',
    icon: 'Bot',
    shortDesc: 'Multi-agent systems that autonomously execute multi-step business workflows, CRM actions, and customer support resolutions.',
    features: [
      'Stateful Multi-Agent Swarms (LangGraph)',
      'Automated API & Function Execution',
      'Human-in-the-Loop Approval Systems',
      '24/7 Scalable Conversational AI'
    ]
  },
  {
    id: 'predictive-analytics',
    title: 'Predictive Analytics & Forecasting Models',
    icon: 'TrendingUp',
    shortDesc: 'Machine learning engines for demand forecasting, predictive maintenance, churn prevention, and financial risk modeling.',
    features: [
      'Multi-Variate Time-Series Forecasting',
      'Predictive Equipment Maintenance',
      'Customer Lifetime Value & Churn Prediction',
      'Algorithmic Risk & Fraud Scoring'
    ]
  },
  {
    id: 'ai-audit',
    title: 'Enterprise AI Governance & Strategic Audit',
    icon: 'ShieldCheck',
    shortDesc: 'Comprehensive AI readiness evaluation, security vulnerability testing, bias audits, and technical ROI roadmap creation.',
    features: [
      'AI Security & Model Ingestion Audit',
      'SOC2 / HIPAA Compliance Guardrails',
      'Technology Stack & ROI Feasibility Study',
      'Executive & Engineering Team AI Enablement'
    ]
  }
];

export const TESTIMONIALS = [
  {
    quote: "GenX Technologies delivered our enterprise RAG compliance engine 2 weeks ahead of schedule. Their understanding of financial security constraints was unmatched.",
    author: "Marcus Vance",
    role: "Chief Compliance Officer",
    company: "Nexus Financial Group",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "The sub-10ms vision defect detection model created by GenX reduced our semiconductor line scrap costs by $3.1M in the first year alone.",
    author: "Dr. Elena Rostova",
    role: "VP of Quality Engineering",
    company: "MicroPrecision Solutions",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "GenX turned our complex supply chain logistics data into an accurate predictive dashboard. Their team feels like a true extension of our engineering division.",
    author: "Siddharth Mehta",
    role: "Head of Operations",
    company: "TransGlobal Logistics",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
  }
];

export const FAQS = [
  {
    q: "How does GenX Technologies ensure data security and privacy during AI consulting?",
    a: "We implement zero-trust data architecture. All AI models and RAG pipelines can be deployed directly within your private AWS, GCP, Azure, or on-premise infrastructure. Your proprietary data is never used to train public foundation models, and all transmissions strictly adhere to SOC2 Type II, HIPAA, and GDPR standards."
  },
  {
    q: "How fast can GenX deliver a working AI proof-of-concept (POC)?",
    a: "Our typical MVP/POC lifecycle ranges from 2 to 4 weeks. During this phase, we build a functional prototype tested against your benchmark data, enabling leadership to validate ROI before committing to full production deployment."
  },
  {
    q: "Can GenX integrate AI models with our legacy enterprise software and custom APIs?",
    a: "Yes. Our team specializes in full-stack MLOps and systems integration. We build custom REST/gRPC API connectors, Webhooks, and database bridges for Salesforce, SAP, Oracle, custom SQL databases, and internal ERP platforms."
  },
  {
    q: "What is the typical engagement model for consulting opportunities with GenX?",
    a: "We offer three flexible options: (1) End-to-End Turnkey AI Project Execution, (2) Dedicated AI/ML Engineering Staff Augmentation, and (3) AI Strategy & Architectural Advisory retainer."
  },
  {
    q: "How can I connect directly with a GenX AI Consultant via WhatsApp?",
    a: "You can click any 'WhatsApp Quick Connect' button on our site or scan our QR badge. It opens a direct chat with our Principal AI Architects pre-filled with your topic of interest, with an average response time of under 15 minutes."
  }
];

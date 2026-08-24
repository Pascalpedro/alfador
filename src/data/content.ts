import type { LucideIcon } from "lucide-react";
import { Cloud, Cpu, Network, ShieldCheck, Zap, Compass, Monitor } from "lucide-react";

export type OfferingGroup = {
  title: string;
  description?: string;
  items: string[];
};

export type Solution = {
  slug: string;
  anchor: string;
  icon: LucideIcon;
  title: string;
  summary: string;
  capabilities: string[];
  tagline?: string;
  description?: string;
  offeringsLabel?: string;
  offerings?: OfferingGroup[];
};

export const solutions: Solution[] = [
  {
    slug: "network-infrastructure-solutions",
    anchor: "network",
    icon: Network,
    title: "Network Infrastructure Solutions",
    summary:
      "We connect your offices, people, and systems into one seamless, reliable technology environment.",
    capabilities: [
      "Structured cabling & data centre build-out",
      "SD-WAN and multi-site connectivity",
      "Network segmentation and zero-trust access",
      "Monitoring, capacity planning and NOC handover",
    ],
    tagline: "Connected Networks. Unified Communications.",
    description:
      "We design, deploy, and manage high-performance network environments that keep your people, devices, and locations connected without compromise.",
    offerings: [
      {
        title: "Data & Connectivity",
        description:
          "Deploying robust local Area Networks (LAN), software-defined wide area networking (SD-WAN), and high-capacity wireless access points.",
        items: [
          "Office networking & multi-branch connectivity",
          "Business Wi-Fi solutions & VPN deployment",
          "Structured cabling & infrastructure upgrades",
          "Systems integration",
        ],
      },
      {
        title: "Unified Business Voice",
        description:
          "Structuring unified communication networks using IP-PBX controllers and VOIP systems for internal business environments.",
        items: [
          "Cloud & Hosted PBX / PABX systems",
          "Corporate User Groups (CUG) & SIP Trunks",
          "VoIP services & advanced call features",
          "Office intercom systems",
        ],
      },
    ],
  },
  {
    slug: "cloud-infrastructure",
    anchor: "cloud",
    icon: Cloud,
    title: "Cloud Infrastructure",
    summary:
      "We provide flexible cloud environments to run, protect, and scale your business operations with confidence.",
    capabilities: [
      "AWS / Azure / GCP landing zones",
      "Terraform, Kubernetes and GitOps",
      "CI/CD pipelines and release automation",
      "Cost optimisation and observability",
    ],
    tagline: "Scalable Architectures. Modern Infrastructure. Secure Transitions.",
    description:
      "We build reliable technology foundations and scalable cloud architectures to help your business transition away from expensive physical servers, reduce upfront hardware costs, and enable seamless remote work.",
    offerings: [
      {
        title: "Cloud & Hosting Services",
        description:
          "Migrating legacy workloads and deploying scalable virtual environments to eliminate expensive physical servers and enable seamless remote operations.",
        items: [
          "Cloud migration, strategy, and architecture design",
          "Virtual server deployment and orchestration",
          "Managed cloud hosting solutions",
          "Hybrid and multi-cloud environment optimization",
        ],
      },
      {
        title: "Infrastructure Modernization",
        description:
          "Overhauling outdated physical frameworks and integrating comprehensive data redundancy protocols to protect business operational continuity.",
        items: [
          "Infrastructure modernization and legacy hardware upgrades",
          "Secure automated backup frameworks",
          "Disaster recovery integration and failover testing",
          "Scalable storage area network (SAN) deployment",
        ],
      },
    ],
  },
  {
    slug: "business-security-compliance",
    anchor: "security",
    icon: ShieldCheck,
    title: "Business Security & Compliance",
    summary:
      "We protect your assets from cyber threats, data loss, unauthorized access and physical security breaches.",
    capabilities: [
      "Security architecture and zero-trust identity",
      "Vulnerability management and pen testing",
      "SIEM, detection engineering and response",
      "ISO 27001 / NDPR / GDPR readiness",
    ],
    tagline: "Multilayered Defense. Zero-Trust Access. Total Enterprise Protection.",
    description:
      "We protect your assets from cyber threats, data loss, unauthorized access and physical security breaches with enterprise-grade security tailored to your operations.",
    offerings: [
      {
        title: "Cybersecurity & Compliance",
        description:
          "Protecting endpoints, local servers, and cloud resources via continuous threat detection, robust firewall management, and strict industry compliance governance.",
        items: [
          "Data protection advisory & regulatory compliance support (NDPA/NDPB)",
          "System security assessments & vulnerability management",
          "Endpoint, email, firewall, and UTM protection",
          "DDoS mitigation & advanced identity/access management (IAM)",
          "Secure backup architectures & automated disaster recovery",
          "24/7 continuous security monitoring & threat response",
        ],
      },
      {
        title: "Intelligent Physical Surveillance",
        description:
          "Securing physical business perimeters and smart facilities with high-definition tracking hardware, active access controls, and automated alert telemetry.",
        items: [
          "Smart commercial & residential security integration",
          "High-definition smart security & 4G surveillance cameras",
          "Intelligent real-time security alert & alarm systems",
          "Connected smart doorbell cameras & intercom integrations",
          "Biometric, card, and proximity Access Control systems",
        ],
      },
    ],
  },
  {
    slug: "managed-it-services",
    anchor: "managed-it",
    icon: Monitor,
    title: "Managed IT Services",
    summary:
      "We provide end-to-end IT support and proactive management so you can focus entirely on growing your business.",
    capabilities: [
      "24/7 monitoring and service desk",
      "Patching, backup and disaster recovery",
      "Endpoint and server management",
      "Vendor management and IT roadmapping",
    ],
    tagline: "Proactive Support. Seamless Monitoring. Complete Technical Peace of Mind.",
    description:
      "We become your technology department, keeping your systems running while you focus on your business.",
    offerings: [
      {
        title: "Managed IT Operations",
        description:
          "Serving as your dedicated, fully outsourced technology department to handle day-to-day administrative tasks, user support, and third-party vendor coordination.",
        items: [
          "Full-scale IT outsourcing & on-site technical staffing",
          "Helpdesk technical support & multi-tiered troubleshooting",
          "Comprehensive endpoint device management",
          "Strategic IT vendor management & software asset tracking",
        ],
      },
      {
        title: "Systems & Network Monitoring",
        description:
          "Deploying real-time monitoring tools to actively track infrastructure performance, push security updates, and resolve bottlenecks before they disrupt operations.",
        items: [
          "Remote system monitoring & predictive analytics",
          "Automated patch management & software updates",
          "Proactive network performance monitoring & traffic optimization",
          "Server health tracking & uptime assurance",
        ],
      },
    ],
  },
  {
    slug: "ai-business-automation",
    anchor: "automation",
    icon: Cpu,
    title: "AI & Business Automation",
    summary:
      "We minimize repetitive work, manual processes, and cut operational costs through custom software and AI workflows.",
    capabilities: [
      "Process discovery and workflow design",
      "System integration and API orchestration",
      "Custom apps and AI workflow engines",
      "Approval, compliance and audit trails",
    ],
    tagline: "Intelligent Workflows. Custom Applications. Eliminating Manual Inefficiencies.",
    description:
      "We minimize repetitive work, manual processes, and cut operational costs through custom software and AI workflows that scale with your business.",
    offerings: [
      {
        title: "Custom Software & Applications",
        description:
          "Engineering bespoke software platforms and dedicated digital entry points to unify your internal business systems and improve customer engagement.",
        items: [
          "Custom web applications & internal management systems",
          "Dedicated customer and partner portal engineering",
          "Tailored business application development & API integrations",
          "Legacy software modernization",
        ],
      },
      {
        title: "Workflow & Intelligent Automation",
        description:
          "Designing autonomous end-to-end workflow engines and AI models that handle repetitive tasks, reduce human error, and cut operational costs.",
        items: [
          "End-to-end business workflow automation",
          "AI-powered automation solutions & agentic processing",
          "Business process digitization to eliminate manual data entry",
          "System-to-system data synchronization workflows",
        ],
      },
    ],
  },
  {
    slug: "power-energy-infrastructure",
    anchor: "power",
    icon: Zap,
    title: "Power & Energy Infrastructure",
    summary:
      "We eliminate operational downtime caused by power instability by deploying resilient renewable energy systems.",
    capabilities: [
      "Solar and hybrid power design",
      "UPS, inverter and battery systems",
      "Site survey and load profiling",
      "Remote monitoring and maintenance",
    ],
    tagline: "Resilient Energy. Uninterrupted Uptime. Sustainable Clean Power.",
    description:
      "We eliminate operational downtime caused by power instability by deploying resilient renewable energy systems and intelligent backup infrastructure.",
    offerings: [
      {
        title: "Sustainable Power Deployments",
        description:
          "Designing and installing autonomous renewable energy architectures and robust hybrid backup systems to eliminate grid-instability downtime.",
        items: [
          "Independent solar array & hybrid power network engineering",
          "High-capacity inverter and backup generator integration",
          "Solar-hybrid grid optimization and automated transfer switching",
          "Smart power infrastructure & real-time energy consumption monitoring",
        ],
      },
      {
        title: "Infrastructure Maintenance & Technical Support",
        description:
          "Providing technical upkeep for critical facility hardware, local high-performance processing hardware, and server enclosures to prevent unexpected failures.",
        items: [
          "Proactive energy hardware servicing & component lifecycle extensions",
          "Specialized high-performance server & GPU hardware servicing",
          "Structured physical network hardware cabinet & enclosure setup",
          "Facility power distribution audits & safety testing",
        ],
      },
    ],
  },
  {
    slug: "strategic-technology-advisory",
    anchor: "advisory",
    icon: Compass,
    title: "Strategic Technology Advisory",
    summary:
      "We align your technology roadmap directly with your core business objectives to drive long-term growth.",
    capabilities: [
      "Technology roadmap and investment planning",
      "Cost optimisation and vendor selection",
      "Digital transformation programme design",
      "Executive readouts and board reporting",
    ],
    tagline: "Aligned Roadmaps. Governed Risk. Maximized Technology ROI.",
    description:
      "We align your technology roadmap directly with your core business objectives to drive long-term growth and maximize return on every technology investment.",
    offerings: [
      {
        title: "Strategic Planning & Roadmapping",
        description:
          "Architecting long-term technology strategies that transform technical investments into direct drivers of commercial efficiency and digital expansion.",
        items: [
          "Long-term technology strategy design & tactical execution",
          "Legacy-to-cloud migration roadmap development",
          "Comprehensive digital transformation & modernization frameworks",
          "Business alignment workshops & technical capacity planning",
        ],
      },
      {
        title: "Governance, Compliance & Excellence",
        description:
          "Auditing existing systems to locate operational bottlenecks while supervising procurement negotiations and project delivery to eliminate budget waste.",
        items: [
          "IT health checks, architectural audits, & security gap assessments",
          "IT governance frameworks, risk management controls, & tech policies",
          "Technology procurement advisory & high-leverage vendor negotiation",
          "Project Management Office (PMO) oversight & complex deployment delivery",
        ],
      },
    ],
  },
];

export type Project = {
  slug: string;
  client: string;
  sector: string;
  title: string;
  challenge: string;
  outcome: string;
  metrics: { label: string; value: string }[];
  tags: string[];
};

export const projects: Project[] = [
  {
    slug: "multi-site-network-modernisation",
    client: "Pan-African bank",
    sector: "Financial services",
    title: "Multi-site network modernisation across 42 branches",
    challenge:
      "Ageing MPLS links and flat networks caused branch outages and made compliance segmentation impossible.",
    outcome:
      "Delivered an SD-WAN overlay with segmented VLANs, redundant links and centralised monitoring, rolled out branch by branch with zero unplanned downtime.",
    metrics: [
      { label: "Branch uptime", value: "99.98%" },
      { label: "WAN cost", value: "-34%" },
      { label: "Rollout", value: "14 weeks" },
    ],
    tags: ["Network", "Security"],
  },
  {
    slug: "cloud-landing-zone",
    client: "Insurance group",
    sector: "Insurance",
    title: "Regulated cloud landing zone and delivery pipeline",
    challenge:
      "Teams shipped manually into unmanaged accounts, with no consistent guardrails or audit trail.",
    outcome:
      "Built a Terraform landing zone with policy guardrails, environment isolation and GitOps pipelines that took releases from monthly to daily.",
    metrics: [
      { label: "Deploy frequency", value: "22x" },
      { label: "Change failure", value: "-61%" },
      { label: "Provision time", value: "2 days → 20 min" },
    ],
    tags: ["Cloud", "DevOps"],
  },
  {
    slug: "ai-claims-assistant",
    client: "Health provider network",
    sector: "Healthcare",
    title: "AI assistant for claims and policy review",
    challenge:
      "Claims officers spent hours cross-referencing policy documents, creating a persistent backlog.",
    outcome:
      "Shipped a retrieval-grounded assistant with citation-backed answers and human review gates, integrated directly into the claims workspace.",
    metrics: [
      { label: "Review time", value: "-58%" },
      { label: "Answer accuracy", value: "94%" },
      { label: "Backlog cleared", value: "11 weeks" },
    ],
    tags: ["AI", "Automation"],
  },
  {
    slug: "soc-uplift",
    client: "Logistics operator",
    sector: "Logistics",
    title: "Security operations uplift and 24/7 detection",
    challenge:
      "Alerts were scattered across tools with no ownership, and incidents were discovered by end users.",
    outcome:
      "Consolidated telemetry into a single SIEM, wrote detection content mapped to MITRE ATT&CK and stood up an on-call response runbook.",
    metrics: [
      { label: "Mean time to detect", value: "4h → 9 min" },
      { label: "Alert noise", value: "-72%" },
      { label: "Coverage", value: "24/7" },
    ],
    tags: ["Security"],
  },
  {
    slug: "back-office-automation",
    client: "Manufacturing group",
    sector: "Manufacturing",
    title: "Back-office automation across procurement and finance",
    challenge:
      "Purchase approvals moved by email and spreadsheet, with no visibility into where a request was stuck.",
    outcome:
      "Automated the procure-to-pay flow with integrated approvals, ERP sync and a live audit trail for every request.",
    metrics: [
      { label: "Approval cycle", value: "-67%" },
      { label: "Manual entries", value: "-90%" },
      { label: "Audit findings", value: "0" },
    ],
    tags: ["Automation"],
  },
  {
    slug: "data-platform-rebuild",
    client: "Retail chain",
    sector: "Retail",
    title: "Unified data platform for 180 stores",
    challenge:
      "Every region reported different numbers because each pulled from its own extract.",
    outcome:
      "Rebuilt ingestion into a governed lakehouse with tested models and one certified metrics layer for the whole group.",
    metrics: [
      { label: "Reporting lag", value: "1 day → 15 min" },
      { label: "Data sources", value: "27 unified" },
      { label: "Model tests", value: "400+" },
    ],
    tags: ["Data", "Cloud"],
  },
];

export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
};

export const insights: Insight[] = [
  {
    slug: "zero-trust-without-the-rip-and-replace",
    title: "Zero trust without the rip-and-replace",
    excerpt:
      "You don't need a greenfield network to adopt zero trust. Here's a sequencing model that starts with identity and works outward.",
    category: "Cybersecurity",
    date: "2026-07-09",
    readTime: "7 min read",
  },
  {
    slug: "landing-zones-that-survive-audit",
    title: "Landing zones that survive an audit",
    excerpt:
      "Guardrails, account boundaries and evidence trails: what regulators actually ask for when they review your cloud estate.",
    category: "Cloud",
    date: "2026-06-24",
    readTime: "9 min read",
  },
  {
    slug: "rag-is-an-infrastructure-problem",
    title: "RAG is an infrastructure problem, not a prompt problem",
    excerpt:
      "Most enterprise AI assistants fail on retrieval quality and data freshness long before the model is the bottleneck.",
    category: "Artificial Intelligence",
    date: "2026-06-02",
    readTime: "6 min read",
  },
  {
    slug: "automation-that-people-actually-use",
    title: "Automation that people actually use",
    excerpt:
      "Process automation succeeds or fails on adoption. Design for the exception path, not the happy path.",
    category: "Automation",
    date: "2026-05-15",
    readTime: "5 min read",
  },
  {
    slug: "observability-budget",
    title: "Setting an observability budget before the incident",
    excerpt:
      "Signals cost money. A simple tiering model to keep telemetry spend proportional to service criticality.",
    category: "DevOps",
    date: "2026-04-28",
    readTime: "8 min read",
  },
  {
    slug: "network-segmentation-playbook",
    title: "A pragmatic network segmentation playbook",
    excerpt:
      "How to phase segmentation across a live estate without freezing the business for a maintenance window.",
    category: "Network",
    date: "2026-04-06",
    readTime: "10 min read",
  },
];

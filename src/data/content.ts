import type { LucideIcon } from "lucide-react";
import { Cloud, Cpu, Network, ShieldCheck, Workflow, Zap, Compass, Monitor } from "lucide-react";

export type OfferingGroup = {
  title: string;
  description?: string;
  items: string[];
};

export type Solution = {
  slug: string;
  icon: LucideIcon;
  title: string;
  summary: string;
  ctaLabel: string;
  ctaHash: string;
  capabilities: string[];
  tagline?: string;
  description?: string;
  offeringsLabel?: string;
  offerings?: OfferingGroup[];
};

export const solutions: Solution[] = [
  {
    slug: "network-infrastructure-solutions",
    icon: Network,
    title: "Network Infrastructure Solutions",
    summary:
      "We connect your offices, people, and systems into one seamless, reliable technology environment.",
    ctaLabel: "Optimize My Network",
    ctaHash: "network",
    capabilities: [
      "Structured cabling & data centre build-out",
      "SD-WAN and multi-site connectivity",
      "Network segmentation and zero-trust access",
      "Monitoring, capacity planning and NOC handover",
    ],
    tagline: "Connected Networks. Unified Communications.",
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
    icon: Cloud,
    title: "Cloud Infrastructure",
    summary:
      "We provide flexible cloud environments to run, protect, and scale your business operations with confidence.",
    ctaLabel: "Explore Cloud Solutions",
    ctaHash: "cloud",
    capabilities: [
      "AWS / Azure / GCP landing zones",
      "Terraform, Kubernetes and GitOps",
      "CI/CD pipelines and release automation",
      "Cost optimisation and observability",
    ],
    tagline: "Scalable. Secure. Reliable.",
    description:
      "We build reliable technology foundations and scalable cloud architectures to help your business transition away from expensive physical servers, reduce upfront hardware costs, and enable seamless remote work.",
    offerings: [
      {
        title: "Cloud & Hosting Services",
        items: [
          "Cloud migration & architecture strategy",
          "Server deployment",
          "Cloud hosting",
          "Hybrid cloud environments",
        ],
      },
      {
        title: "Infrastructure Modernization",
        items: [
          "Infrastructure modernization & upgrades",
          "Secure backup",
          "Disaster recovery integration",
        ],
      },
    ],
  },
  {
    slug: "business-security-compliance",
    icon: ShieldCheck,
    title: "Business Security & Compliance",
    summary:
      "We protect your assets from cyber threats, data loss, unauthorized access and physical security breaches.",
    ctaLabel: "Secure My Business",
    ctaHash: "security",
    capabilities: [
      "Security architecture and zero-trust identity",
      "Vulnerability management and pen testing",
      "SIEM, detection engineering and response",
      "ISO 27001 / NDPR / GDPR readiness",
    ],
    tagline:
      "Enterprise-grade security to safeguard your data, networks, operations and physical premises.",
    offerings: [
      {
        title: "Cybersecurity & Compliance",
        description:
          "Protecting endpoints, local servers, and cloud resources via continuous threat detection and multi-layered defenses. Enforcing zero-trust network access, robust firewall management, and strict identity governance. Securing specialized industry compliance mandates for highly regulated fields like healthcare and financial services.",
        items: [
          "Data protection advisory & compliance support (NDPA/NDPB)",
          "System security assessments & vulnerability management",
          "Endpoint, email, firewall, and UTM protection",
          "DDoS protection & identity/access management",
          "Secure backup & disaster recovery",
          "24/7 security monitoring",
        ],
      },
      {
        title: "Intelligent Physical Surveillance",
        items: [
          "Smart home and business security integration",
          "Smart security & 4G surveillance cameras",
          "Intelligent security alert & alarm systems",
          "Smart doorbell cameras",
          "Access Control systems",
        ],
      },
    ],
  },
  {
    slug: "managed-it-services",
    icon: Monitor,
    title: "Managed IT Services",
    summary:
      "We provide end-to-end IT support and proactive management so you can focus entirely on growing your business.",
    ctaLabel: "Outsource Your IT Support",
    ctaHash: "managed-it",
    capabilities: [
      "24/7 monitoring and service desk",
      "Patching, backup and disaster recovery",
      "Endpoint and server management",
      "Vendor management and IT roadmapping",
    ],
    tagline: "End-to-end IT support.",
    description:
      "We become your technology department, keeping your systems running while you focus on your business.",
    offerings: [
      {
        title: "Managed IT Services",
        items: [
          "IT outsourcing",
          "Remote System monitoring",
          "Helpdesk Support",
          "Device management",
          "Patch management",
          "Software updates",
          "Network Monitoring",
          "Vendor management",
        ],
      },
    ],
  },
  {
    slug: "ai-business-automation",
    icon: Cpu,
    title: "AI & Business Automation",
    summary:
      "We minimize repetitive work, manual processes, and cut operational costs through custom software and AI workflows.",
    ctaLabel: "Cut Operational Costs",
    ctaHash: "automation",
    capabilities: [
      "Process discovery and workflow design",
      "System integration and API orchestration",
      "Custom apps and AI workflow engines",
      "Approval, compliance and audit trails",
    ],
    offerings: [
      {
        title: "Custom Software & Applications",
        items: [
          "Custom web applications & internal systems",
          "Dedicated customer portals",
          "Tailored business applications & integrations",
        ],
      },
      {
        title: "Workflow & Intelligent Automation",
        items: [
          "End-to-end workflow automation",
          "AI-powered automation solutions",
          "Process digitization to eliminate manual error",
        ],
      },
    ],
  },
  {
    slug: "power-energy-infrastructure",
    icon: Zap,
    title: "Power & Energy Infrastructure",
    summary:
      "We eliminate operational downtime caused by power instability by deploying resilient renewable energy systems.",
    ctaLabel: "Eliminate Power Downtime",
    ctaHash: "power",
    capabilities: [
      "Solar and hybrid power design",
      "UPS, inverter and battery systems",
      "Site survey and load profiling",
      "Remote monitoring and maintenance",
    ],
    offeringsLabel: "Our Core Capabilities",
    offerings: [
      {
        title: "Sustainable Power Deployments",
        items: [
          "Solar & Hybrid Power Systems: Designing and installing independent solar networks to reduce dependency on the local grid.",
          "Robust backup Power Solutions: Implementing robust inverter and generator backup systems tailored for business continuity.",
          "Solar-Hybrid grid Integration: Optimizing existing power setups to switch seamlessly between solar, batteries, and grid power.",
          "Smart Power Infrastructure: Building modern electrical distribution systems equipped with Energy Monitoring to track and reduce your power consumption costs.",
        ],
      },
      {
        title: "Infrastructure Maintenance & Technical Support",
        items: [
          "Power and Infrastructure Maintenance: Proactive servicing of energy hardware to extend asset lifespan and prevent sudden failures.",
          "Server & GPU Servicing: Specialized maintenance and repair for high-performance computing units used in local data processing.",
          "Physical network Hardware cabinets Setup: Deploying stable physical network cabinets and routing hardware to support automated facility systems.",
        ],
      },
    ],
  },
  {
    slug: "strategic-technology-advisory",
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
    offeringsLabel: "Our Core Capabilities",
    offerings: [
      {
        title: "Strategic Planning & Roadmapping",
        items: [
          "Technology Strategy & Execution: Designing long-term IT roadmaps aligned with business growth.",
          "Cloud Roadmap Development: Strategic planning for migrating legacy systems to scalable cloud architectures.",
          "Digital Transformation: Overhauling manual processes with modern digital frameworks to increase efficiency.",
        ],
      },
      {
        title: "Governance, Compliance & Audits",
        items: [
          "IT Audits & Assessments: Comprehensive health checks of current systems to find security gaps and operational bottlenecks.",
          "IT Governance & Risk Management: Establishing framework controls, tech policies, and compliance standards.",
        ],
      },
      {
        title: "Procurement & Delivery Excellence",
        items: [
          "Technology Procurement Advisory & vendor negotiation: Guiding vendor selection and software negotiation to maximize ROI and cut licensing waste.",
          "Project Management Office (PMO) oversight: Overseeing complex technology deployments to ensure they finish on time and within budget.",
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

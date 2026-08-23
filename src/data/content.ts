import type { LucideIcon } from "lucide-react";
import { Cloud, Cpu, Network, ShieldCheck, Workflow, Zap, Compass, Monitor } from "lucide-react";

export type Solution = {
  slug: string;
  icon: LucideIcon;
  title: string;
  summary: string;
  capabilities: string[];
};

export const solutions: Solution[] = [
  {
    slug: "network-solutions",
    icon: Network,
    title: "Network Infrastructure Solutions",
    summary:
      "We connect your offices, people, and systems into one seamless, reliable communication and technology environment.",
    capabilities: [
      "Structured cabling & data centre build-out",
      "SD-WAN and multi-site connectivity",
      "Network segmentation and zero-trust access",
      "Monitoring, capacity planning and NOC handover",
    ],
  },
  {
    slug: "cloud-infrastructure",
    icon: Cloud,
    title: "Cloud Infrastructure",
    summary:
      "We provide flexible cloud solutions to build, run, and scale your business with confidence.",
    capabilities: [
      "AWS / Azure / GCP landing zones",
      "Terraform, Kubernetes and GitOps",
      "CI/CD pipelines and release automation",
      "Cost optimisation and observability",
    ],
  },
  {
    slug: "business-security-compliance",
    icon: ShieldCheck,
    title: "Business Security & Compliance",
    summary:
      "We protect your home & business from cyber threats, ransomware, data loss, unauthorized access and physical security breaches.",
    capabilities: [
      "Security architecture and zero-trust identity",
      "Vulnerability management and pen testing",
      "SIEM, detection engineering and response",
      "ISO 27001 / NDPR / GDPR readiness",
    ],
  },
  {
    slug: "managed-it-services",
    icon: Monitor,
    title: "Managed IT Services",
    summary:
      "We provide end-to-end IT support so you can focus on what matters most—your business.",
    capabilities: [
      "24/7 monitoring and service desk",
      "Patching, backup and disaster recovery",
      "Endpoint and server management",
      "Vendor management and IT roadmapping",
    ],
  },
  {
    slug: "ai-business-automation",
    icon: Cpu,
    title: "AI & Business Automation",
    summary:
      "We minimize repetitive work, manual processes, and cut operational costs through custom app development and AI workflow engines.",
    capabilities: [
      "Process discovery and workflow design",
      "System integration and API orchestration",
      "Custom apps and AI workflow engines",
      "Approval, compliance and audit trails",
    ],
  },
  {
    slug: "power-energy-infrastructure",
    icon: Zap,
    title: "Power & Energy Infrastructure",
    summary:
      "We eliminate operational downtime caused by power instability by deploying renewable energy systems and power solutions.",
    capabilities: [
      "Solar and hybrid power design",
      "UPS, inverter and battery systems",
      "Site survey and load profiling",
      "Remote monitoring and maintenance",
    ],
  },
  {
    slug: "strategic-technology-advisory",
    icon: Compass,
    title: "Strategic Technology Advisory",
    summary:
      "We align your technology roadmap directly with your core business objectives.",
    capabilities: [
      "Technology roadmap and investment planning",
      "Cost optimisation and vendor selection",
      "Digital transformation programme design",
      "Executive readouts and board reporting",
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

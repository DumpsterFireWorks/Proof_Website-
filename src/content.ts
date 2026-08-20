export type ProductCategory = "Platform" | "Operations" | "Applications" | "Concepts";

export interface Product {
  name: string;
  subtitle: string;
  category: ProductCategory;
  description: string;
  capabilities: string[];
  status?: "Concept";
}

export const products: Product[] = [
  {
    name: "Proof Deploy",
    subtitle: "Build and release authority",
    category: "Platform",
    description: "Turns an exact approved source revision into a provable release path, keeping build, promotion, and rollback identities explicit.",
    capabilities: ["Exact source identity", "Proven release artifacts", "Controlled promotion", "Rollback provenance"]
  },
  {
    name: "Proof Cloud",
    subtitle: "Runtime and hosting",
    category: "Platform",
    description: "Runs already-proven releases through explicit workload contracts and owns runtime isolation, routes, health, reconciliation, and recovery boundaries.",
    capabilities: ["Release admission", "Runtime isolation", "Route boundaries", "Health and recovery"]
  },
  {
    name: "Proof Core",
    subtitle: "Owned compute foundation",
    category: "Platform",
    description: "Provides the owned physical compute and reproducible host baseline that Proof workloads can run on without collapsing host and application authority together.",
    capabilities: ["Owned compute", "Reproducible host baseline", "Capacity foundation", "Recovery foundation"]
  },
  {
    name: "Proof Base",
    subtitle: "Optional structured data services",
    category: "Platform",
    description: "Defines an optional, portable PostgreSQL-based direction for applications that genuinely need centralized relational backend capability.",
    capabilities: ["Optional attachment", "Portable PostgreSQL", "Explicit migrations", "Logical recovery"]
  },
  {
    name: "Proof Control",
    subtitle: "Ecosystem operations and observability",
    category: "Operations",
    description: "Provides a local-first place to understand the ecosystem as a whole while leaving authority with the systems it observes.",
    capabilities: ["Ecosystem overview", "Operational context", "Attention signals", "Authority-preserving actions"]
  },
  {
    name: "Proof Cloud App",
    subtitle: "Cloud owner console",
    category: "Operations",
    description: "Presents the owner-facing Cloud experience for workloads, releases, routes, services, recovery, and attention-required state.",
    capabilities: ["Cloud-focused view", "Workload context", "Release visibility", "Recovery context"]
  },
  {
    name: "Proof Quote",
    subtitle: "Manufacturing estimating and quoting",
    category: "Applications",
    description: "A manufacturing application built around deterministic quote calculations, detailed routing, material and process models, saved quotes, and print workflows.",
    capabilities: ["Deterministic estimates", "Routing and process models", "Saved quotes", "Print and PDF workflows"]
  },
  {
    name: "Proof Flow",
    subtitle: "Shop-floor process analysis",
    category: "Applications",
    description: "Turns controlled paper feedback into reviewed structured data, deterministic analytics, priorities, trends, and management reports.",
    capabilities: ["Reviewed structured data", "Deterministic analytics", "Trends and priorities", "Management reporting"]
  },
  {
    name: "Proof Room",
    subtitle: "Local photography workflow assistant",
    category: "Applications",
    description: "Helps move a photography session from safe ingest to creative editing while keeping originals immutable and private client photos local.",
    capabilities: ["Safe ingest", "Culling assistance", "Session consistency", "Verified handoff"]
  },
  {
    name: "Proof OS",
    subtitle: "Shop-floor proof and sign-off concept",
    category: "Concepts",
    description: "A preserved exploration of durable shop-floor records, human confirmation, shared proof, and analytics—not an available product.",
    capabilities: ["Durable records", "Human confirmation", "Shared proof", "Analytics direction"],
    status: "Concept"
  }
];

export const productGroups: ProductCategory[] = ["Platform", "Operations", "Applications", "Concepts"];

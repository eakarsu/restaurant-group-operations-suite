import {
  Activity,
  BarChart3,
  Bell,
  Blocks,
  Database,
  Bot,
  BriefcaseBusiness,
  CalendarCheck,
  ClipboardList,
  FileText,
  Files,
  LayoutDashboard,
  LucideIcon,
  PackageCheck,
  Plug,
  ShieldCheck,
  UserRound,
  Users,
  Workflow,
} from 'lucide-react';

export type NavItem = { label: string; href: string; icon: LucideIcon };
export type FeatureDefinition = { title: string; href: string; category: string; summary: string; bullets: string[] };
export type PageDefinition = {
  title: string;
  eyebrow: string;
  subtitle: string;
  category: string;
  summary: string;
  bullets: string[];
  metrics: Array<{ label: string; value: string; note: string }>;
};
export type FeatureContext = {
  sourceOwners: string[];
  operatingQueues: string[];
  outputs: string[];
  relatedRoutes: Array<{ label: string; href: string }>;
};

const features = [
  {
    slug: 'records',
    title: 'Customers',
    href: '/records',
    category: 'Commerce',
    icon: BriefcaseBusiness,
    summary: 'Customers workflow normalized for the Restaurant Group Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Customers queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Customers', value: '24', note: 'Active' }, { label: 'Exceptions', value: '3', note: 'Need review' }, { label: 'Due Soon', value: '5', note: 'Next 14 days' }],
  },
  {
    slug: 'orders',
    title: 'Orders',
    href: '/orders',
    category: 'Commerce',
    icon: Users,
    summary: 'Orders workflow normalized for the Restaurant Group Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Orders queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Orders', value: '35', note: 'Active' }, { label: 'Exceptions', value: '4', note: 'Need review' }, { label: 'Due Soon', value: '6', note: 'Next 14 days' }],
  },
  {
    slug: 'catalog',
    title: 'Catalog',
    href: '/catalog',
    category: 'Commerce',
    icon: ClipboardList,
    summary: 'Catalog workflow normalized for the Restaurant Group Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Catalog queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Catalog', value: '46', note: 'Active' }, { label: 'Exceptions', value: '5', note: 'Need review' }, { label: 'Due Soon', value: '7', note: 'Next 14 days' }],
  },
  {
    slug: 'inventory',
    title: 'Inventory',
    href: '/inventory',
    category: 'Commerce',
    icon: CalendarCheck,
    summary: 'Inventory workflow normalized for the Restaurant Group Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Inventory queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Inventory', value: '57', note: 'Active' }, { label: 'Exceptions', value: '6', note: 'Need review' }, { label: 'Due Soon', value: '8', note: 'Next 14 days' }],
  },
  {
    slug: 'pricing',
    title: 'Pricing',
    href: '/pricing',
    category: 'Operations',
    icon: Activity,
    summary: 'Pricing workflow normalized for the Restaurant Group Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Pricing queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Pricing', value: '68', note: 'Active' }, { label: 'Exceptions', value: '7', note: 'Need review' }, { label: 'Due Soon', value: '9', note: 'Next 14 days' }],
  },
  {
    slug: 'promotions',
    title: 'Promotions',
    href: '/promotions',
    category: 'Operations',
    icon: Workflow,
    summary: 'Promotions workflow normalized for the Restaurant Group Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Promotions queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Promotions', value: '79', note: 'Active' }, { label: 'Exceptions', value: '8', note: 'Need review' }, { label: 'Due Soon', value: '10', note: 'Next 14 days' }],
  },
  {
    slug: 'fulfillment',
    title: 'Fulfillment',
    href: '/fulfillment',
    category: 'Operations',
    icon: FileText,
    summary: 'Fulfillment workflow normalized for the Restaurant Group Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Fulfillment queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Fulfillment', value: '90', note: 'Active' }, { label: 'Exceptions', value: '9', note: 'Need review' }, { label: 'Due Soon', value: '11', note: 'Next 14 days' }],
  },
  {
    slug: 'returns',
    title: 'Returns',
    href: '/returns',
    category: 'Operations',
    icon: ShieldCheck,
    summary: 'Returns workflow normalized for the Restaurant Group Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Returns queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Returns', value: '101', note: 'Active' }, { label: 'Exceptions', value: '10', note: 'Need review' }, { label: 'Due Soon', value: '12', note: 'Next 14 days' }],
  },
  {
    slug: 'exceptions',
    title: 'Exceptions',
    href: '/exceptions',
    category: 'Governance',
    icon: BarChart3,
    summary: 'Exceptions workflow normalized for the Restaurant Group Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Exceptions queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Exceptions', value: '112', note: 'Active' }, { label: 'Exceptions', value: '11', note: 'Need review' }, { label: 'Due Soon', value: '13', note: 'Next 14 days' }],
  },
  {
    slug: 'reviews',
    title: 'Reviews',
    href: '/reviews',
    category: 'Governance',
    icon: PackageCheck,
    summary: 'Reviews workflow normalized for the Restaurant Group Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Reviews queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Reviews', value: '123', note: 'Active' }, { label: 'Exceptions', value: '12', note: 'Need review' }, { label: 'Due Soon', value: '14', note: 'Next 14 days' }],
  },
  {
    slug: 'analytics',
    title: 'Analytics',
    href: '/analytics',
    category: 'Intelligence Layer',
    icon: Bell,
    summary: 'Analytics workflow normalized for the Restaurant Group Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Analytics queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Analytics', value: '134', note: 'Active' }, { label: 'Exceptions', value: '13', note: 'Need review' }, { label: 'Due Soon', value: '15', note: 'Next 14 days' }],
  },
  {
    slug: 'reports',
    title: 'Reports',
    href: '/reports',
    category: 'Intelligence Layer',
    icon: Files,
    summary: 'Reports workflow normalized for the Restaurant Group Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Reports queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Reports', value: '145', note: 'Active' }, { label: 'Exceptions', value: '14', note: 'Need review' }, { label: 'Due Soon', value: '16', note: 'Next 14 days' }],
  },
  {
    slug: "recipe-planner",
    title: "Recipe Planner",
    href: "/recipe-planner",
    category: "Recipe Menu Planning",
    icon: FileText,
    summary: "Recipes, ingredients, prep steps, dietary notes, and production scaling.",
    bullets: ["Recipes","Ingredients","Scaling"],
    metrics: [
      { label: "Recipe Planner", value: "32", note: 'Active' },
      { label: 'Review', value: "6", note: 'Needs attention' },
      { label: 'Due Soon', value: "4", note: 'Next 14 days' },
    ],
  },
  {
    slug: "menu-digitizer",
    title: "Menu Digitizer",
    href: "/menu-digitizer",
    category: "Recipe Menu Planning",
    icon: ClipboardList,
    summary: "Menu item extraction, categories, modifiers, allergens, and POS-ready structure.",
    bullets: ["Extraction","Modifiers","Allergens"],
    metrics: [
      { label: "Menu Digitizer", value: "45", note: 'Active' },
      { label: 'Review', value: "7", note: 'Needs attention' },
      { label: 'Due Soon', value: "5", note: 'Next 14 days' },
    ],
  },
  {
    slug: "food-costing",
    title: "Food Costing",
    href: "/food-costing",
    category: "Recipe Menu Planning",
    icon: Activity,
    summary: "Ingredient costs, margin analysis, substitutions, and profitability review.",
    bullets: ["Costs","Margins","Substitutions"],
    metrics: [
      { label: "Food Costing", value: "58", note: 'Active' },
      { label: 'Review', value: "8", note: 'Needs attention' },
      { label: 'Due Soon', value: "6", note: 'Next 14 days' },
    ],
  },
  {
    slug: "nutrition-menu-labels",
    title: "Nutrition/Menu Labels",
    href: "/nutrition-menu-labels",
    category: "Recipe Menu Planning",
    icon: BarChart3,
    summary: "Nutrition estimates, allergen labels, dietary tags, and menu compliance notes.",
    bullets: ["Nutrition","Allergens","Dietary tags"],
    metrics: [
      { label: "Nutrition/Menu Labels", value: "71", note: 'Active' },
      { label: 'Review', value: "9", note: 'Needs attention' },
      { label: 'Due Soon', value: "7", note: 'Next 14 days' },
    ],
  },
  {
    slug: "wine-spirits-inventory",
    title: "Wine & Spirits Inventory",
    href: "/wine-spirits-inventory",
    category: "Wine Spirits Inventory Sommelier",
    icon: Workflow,
    summary: "Wine & Spirits Inventory elevated from the Wine Spirits Inventory Sommelier source capability with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Wine & Spirits Inventory queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Wine & Spirits Inventory", value: "24", note: 'Active' },
      { label: 'Review', value: "4", note: 'Needs attention' },
      { label: 'Due Soon', value: "3", note: 'Next 14 days' },
    ],
  },
  {
    slug: "sommelier-pairing",
    title: "Sommelier Pairing",
    href: "/sommelier-pairing",
    category: "Wine Spirits Inventory Sommelier",
    icon: Workflow,
    summary: "Sommelier Pairing elevated from the Wine Spirits Inventory Sommelier source capability with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Sommelier Pairing queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Sommelier Pairing", value: "33", note: 'Active' },
      { label: 'Review', value: "5", note: 'Needs attention' },
      { label: 'Due Soon', value: "4", note: 'Next 14 days' },
    ],
  },
  {
    slug: "beverage-margin-review",
    title: "Beverage Margin Review",
    href: "/beverage-margin-review",
    category: "Wine Spirits Inventory Sommelier",
    icon: Workflow,
    summary: "Beverage Margin Review elevated from the Wine Spirits Inventory Sommelier source capability with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Beverage Margin Review queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Beverage Margin Review", value: "42", note: 'Active' },
      { label: 'Review', value: "6", note: 'Needs attention' },
      { label: 'Due Soon', value: "5", note: 'Next 14 days' },
    ],
  },
  {
    slug: 'documents',
    title: 'Documents',
    href: '/documents',
    category: 'Core Platform',
    icon: Files,
    summary: 'Restaurant Group Operations documents, packets, evidence, attachments, and exports.',
    bullets: ['Documents', 'Uploads', 'Exports'],
    metrics: [{ label: 'Documents', value: '640', note: 'Tracked' }, { label: 'In Review', value: '42', note: 'Open' }, { label: 'Uploaded', value: '88', note: 'This month' }],
  },
  {
    slug: 'notifications',
    title: 'Notifications',
    href: '/notifications',
    category: 'Core Platform',
    icon: Bell,
    summary: 'Restaurant Group Operations alerts, reminders, exceptions, and approvals.',
    bullets: ['Alerts', 'Reminders', 'Exceptions'],
    metrics: [{ label: 'Unread', value: '34', note: 'Needs review' }, { label: 'Critical', value: '7', note: 'Escalated' }, { label: 'Resolved', value: '211', note: 'This week' }],
  },
  {
    slug: 'integrations',
    title: 'Integrations',
    href: '/integrations',
    category: 'Core Platform',
    icon: Plug,
    summary: 'Restaurant Group Operations source-system connector health and sync status.',
    bullets: ['Connectors', 'Sync', 'Warnings'],
    metrics: [{ label: 'Connectors', value: '12', note: 'Configured' }, { label: 'Warnings', value: '3', note: 'Need attention' }, { label: 'Last Sync', value: '5m', note: 'Source data' }],
  },
  {
    slug: 'profiles',
    title: 'Profiles',
    href: '/profiles',
    category: 'Core Platform',
    icon: UserRound,
    summary: 'Restaurant Group Operations users, roles, teams, permissions, and ownership settings.',
    bullets: ['Users', 'Roles', 'Teams'],
    metrics: [{ label: 'Users', value: '72', note: 'Active' }, { label: 'Teams', value: '9', note: 'Configured' }, { label: 'Access Reviews', value: '5', note: 'Open' }],
  },
] as const;

const aiFeatures = [
  {
    slug: 'ai-assistant',
    title: 'AI Assistant',
    href: '/features/ai-assistant',
    category: 'Intelligence Layer',
    icon: Bot,
    summary: 'Restaurant Group Operations assistant for triage, summaries, drafting, recommendations, and operational review.',
    bullets: ['Triage support', 'Drafting', 'Review guidance'],
    metrics: [
      { label: 'Sessions', value: '128', note: 'Last 24 hours' },
      { label: 'Drafts', value: '204', note: 'Generated' },
      { label: 'Escalations', value: '14', note: 'Expert review' },
    ],
  },
  {
    slug: 'ai-tools',
    title: 'AI Tools',
    href: '/features/ai-tools',
    category: 'Intelligence Layer',
    icon: Activity,
    summary: 'Targeted AI tools for scoring, classification, extraction, exception review, and reporting.',
    bullets: ['Scoring', 'Classification', 'Exception review'],
    metrics: [
      { label: 'Runs', value: '318', note: 'Last 24 hours' },
      { label: 'Signals', value: '88', note: 'New alerts' },
      { label: 'Accepted', value: '117', note: 'Reviewer accepted' },
    ],
  },
] as const;

const allFeatures = [...features, ...aiFeatures];

export const primaryNav: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'All Features', href: '/features', icon: Blocks },
  { label: 'Documents', href: '/documents', icon: Files },
  { label: 'Source Tables', href: '/source-tables', icon: Database },
  { label: 'Profiles', href: '/profiles', icon: UserRound },
];

export const featureNav: NavItem[] = allFeatures.map((feature) => ({ label: feature.title, href: feature.href, icon: feature.icon }));
export const featureCatalog: FeatureDefinition[] = allFeatures.map((feature) => ({ title: feature.title, href: feature.href, category: feature.category, summary: feature.summary, bullets: [...feature.bullets] }));

export const featureFamilies = [
  { name: 'Commerce', features: ['Customers', 'Orders', 'Catalog', 'Inventory'] },
  { name: 'Operations', features: ['Pricing', 'Promotions', 'Fulfillment', 'Returns'] },
  { name: 'Governance', features: ['Exceptions', 'Reviews'] },
  { name: 'Recipe Menu Planning', features: ["Recipe Planner","Menu Digitizer","Food Costing","Nutrition/Menu Labels"] },
  { name: 'Wine Spirits Inventory Sommelier', features: ["Wine & Spirits Inventory","Sommelier Pairing","Beverage Margin Review"] },
  { name: 'Intelligence Layer', features: ['Analytics', 'Reports', 'AI Assistant', 'AI Tools'] },
  { name: 'Core Platform', features: ['Documents', 'Notifications', 'Integrations', 'Profiles'] },
];

function toPage(feature: (typeof allFeatures)[number]): PageDefinition {
  return {
    title: feature.title,
    eyebrow: feature.category,
    subtitle: feature.summary,
    category: feature.category,
    summary: `${feature.title} is normalized from source applications into one merged suite workflow.`,
    bullets: [...feature.bullets],
    metrics: [...feature.metrics],
  };
}

export const pageRegistry: Record<string, PageDefinition> = Object.fromEntries(features.map((feature) => [feature.slug, toPage(feature)]));
export const aiFeatureRegistry: Record<string, PageDefinition> = Object.fromEntries(aiFeatures.map((feature) => [feature.slug, toPage(feature)]));
export const featureContexts: Record<string, FeatureContext> = Object.fromEntries(
  allFeatures.map((feature) => [
    feature.title,
    {
      sourceOwners: ['AIRestaurantGroupOperationsAssistant', 'AIRestaurantGroupOperationsOperations where applicable'],
      operatingQueues: [`${feature.title} records`, `${feature.title} approvals`, `${feature.title} exceptions`],
      outputs: [`${feature.title} dashboard`, `${feature.title} export`, `${feature.title} audit trail`],
      relatedRoutes: [{ label: 'Dashboard', href: '/dashboard' }, { label: 'All Features', href: '/features' }, { label: 'Reports', href: '/reports' }],
    },
  ]),
);

export type Metric = { label: string; value: string; note: string };
export const sourceSystems = [
  { name: 'AIRestaurantGroupOperationsAssistant', ownership: 'Customers source capabilities and workflows', coverage: ['Customers', 'Orders', 'Catalog'] },
  { name: 'AIRestaurantGroupOperationsOperations', ownership: 'Orders source capabilities and workflows', coverage: ['Inventory', 'Pricing', 'Promotions'] },
  { name: 'AIRestaurantGroupOperationsAnalytics', ownership: 'Catalog source capabilities and workflows', coverage: ['Fulfillment', 'Returns', 'Exceptions'] },
  { name: 'AIRestaurantGroupOperationsWorkflow', ownership: 'Inventory source capabilities and workflows', coverage: ['Reviews', 'Analytics', 'Reports'] },
];
export const dashboardMetrics: Metric[] = [
  { label: 'Customers', value: '84', note: 'Active' },
  { label: 'Orders', value: '61', note: 'Open' },
  { label: 'Catalog', value: '37', note: 'Need review' },
  { label: 'AI Tool Runs', value: '318', note: 'Last 24 hours' },
];
export const healthMetrics: Metric[] = [
  { label: 'Exceptions', value: '28', note: 'Open' },
  { label: 'Approvals', value: '46', note: 'Pending' },
  { label: 'Documents', value: '640', note: 'Tracked' },
  { label: 'Audit Items', value: '91%', note: 'Current' },
];
export const dashboardModules = ['Customers operating view', 'Orders operating view', 'Catalog operating view', 'Inventory operating view', 'Pricing operating view', 'Promotions operating view', 'Fulfillment operating view', 'Returns operating view'];
export const workflowHighlights = ['Customers workflow with records, approvals, audit, and reporting', 'Orders workflow with records, approvals, audit, and reporting', 'Catalog workflow with records, approvals, audit, and reporting', 'Inventory workflow with records, approvals, audit, and reporting', 'Pricing workflow with records, approvals, audit, and reporting'];

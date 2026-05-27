export type SourceDashboardAction = {
  id: string;
  label: string;
  description: string;
  href: string;
  sourceProjects: string[];
  examples: string[];
  count: number;
};

export const sourceDashboardActions: SourceDashboardAction[] = [
  {
    "id": "wine-spirits-inventory-sommelier",
    "label": "Wine Spirits Inventory Sommelier",
    "description": "Open Wine Spirits Inventory Sommelier workflows elevated from AIWineSpiritsinventorySommelier.",
    "href": "/wine-spirits-inventory",
    "sourceProjects": [
      "AIWineSpiritsinventorySommelier"
    ],
    "examples": [
      "Wine & Spirits Inventory",
      "Sommelier Pairing",
      "Beverage Margin Review"
    ],
    "count": 1
  },
  {
    "id": "recipe-menu-planning",
    "label": "Recipe Menu Planning",
    "description": "Open Recipe Menu Planning workflows elevated from AiRecipeMealPlanner, AIMenuDigitizer.",
    "href": "/recipe-planner",
    "sourceProjects": [
      "AiRecipeMealPlanner",
      "AIMenuDigitizer"
    ],
    "examples": [
      "Recipe Planner",
      "Menu Digitizer",
      "Food Costing",
      "Nutrition/Menu Labels"
    ],
    "count": 2
  }
];

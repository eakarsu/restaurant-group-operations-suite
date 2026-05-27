export type SourceAIToolField = {
  name: string;
  label: string;
  type: string;
  defaultValue: string;
  placeholder: string;
  options: string[];
  required?: boolean;
  source: string;
};

export const sourceAIToolFieldsByToolId: Record<string, SourceAIToolField[]> = {
  "wine-spirits-inventory-sommelier-copilot": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve the Wine Spirits Inventory Sommelier workflow and produce audit-ready next actions.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AIWineSpiritsinventorySommelier"
    },
    {
      "name": "source_context",
      "label": "Source Context",
      "type": "textarea",
      "defaultValue": "Paste Wine Spirits Inventory Sommelier source details, notes, records, or documents.",
      "placeholder": "Paste source context",
      "options": [],
      "required": true,
      "source": "AIWineSpiritsinventorySommelier"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output format",
      "options": [
        "Action plan",
        "Executive summary",
        "Evidence table",
        "Checklist"
      ],
      "required": true,
      "source": "AIWineSpiritsinventorySommelier"
    }
  ],
  "recipe-menu-planning-copilot": [
    {
      "name": "menu_or_recipe",
      "label": "Menu or Recipe",
      "type": "textarea",
      "defaultValue": "Paste menu items, recipe, or ingredient list.",
      "placeholder": "Enter menu or recipe",
      "options": [],
      "required": true,
      "source": "AiRecipeMealPlanner, AIMenuDigitizer"
    },
    {
      "name": "service_context",
      "label": "Service Context",
      "type": "select",
      "defaultValue": "Restaurant menu",
      "placeholder": "Enter service context",
      "options": [
        "Restaurant menu",
        "Catering",
        "Meal prep",
        "Nutrition plan"
      ],
      "required": true,
      "source": "AiRecipeMealPlanner, AIMenuDigitizer"
    },
    {
      "name": "cost_targets",
      "label": "Cost Targets",
      "type": "text",
      "defaultValue": "30% food cost target",
      "placeholder": "Enter cost targets",
      "options": [],
      "required": true,
      "source": "AiRecipeMealPlanner, AIMenuDigitizer"
    }
  ]
};

function buildPrompt(data) {
  return `
Generate a professional B2B sustainable proposal.

Industry: ${data.industry}
Budget: ${data.budget}
Sustainability Goals: ${data.goals}
Target Market: ${data.targetMarket}

Return ONLY valid JSON in this exact format:

{
  "product_mix": [
    { "name": "", "description": "", "estimated_cost": 0 }
  ],
  "budget_allocation": {
    "product_development": 0,
    "marketing": 0,
    "operations": 0,
    "contingency": 0
  },
  "cost_breakdown": {
    "materials": 0,
    "labor": 0,
    "logistics": 0
  },
  "impact_summary": ""
}

No explanation. No markdown. Only JSON.
`;
}

module.exports = buildPrompt;
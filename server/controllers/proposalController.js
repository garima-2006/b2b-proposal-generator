const { generateProposal } = require("../services/aiService");
const { allocateBudget } = require("../services/budgetService");

async function createProposal(req, res) {
  try {
    const data = req.body;

    const aiResponse = await generateProposal(data);

    // Extract only JSON part safely
    const jsonMatch = aiResponse.match(/\{[\s\S]*\}/);
    const parsedAI = jsonMatch ? JSON.parse(jsonMatch[0]) : {};

    const budgetSplit = allocateBudget(data.budget);

    res.json({
      aiGenerated: parsedAI,
      calculatedBudget: budgetSplit,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
}

module.exports = { createProposal };
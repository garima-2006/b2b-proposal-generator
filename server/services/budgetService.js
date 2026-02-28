function allocateBudget(totalBudget) {
  return {
    product_development: totalBudget * 0.4,
    marketing: totalBudget * 0.25,
    operations: totalBudget * 0.2,
    contingency: totalBudget * 0.15,
  };
}

module.exports = { allocateBudget };
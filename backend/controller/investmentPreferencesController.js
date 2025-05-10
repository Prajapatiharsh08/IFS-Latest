
const InvestmentPreference = require("../model/InvestmentPreferences");

const saveInvestmentPreference = async (req, res) => {
  const {
    investmentPlan,
    investmentAmount,
    investmentTenure,
    nomineeName,
    relationshipWithNominee
  } = req.body;

  // Manual validation
  const validPlans = ['Quarterly Compounding', 'Tree Family Plan', 'Systematic Investment'];

  if (!investmentPlan || !investmentAmount || !investmentTenure || !nomineeName || !relationshipWithNominee) {
    return res.status(400).json({ error: "All fields are required" });
  }

  if (!validPlans.includes(investmentPlan)) {
    return res.status(400).json({ error: "Invalid investment plan selected" });
  }

  if (investmentAmount < 10000) {
    return res.status(400).json({ error: "Minimum investment amount is ₹10,000" });
  }

  try {
    const newPreference = new InvestmentPreference({
      investmentPlan,
      investmentAmount,
      investmentTenure,
      nomineeName,
      relationshipWithNominee
    });

    await newPreference.save();
    res.status(201).json({ message: "Investment preferences saved successfully", data: newPreference });
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};

module.exports = { saveInvestmentPreference };
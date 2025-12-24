const SplitType = {
    EQUAL: "EQUAL",
    EXACT: "EXACT",
    PERCENT: "PERCENT"
  };
  
  class Expense {
    constructor(id, paidBy, amount, splitType, splits = {}) {
      this.id = id;
      this.paidBy = paidBy;      // User object
      this.amount = amount;
      this.splitType = splitType;
      this.splits = splits;      // { userId: value }
    }
  }
  
  module.exports = { Expense, SplitType };
  
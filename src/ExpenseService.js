const { SplitType } = require("./Expense");

class ExpenseService {
  constructor(balanceManager) {
    this.balanceManager = balanceManager;
  }

  addExpense(expense, groupMembers) {
    const payer = expense.paidBy;
    const total = expense.amount;

    if (expense.splitType === SplitType.EQUAL) {
      const share = total / groupMembers.length;

      groupMembers.forEach(user => {
        if (user.id !== payer.id) {
          this.balanceManager.addBalance(
            user.id,
            payer.id,
            share
          );
        }
      });
    }

    if (expense.splitType === SplitType.EXACT) {
      for (const userId in expense.splits) {
        if (userId !== payer.id) {
          this.balanceManager.addBalance(
            userId,
            payer.id,
            expense.splits[userId]
          );
        }
      }
    }

    if (expense.splitType === SplitType.PERCENT) {
      for (const userId in expense.splits) {
        const percent = expense.splits[userId];
        const amount = (total * percent) / 100;

        if (userId !== payer.id) {
          this.balanceManager.addBalance(
            userId,
            payer.id,
            amount
          );
        }
      }
    }
  }
}

module.exports = ExpenseService;

const User = require("./User");
const Group = require("./Group");
const { Expense, SplitType } = require("./Expense");
const BalanceManager = require("./BalanceManager");
const ExpenseService = require("./ExpenseService");

// Create Users
const userA = new User("A", "Akhil", "a@mail.com");
const userB = new User("B", "Bharat", "b@mail.com");
const userC = new User("C", "Charan", "c@mail.com");

// Create Group
const trip = new Group("G1", "Goa Trip");
trip.addMember(userA);
trip.addMember(userB);
trip.addMember(userC);

// Setup Services
const balanceManager = new BalanceManager();
const expenseService = new ExpenseService(balanceManager);

// Expense 1: Equal Split
const expense1 = new Expense(
  "E1",
  userA,
  300,
  SplitType.EQUAL
);

expenseService.addExpense(expense1, trip.members);

// Expense 2: Exact Split
const expense2 = new Expense(
  "E2",
  userB,
  600,
  SplitType.EXACT,
  {
    A: 200,
    B: 200,
    C: 200
  }
);

expenseService.addExpense(expense2, trip.members);

// Expense 3: Percentage Split
const expense3 = new Expense(
  "E3",
  userC,
  1000,
  SplitType.PERCENT,
  {
    A: 40,
    B: 30,
    C: 30
  }
);

expenseService.addExpense(expense3, trip.members);

// Print Final Balances
balanceManager.printBalances();

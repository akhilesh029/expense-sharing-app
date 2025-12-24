Expense Sharing Application (Backend)
📌 Overview

This project is a simplified backend implementation of an Expense Sharing Application, inspired by apps like Splitwise.
It allows users to create groups, add shared expenses, split costs in different ways, and track who owes whom.

The focus of this project is backend design, balance tracking, and simplification logic, not UI.

🎯 Features

Create users and groups

Add shared expenses in a group

Supported split types:

Equal Split

Exact Amount Split

Percentage Split

Track balances:

How much a user owes

How much others owe a user

Automatically simplify balances to minimize transactions

🧠 Design Approach
1. Clean Separation of Concerns

The project is structured into small, focused modules:

Models → represent core entities (User, Group, Expense)

Services → contain business logic (splitting & balance handling)

Manager → responsible for balance tracking and simplification

This makes the system easy to extend, test, and maintain.

📁 Project Structure
src/
├── User.js              # User entity
├── Group.js             # Group & members
├── Expense.js           # Expense & split types
├── BalanceManager.js    # Balance tracking & simplification
├── ExpenseService.js    # Expense splitting logic
└── index.js             # Entry point

💰 Expense Splitting Logic
Equal Split

The total amount is divided equally among all group members.

Example:

Amount = 300
Users = A, B, C
Paid by A

Each owes = 100
B owes A = 100
C owes A = 100

Exact Split

Each user’s share is explicitly defined.

Example:

Total = 600
A pays

A = 200
B = 200
C = 200

Percentage Split

Each user pays based on a percentage of the total amount.

Example:

Total = 1000
A = 40%
B = 30%
C = 30%

🔁 Balance Tracking Strategy

Balances are stored as net amounts instead of individual transactions.

balance[A][B] = X
→ A owes B X amount

Reverse Balance Simplification

If:

A owes B = 100
B owes A = 40


Then:

A owes B = 60


This reduces unnecessary settlements.

⚙️ Balance Simplification

The system simplifies balances automatically by:

Updating pairwise balances on every expense

Merging reverse debts immediately

Ensuring only net amounts remain

This mimics real-world behavior of apps like Splitwise.

▶️ How to Run
1. Install Node.js
node -v
npm -v

2. Run the Project
node src/index.js

🧪 Example Output
💰 Current Balances:
A owes C ₹100
B owes A ₹100
B owes C ₹100

🚀 Extensibility

This backend can be easily extended to:

Add REST APIs using Express.js

Integrate a database (MongoDB / SQL)

Add authentication

Support expense settlements

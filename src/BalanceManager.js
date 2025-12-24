class BalanceManager {
    constructor() {
      // balances[from][to] = amount (from owes to)
      this.balances = {};
    }
  
    addBalance(from, to, amount) {
      if (!this.balances[from]) {
        this.balances[from] = {};
      }
  
      this.balances[from][to] =
        (this.balances[from][to] || 0) + amount;
  
      // Simplify reverse balance
      if (this.balances[to] && this.balances[to][from]) {
        const reverse = this.balances[to][from];
        const net = this.balances[from][to] - reverse;
  
        if (net > 0) {
          this.balances[from][to] = net;
          delete this.balances[to][from];
        } else if (net < 0) {
          this.balances[to][from] = -net;
          delete this.balances[from][to];
        } else {
          delete this.balances[from][to];
          delete this.balances[to][from];
        }
      }
    }
  
    printBalances() {
      console.log("\n💰 Current Balances:");
      for (const from in this.balances) {
        for (const to in this.balances[from]) {
          console.log(
            `${from} owes ${to} ₹${this.balances[from][to]}`
          );
        }
      }
    }
  }
  
  module.exports = BalanceManager;
  
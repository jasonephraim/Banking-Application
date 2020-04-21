class bankAccount {
  constructor(firstName, lastName, middleName, accountType, balance, status) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.middleName = middleName;
    this.accountType = accountType;
    if (bankAccount.balance <= 0) {
      this.balance = balance - 35;
    } else {
      this.balance = balance;
    }
    this.status = status;
  }

  transferBalance(fromAccount, toAccount, amount) {
    fromAccount.balance = fromAccount.balance - amount;
    toAccount.balance = toAccount.balance + amount;
    console.log(fromAccount);
    console.log(toAccount);
  }

  withdrawBalance(fromAccount, amount) {
    fromAccount.balance = fromAccount.balance - amount;
    console.log(fromAccount);
  }
}

let jasonEphraim = new bankAccount(
  "Jason",
  "Ephraim",
  "Peter",
  "Checking",
  100,
  "Open"
);
console.log(jasonEphraim);
let jennyRoth = new bankAccount(
  "Jenny",
  "Roth",
  "Peter",
  "Checking",
  100,
  "Open"
);
console.log(jennyRoth);

jasonEphraim.transferBalance(jasonEphraim, jennyRoth, 50);

jennyRoth.withdrawBalance(jennyRoth, 151);

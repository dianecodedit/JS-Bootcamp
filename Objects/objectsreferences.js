let myAccount = {
    name: "Diane",
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

let addIncome = function(account, amount) {
    account.income = account.income + amount;
}

let resetAccount = function(account) {
    account.income = 0;
    account.expenses = 0;
}

let getAccountSummary = function(account) {
    return `Account for ${account.name} has $${account.income - account.expenses}. $${account.income} in income and $${account.expenses} of expenses.`
}


addExpense(myAccount, 2.50)
addIncome(myAccount, 1000)
addExpense(myAccount, 450);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));

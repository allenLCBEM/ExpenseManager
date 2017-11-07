export default (expenses) => {
    return expenses
    .map((expense) => expense.amount)
    .reduce((sum, amt) => sum + amt,0);  
}
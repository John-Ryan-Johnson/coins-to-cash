const piggyBank = {
    quarters: 10,
    nickels: 5,
    dimes: 3, 
    pennies: 16
    
  }
  
  const savingsBank = {
    quarters: 30,
    nickels: 15,
    dimes: 10, 
    pennies: 25


}

let dollarAmount = 0


const addMoney = (bank)=>{
    dollarAmount += bank.quarters * .25
    dollarAmount += bank.nickels * .05
    dollarAmount += bank.dimes * .10
    dollarAmount += bank.pennies * .01
}
    addMoney(savingsBank)

    console.log(`I have ${dollarAmount} in my savingsBank`)
    
    dollarAmount = 0
    
    addMoney(piggyBank)
    
    console.log(`I have ${dollarAmount} in my piggyBank`)

    
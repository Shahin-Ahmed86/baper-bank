// handle deposit button event 

document.getElementById('deposit-button').addEventListener('click', function(){
    // console.log('deposit button click');
    // get the amount deposited 
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    // console.log(depositAmount);

    // update deposit toatal 
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    
    const newDepositTotal = previousDepositAmount +  newDepositAmount;

    depositTotal.innerText = newDepositTotal;

    //  update account blance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear the deposit input field 
    depositInput.value = '';
});

// handle withdraw 
document.getElementById('withdraw-button').addEventListener('click', function(){
    // console.log('withdraw is clicked');
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    // console.log(newWithdrawAmount)

    // set withdraw total 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
          withdrawTotal.innerText = newWithdrawTotal

    // clear withdraw input 
    withdrawInput.value = '';




})
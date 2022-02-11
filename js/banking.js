// function doubleIt() {
//     const result = num * 2;
//     return result;

// }
// const first = doubleIt(5);
// const second = doubleIt(7);



function getInputValue(num) {
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    // clear input field
    depositInput.value = '';
    return depositAmount;
}




document.getElementById('deposit-button').addEventListener('click', function () {

    // const depositInput = document.getElementById('deposit-input');
    // const depositAmountText = depositInput.value;
    // const depositAmount = parseFloat(depositAmountText);
    const depositAmount = getInputValue();

    // get current deposit
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previousDepositTotal + depositAmount;


    // balance update
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount;



})

// withdraw handle 
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);
    console.log(withdrawAmount);

    // get current withdaw balance
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;
    // console.log(withdrawTotalText);


    // update balance after withdraw
    const balanceTotalAmount = document.getElementById('balance-total');
    const previousBalanceTotalText = balanceTotalAmount.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalText);
    balanceTotalAmount.innerText = previousBalanceTotal - withdrawAmount;


    // clear withdraw input field
    withdrawInput.value = '';

    // 

})
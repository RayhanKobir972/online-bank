document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField = document.getElementById('user-withdraw');
    const withdrawAmount = withdrawField.value;
    const newWithdrawAmount = parseFloat(withdrawAmount);

    withdrawField.value = '';
    
    if(isNaN(newWithdrawAmount)){
        alert('Please Provide Valid Number');
        return;
    }

    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalString = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(withdrawTotalString);

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceString);

    

    if(newWithdrawAmount > previousBalanceTotal){
        alert('Baap er Bank e eto taka nai');
        return;
    }

    const newWithdrawTotal = newWithdrawAmount + previousWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    
    balanceTotalElement.innerText = currentBalanceTotal;
})
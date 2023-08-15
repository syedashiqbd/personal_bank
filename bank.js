// Top display box
let depositDisplay = document.getElementById('deposit_display');
let withdrawDisplay = document.getElementById('withdraw_display');
let totalDisplay = document.getElementById('total_display');
// Input box
let depositAmountInput = document.getElementById('dpsit_amnt_inpt');
let withdrawAmountInput = document.getElementById('wtdrw_amnt_inpt');
// Button box
let depositButton = document.getElementById('deposit_btn');
let withdrawButton = document.getElementById('withdraw_btn');

let logoutButton = document.getElementById('logout_btn');

// Deposit amount functionality start
function toDeposit() {
  const depositAmountString = depositAmountInput.value;
  const depositAmount = parseFloat(depositAmountString);

  const prvDepositAmountString = depositDisplay.innerText;
  const prvDepositAmount = parseFloat(prvDepositAmountString);

  const totalDisplayString = totalDisplay.innerText;
  const prvTotalDisplay = parseFloat(totalDisplayString);

  depositAmountInput.value = '';

  if (isNaN(depositAmount)) {
    alert('Please input number');
    return;
  }
  depositDisplay.innerText = prvDepositAmount + depositAmount;
  totalDisplay.innerText = prvTotalDisplay + depositAmount;
}
// Deposit by button
depositButton.addEventListener('click', toDeposit);
// Deposit by Enter
depositAmountInput.addEventListener('keydown', function (event) {
  if (event.key == 'Enter') {
    toDeposit();
  }
});
// Deposit amount functionality end

// Withdraw amount functionality start
function toWithdraw() {
  const withdrawAmountString = withdrawAmountInput.value;
  const withdrawAmount = parseFloat(withdrawAmountString);

  const prvWithdrawAmountString = withdrawDisplay.innerText;
  const prvWithdrawAmount = parseFloat(prvWithdrawAmountString);

  const totalDisplayString = totalDisplay.innerText;
  const prvTotalDisplay = parseFloat(totalDisplayString);

  withdrawAmountInput.value = '';

  if (isNaN(withdrawAmount)) {
    alert('Please input number');
    return;
  }

  if (withdrawAmount > prvTotalDisplay) {
    alert(
      `First deposit $${
        withdrawAmount - prvTotalDisplay
      } than try withdraw $${withdrawAmount}`
    );
    return;
  }
  withdrawDisplay.innerText = prvWithdrawAmount + withdrawAmount;
  totalDisplay.innerText = prvTotalDisplay - withdrawAmount;
}

withdrawButton.addEventListener('click', toWithdraw); //withdraw by button
//withdraw by Enter
withdrawAmountInput.addEventListener('keydown', function (event) {
  if (event.key == 'Enter') {
    toWithdraw();
  }
});

// Withdraw amount functionality end

// LOGOUT FUNCTIONALITY
document.addEventListener('keydown', function (event) {
  if (event.ctrlKey && event.key == 'l') {
    window.location.href = 'index.html';
  }
});

logoutButton.addEventListener('click', function () {
  window.location.href = 'index.html';
});

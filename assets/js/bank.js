//Add money to your account "Button"
function submitMoney() {
  console.log('submitMoney()');
  const add = document.querySelector('#amountToAdd').value;
  let saldo = localStorage.getItem('saldo');
  if (saldo == null) {
    localStorage.setItem('saldo', 0);
    saldo = localStorage.getItem('saldo');
  }
  if (add == 1) {
    console.log('+ 5€');
    const money = parseInt(saldo) + 5;
    localStorage.setItem('saldo', money);
  } else if (add == 2) {
    console.log('+ 10€');
    const money = parseInt(saldo) + 10;
    localStorage.setItem('saldo', money);
  } else if (add == 3) {
    console.log('+ 15€');
    const money = parseInt(saldo) + 15;
    localStorage.setItem('saldo', money);
  } else if (add == 4) {
    console.log('+ 25€');
    const money = parseInt(saldo) + 25;
    localStorage.setItem('saldo', money);
  } else if (add == 5) {
    console.log('+ 50€');
    const money = parseInt(saldo) + 50;
    localStorage.setItem('saldo', money);
  } else console.log(add);
  updateSaldo();
}

//Add money function
function addMoney(amount) {
  console.log(`addMoney(${amount})`);
  const saldo = localStorage.getItem('saldo');
  //Add amount to account
  const nS = parseInt(saldo) + parseInt(amount);
  localStorage.setItem('saldo', nS);
  updateSaldo()
}

//take all money out off your account
function takeMoney(amount) {
  if (amount == 0) {
    console.log('takeMoney()');
    console.log(localStorage.getItem('saldo'));
    console.log('removing Money');
    localStorage.setItem('saldo', 0);
    console.log(localStorage.getItem('saldo') + " You now have this much on your account");
    updateSaldo();
  } else {
    console.log('takeMoney()');
    console.log(localStorage.getItem('saldo'));
    console.log('removing Money');
    const cS = parseInt(localStorage.getItem('saldo'))
    let nS = cS - amount;
    if (nS < 0) nS = 0;
    localStorage.setItem('saldo', nS);
    console.log(localStorage.getItem('saldo') + " You now have this much on your account");
    updateSaldo();
  }

}

//update money on site 
function updateSaldo() {
  document.querySelector('#money').innerHTML = localStorage.getItem('saldo') + '€';
}
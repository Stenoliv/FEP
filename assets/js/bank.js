
//funktion för att läsa in saldot från localCookie
function geSaldo(saldo) {
    let namn = saldo + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    console.log(decodedCookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(namn) == 0) {
        return c.substring(namn.length, c.length);
      }
    }
    return "";
  }

  //funktion för att tömma saldot
  function tomSaldo(saldo) {
    const currentSaldo = geSaldo(saldo);
    const d = new Date();
    d.setTime(d.getTime() - (365*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();

    document.cookie = saldo + "=" + 0 + ";" + expires + ";path=/";

    updateraSaldo();
    }

    //funktion för att updatera saldot på kontot
  function angeSaldo(saldo,value,exdag) {
    const currentSaldo = geSaldo('saldo');
    const d = new Date();
    d.setTime(d.getTime() + (exdag*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    let nyttSaldo = Number(value) + Number(currentSaldo);
    
    document.cookie = saldo + "=" + nyttSaldo + ";" + expires + ";path=/";
  }

  //funktion för att updatera saldot på bank sidan.
function updateraSaldo() {
    let nyaSaldot = geSaldo("saldo");
    if (nyaSaldot != "") {
      document.getElementById("saldo").innerText = nyaSaldot;
    } else {
        document.getElementById("saldo").innerText = "0";
    }
  };

document.getElementById("5Euro").addEventListener("click", function(){
    angeSaldo('saldo', 5, 10);
    updateraSaldo();
});
document.getElementById("15Euro").addEventListener("click", function(){
    angeSaldo('saldo', 15, 10);
    updateraSaldo();
});
document.getElementById("25Euro").addEventListener("click", function(){
    angeSaldo('saldo', 25, 10);
    updateraSaldo();
});
document.getElementById("50Euro").addEventListener("click", function(){
    angeSaldo('saldo', 50, 10);
    updateraSaldo();
});
document.getElementById("Tom").addEventListener("click", function(){
    tomSaldo('saldo');
});
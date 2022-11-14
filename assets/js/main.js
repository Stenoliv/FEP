/* Site-wide JS i den här filen (t.ex. huvudmenyn) */

console.log('main.js init'); // För att se att skriptet laddats in

//Funktion för att skapa användarnamn
document.querySelector("#submit-btn").addEventListener('click', function (submit)
{
    
    let firstname = document.querySelector("#firstnamne").value;
    let lastname = document.querySelector("#lastname").value;
    let use1 = firstname.slice(0, 3);
    let use2 = lastname.slice(0, 4);
    let usrn = use2.concat(use1);
    usrn = usrn.toLowerCase();
    let output = ("Your username is: " + usrn);
    document.querySelector('#out').innerText = output;
});

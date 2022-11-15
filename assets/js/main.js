/* Site-wide JS i den här filen (t.ex. huvudmenyn) */

console.log('main.js init'); // För att se att skriptet laddats in

setInterval(function()
{
    let d = new Date();
    if(d == Date || d== "saturday");
    {
        window.open(/assets/pages/closed);
    }
}, 1000);

setInterval(function()
{
    let t = new Date();
    t = t.toUTCString();
    t = t.slice(0,26);
    document.querySelector('.clock').innerText = t ;
    
}, 1000);

//Funktion för att skapa användarnamn
document.querySelector("submit-btn").addEventListener('click', function (submit)
{
    
    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let age = document.getElementById('age').value;
    
    if(firstname == "")
    {
        alert("Please enter a firstname!");
    }
    if(lastname == "")
    {
        alert("Please enter a lastname!");
    }
    if(age < 18)
    {
        alert("You are too young to play go away!")
    }
    else
    {
    let use1 = firstname.slice(0, 3);
    let use2 = lastname.slice(0, 4);
    let usrn = use2.concat(use1);
    usrn = usrn.toLowerCase();
    let output = ("Hello " + firstname + " your username is: " + usrn);
    document.querySelector('#out').innerText = output;
    }
});

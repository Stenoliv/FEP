/* Site-wide JS i den här filen (t.ex. huvudmenyn) */

console.log('main.js init'); // För att se att skriptet laddats in
//Boolen manual is the main switch for if the casino is open / 0 means it is closed, 1 means it is open:
let manual = 0;
var auto = 1;
let info; 
close = new Date()

setInterval (function wknd()
{
    if(close.getDay()=== 6 || close.getDay() === 0 || manual == 0)
    {
        auto = 0 
        console.log("if runs")
        window.open(src = "http://127.0.0.1:5500/pages/closed.html","_self")
    }
    else
    {
        auto = 1
    }
    console.log(manual);
    console.log(auto);
},100)
    
//clock
setInterval(function()
{
    let t = new Date();
    t = t.toUTCString();
    t = t.slice(0,26);
    document.querySelector('.clock').innerText = t ;
    
}, 1000);

//Funktion för att skapa användarnamn
document.querySelector("#submit-btn").addEventListener('click', submit);
function submit()
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
    let output = ("Hello " + firstname + " your username is: " + usrn + "Welcome to Razver!");
    document.querySelector('#out').innerText = output;
    }
};

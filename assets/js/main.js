/* Site-wide JS i den här filen (t.ex. huvudmenyn) */

console.log('main.js init'); // För att se att skriptet laddats in
//Boolen manual is the main switch for if the casino is open / 0 means it is closed, 1 means it is open:
let manual = 1;
var auto = 1;
let info; 
close = new Date();

document.addEventListener("DOMContentLoaded",function wknd()
{
    if(close.getDay()=== 6 || close.getDay() === 0 || manual == 0)
    {
        auto = 0 ;
        document.querySelector('#makeuser').style.display = 'none';
        document.querySelector('#nav').style.display = 'none';
        document.querySelector('#textopen').style.display = 'none'
        document.querySelector('#textclosed').style.display = 'flex'
    }
    else
    {
        auto = 1;
    }
    console.log(manual);
    console.log(auto);
});

//Time until open
//calculate time between now and next monday at 00:01
var open = new Date();
open.setDate((open.getDate()+(1+7-open.getDay())%7));
open.setHours(0,1,0,0)

//Convert the time from milliseconds to hh/mm/ss
setInterval(() => 
{
    
    var now = new Date();
    
    let time = open - now;

        let s,m,h;
        s = Math.floor(time / 1000);
        m = Math.floor(s/60);
        h = Math.floor(m/60);
        
        s = s % 60;
        m = m % 60;
        
        
        document.querySelector("#openIn").innerText = h + " Hours " + m + " Minutes " + s + " Seconds ";
        
}, 100);

    
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
    let output = ("Hello " + firstname + " your username is: " + usrn + " Welcome to Razver!");
    document.querySelector('#out').innerText = output;
    }
};

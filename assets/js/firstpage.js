//Funktion för att skapa användarnamn
const user = localStorage.getItem("usrname");
if(user !=null)
{
    document.querySelector('#out').innerText = "Welcome back "+ user + "!";
    document.querySelector('#olduser').style.display = 'flex';
    document.querySelector('#newuser').style.display = 'none';
}
else{
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
        alert("You are too young to play go away!");
    }
    else
    {
    let use1 = firstname.slice(0, 3);
    let use2 = lastname.slice(0, 4);
    let usrn = use2.concat(use1);
    usrn = usrn.toLowerCase();
    let output = ("Hello " + firstname + " your username is: " + usrn + ", Welcome to Razver!");
    document.querySelector('#out').innerText = output;
    localStorage.setItem("usrname",usrn);
    }
};
}
//Check what day it is and make it active in the daychanger
document.addEventListener('DOMContentLoaded', when)
function when()
{
    const days = ["0","1","2","3","4","5","6"];
    for(let i = 0 ; weekend.getDay() != i -1; i++)
    {
        function whatDay() 
        {
            const day = document.querySelector('#days');
            day.value = days[i];
        }
        whatDay()
    }
};

//Changes the day based on selected day in the selector

document.querySelector('#days').addEventListener('change', function cd()
{
    const rn = document.querySelector("#days").value;
    let k = rn - weekend.getDay();
    weekend.setDate(weekend.getDate()+k)
    wknd();
})

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

/* Site-wide JS i den här filen (t.ex. huvudmenyn) */

console.log('main.js init'); // För att se att skriptet laddats in
//Boolen manual is the main switch for if the casino is open / 0 means it is closed, 1 means it is open:
let manual = 1;
var auto = 1;
let info; 
weekend = new Date();
function wknd()
{
    if(weekend.getDay()=== 6 || weekend.getDay() === 0 || manual == 0)
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
}
document.addEventListener('DOMContentLoaded',wknd);

//Check what day it is and make it active in the daychanger
const days = ["sun","mon","tue","wed","thu","fri","sat"];
for(let i = 0 ; weekend.getDay() != i ; i++)
{
    console.log(i);
    function whatDay() 
    {
        const day = document.querySelector('#days');
        day.value = days[i];
    }
};

//Changes the day based on selected day in the selector
for(let i = 0; i != document.querySelector("#days").selectedIndex; i++)
{
    
    weekend.setDate((document.querySelector("#days").selectedIndex)-1)

    console.log(weekend);

    wknd();
}

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



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
        document.querySelector('#textopen').style.display = 'none';
        document.querySelector('#textclosed').style.display = 'flex';
    }
    else
    {
        auto = 1;
    }
    console.log(manual);
    console.log(auto);
}
document.addEventListener('DOMContentLoaded',wknd);

//clock
setInterval(function()
{
    let t = new Date();
    t = t.toUTCString();
    t = t.slice(0,26);
    document.querySelector('.clock').innerText = t ;
    
}, 1000);


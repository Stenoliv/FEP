/* Site-wide JS i den här filen (t.ex. huvudmenyn) */

console.log('main.js init'); // För att se att skriptet laddats in
//Boolen manual is the main switch for if the casino is open / 0 means it is closed, 1 means it is open:
let manual = 1;

weekend = new Date();
console.log(weekend);

function wknd()
{
    const adr =window.location.pathname.split("/");
    if(weekend.getDay()=== 6 || weekend.getDay() === 0 || manual == 0)
    {
        window.location.replace("../pages/closed.html");
    }
    else if(weekend.getDay()===1,2,3,4,5 && adr[2] =="closed.html")
    {
        window.location.replace("../index.html");
    }
    console.log(weekend);
}
document.addEventListener('DOMContentLoaded',wknd);

//clock
setInterval(function()
{
    let t = new Date();
    t = t.toString();
    t = t.slice(0,25);
    document.querySelector('.clock').innerText = t ;
    
}, 1000);

//navigation
const navelements = [
    {menuTitle: "Home", url:"../index.html"},
    {menuTitle: "Gallery", url:"../pages/gallery.html"},
    {menuTitle: "RPS", url:"../pages/ssp.html"},
    {menuTitle: "Memgame", url:"../pages/memgame.html"}
];
    for (item of navelements) {
        document.querySelector('#navbar123').innerHTML += `
            <a class="stylenav" href="${item.url}">${item.menuTitle}</a>
        `;
    }
    

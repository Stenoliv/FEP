/* Site-wide JS i den här filen (t.ex. huvudmenyn) */

console.log('main.js init'); // För att se att skriptet laddats in
//Boolen manual is the main switch for if the casino is open / 0 means it is in neutral so decided by date, 1 means it is open, and 2 means it is closed.
let manual = 1;

weekend = new Date();
console.log(weekend);
const adr =window.location.pathname.split("/");
function wknd()
{
    if(manual > 0)
    {
        if(manual == 1 && adr[2] == "closed.html")
        {
            window.location.replace("../index.html")
        }
        else if(manual == 2 && adr[1] == "index.html")
        {
            window.location.replace("../pages/closed.html")
        }
    }
    else if (manual == 0)
    {
        if(weekend.getDay()=== 6 || weekend.getDay() === 0 || manual == 0)
        {
            window.location.replace("../pages/closed.html");
        }
        else if(weekend.getDay()===1,2,3,4,5 && adr[1] =="closed.html" && manual!= 1)
        {
            window.location.replace("../index.html");
        }
    }
}
if(adr[2] == "closed.html" && manual !=0 || adr[1] == "index.html" && manual != 0)
{
    wknd();
}
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
    {menuTitle: "Memgame", url:"../pages/mspel.html"}
];
    for (item of navelements) {
        document.querySelector('#navbar123').innerHTML += `
            <a class="stylenav" href="${item.url}">${item.menuTitle}</a>
        `;
    }
    

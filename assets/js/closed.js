//Time until open
//calculate time between now and next monday at 00:01
var open = new Date();
open.setDate((open.getDate()+(1+7-open.getDay())%7)||7);
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
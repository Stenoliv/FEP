/* Site-wide JS i den här filen (t.ex. huvudmenyn) */

console.log('main.js init'); // För att se att skriptet laddats in
//Boolen manual is the main switch for if the casino is open / 0 means it is in neutral so decided by date, 1 means it is open, and 2 means it is closed.
let manual = 0;

weekend = new Date();
console.log(weekend);

const adr = window.location.pathname.split("/");
function wknd() {
    if (manual > 0) {
        if (manual == 1 && adr[adr.length -1] == "closed.html") {
            window.location.replace("./index.html")
        }
        else if (manual == 2 && adr[adr.length -1] == "index.html") {
            window.location.replace("./closed.html")
        }
    }
    else if (manual == 0) {
        if (weekend.getDay() === 6 || weekend.getDay() === 0) {
            if(adr[adr.length -1]!= "closed.html"){
            window.location.replace("./closed.html");
            }
        }
        else if (weekend.getDay() === 1, 2, 3, 4, 5 && adr[adr.length -1] == "closed.html" && manual != 1) {
            if(adr[adr.length -1]=="closed.html"){
            window.location.replace("./index.html");
            }
        }
    }
}
if (adr[adr.length -1] == "closed.html" && manual != 0 || adr[adr.length -1] == "index.html" && manual != 0) {
    wknd();
}
else if (manual == 0) {
    //checks once a minute if casino needs to be open or closed
    setInterval(function () {
        wknd()
    }, 60000)

}
addEventListener("DOMContentLoaded",wknd());
//clock
setInterval(function () {
    let t = new Date();
    t = t.toString();
    t = t.slice(0, 25);
    document.querySelector('.clock').innerText = t;

}, 1000);

//navigation
const navelements = [
    { menuTitle: "Home", url: "../pages/index.html" },
    { menuTitle: "Gallery", url: "../pages/gallery.html" },
    { menuTitle: "RPS", url: "../pages/ssp.html" },
    { menuTitle: "Memgame", url: "../pages/mspel.html" }
];
for (item of navelements) {
    document.querySelector('#navbar123').innerHTML += `
            <a class="stylenav" href="${item.url}">${item.menuTitle}</a>
        `;
}


//UserTracking Script

//Wait for page to load
window.addEventListener('load', init)

let browser;
let platform;
let lang;
let ScreenResolution;
let windowSize;
let long;
let lat;

//Get all user tracking info
function init() {
    console.log("init()")
    //Check browser
    if(navigator.userAgent.indexOf("Safari") > -1) browser = "Safari";
    if(navigator.userAgent.indexOf("Chrome") > -1) browser = "Chrome";
    if(navigator.userAgent.indexOf("MSIE") > -1) browser = "Internet Explorer";
    if(navigator.userAgent.indexOf("rv:") > -1) browser = "Internet Explorer";
    if(navigator.userAgent.indexOf("Firefox") > -1) browser = "Firefox";
    if(navigator.userAgent.indexOf("OP") > -1) browser = "Opera";
    if(navigator.userAgent.indexOf("Brave") > -1) browser = "Brave";
    //Check platform
    platform = navigator.platform;
    //Check language
    lang = navigator.language;
    //Screen resolution
    ScreenResolution = screen.width + "x" + screen.height;
    //Window resolution
    windowSize = window.innerWidth + "x" + window.innerHeight;
    //long & lat
    navigator.geolocation.getCurrentPosition(function(position) {
        long = position.coords.longitude;
        lat = position.coords.latitude;
        logUserInfo(true);
    },
    function(error) {
        if(error.code == error.PERMISSION_DENIED)
            logUserInfo(false);
    });

    
}

function logUserInfo(geolocation) {
    if (geolocation) {
        console.log("This is a log of tracked user data on our website: " + "Your Browser/" + browser + " : Your Platform/" + platform + " : Your language/" + lang +" : Your Monitor Resolution/" + ScreenResolution + " : Current Windows Size/" + windowSize + " : Longitude/" + long + " : Latitude/" + lat);
    } else console.log("This is a log of tracked user data on our website: " + "Your Browser/" + browser + " : Your Platform/" + platform + " : Your language/" + lang +" : Your Monitor Resolution/" + ScreenResolution + " : Current Windows Size/" + windowSize + " : Couldn't get geoLocation")
}
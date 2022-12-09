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
        console.log("This is a log of tracked user data on our website" + browser + " : " + platform + " : " + lang +" : " + ScreenResolution + " : " + windowSize + " : " + long + " : " + lat);
    } else console.log("This is a log of tracked user data on our website" + browser + " : " + platform + " : " + lang +" : " + ScreenResolution + " : " + windowSize + " : Couldn't get geoLocation")
}
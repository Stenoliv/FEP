//Check what day it is and make it active in the daychanger
document.addEventListener('DOMContentLoaded', when)
function when() {
    let i = 0;
    const days = ["0", "1", "2", "3", "4", "5", "6"];
    var fxday = weekend.getDay();

    for (i = 0; fxday != i - 1; i++) {
        function whatDay() {
            const day = document.querySelector('#days');
            day.value = days[i];
        }
        whatDay();
    }
};

//Changes the day based on selected day in the selector

document.querySelector('#days').addEventListener('change', function cd() {
    const rn = document.querySelector("#days").value;
    let k = rn - weekend.getDay();
    weekend.setDate(weekend.getDate() + k)
    when();
    wknd();
})
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
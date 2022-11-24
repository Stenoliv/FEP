
setInterval(function()
{
    now = new Date();
    choice = document.querySelector('#days').value
    
    if(choice.value == document.querySelector('#mon'))
    {
        Set.Date = 1;
    }
},10000)
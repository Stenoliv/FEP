document.querySelector(".cm").addEventListener('click', monday)
{
    function monday()
    {
        mon = new Date()
        
        if (mon.getDay()!= 1)
        {
            mon.setDate(11);
            
        }
    }
    console.log(mon.getDay());
}



//Changes backgroundcolour of the page with a select menu with a few alternatives
document.querySelector("#colorchange").addEventListener('click', function ()
{
    if (document.querySelector("#colormenu").style.display == 'flex')
    {
    document.querySelector("#colormenu").style.display = 'none';
    if(document.querySelector('#daychange')!= undefined)
    {
        document.querySelector("#daychange").style.display = 'none'
    }
    }
    else
    {
        document.querySelector("#colormenu").style.display = 'flex';
        if(document.querySelector('#daychange')!= undefined)
        {
            document.querySelector("#daychange").style.display = 'flex'
        }
    }
});

document.body.style.backgroundColor = localStorage.getItem("background");

if(document.querySelector('.mainsec')!=undefined)
{
    document.querySelector('.mainsec').style.backgroundColor = localStorage.getItem("background");
}
if(document.querySelector('.gamebar')!=undefined)
    {
        document.querySelector('.gamebar').style.backgroundColor = localStorage.getItem("background");
    }
document.body.style.color = localStorage.getItem("textcolour");
document.querySelector("#colors").value = localStorage.getItem("activesel");
document.querySelector("#red").value = localStorage.getItem("red");
document.querySelector("#green").value = localStorage.getItem("green");
document.querySelector("#blue").value = localStorage.getItem("blue");


document.querySelector('#colors').addEventListener('change', function cd() {
    let active = document.querySelector("#colors").value;
    const colorArr = ['#EAEAEA', '#22005D', '#345DB0', '#CC3A64', '#2D2D2D'];
    let i = active;
    
    document.querySelector('body').style.backgroundColor = colorArr[i];
    if(document.querySelector('.gamebar')!=undefined)
    {
        document.querySelector('.gamebar').style.backgroundColor = colorArr[i];
    }
    if(document.querySelector('.mainsec')!=undefined)
    {
        document.querySelector('.mainsec').style.backgroundColor = colorArr[i];
    }
    localStorage.setItem("background", colorArr[i]);
    localStorage.setItem("activesel", i);
})

//change text colour
function textcolor() {
    let r = document.querySelector('#red').value;
    let g = document.querySelector('#green').value;
    let b = document.querySelector('#blue').value;
    let rgb = 'rgb(' + r + ',' + g + ',' + b + ')';

    document.body.style.color = rgb;

    localStorage.setItem("textcolour", rgb);
    localStorage.setItem("red", r);
    localStorage.setItem("green", g);
    localStorage.setItem("blue", b);
}
document.getElementById('red').addEventListener('input', textcolor);
document.getElementById('green').addEventListener('input', textcolor);
document.getElementById('blue').addEventListener('input', textcolor);
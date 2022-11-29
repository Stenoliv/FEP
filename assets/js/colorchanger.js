
//Changes backgroundcolour of the page with a select menu with a few alternatives
document.body.style.backgroundColor = localStorage.getItem("background");
document.body.style.color = localStorage.getItem("textcolour");

document.querySelector('#colors').addEventListener('change', function cd()
{
    let active = document.querySelector("#colors").value;
    const colorArr = ['#F0FFD3','#22005D','#A2FFFF','#FF0080','#2D2D2D'];
    i = active;
    console.log(active);
    console.log(i);
    document.querySelector('body').style.backgroundColor = colorArr[i];
    localStorage.setItem("background", colorArr[i]);
})

//change text colour
function textcolor()
{
    let r = document.querySelector('#red').value;
    let g = document.querySelector('#green').value;
    let b = document.querySelector('#blue').value;
    let rgb = 'rgb(' + r + ',' + g + ',' + b +')';

    document.body.style.color = rgb;
    localStorage.setItem("textcolour", rgb);
}
document.getElementById('red').addEventListener('input',textcolor);
document.getElementById('green').addEventListener('input',textcolor);
document.getElementById('blue').addEventListener('input',textcolor);
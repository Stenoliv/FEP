
//Changes backgroundcolour of the page with a select menu with a few alternatives
let active = document.querySelector("#colors").value;
const colorArr = ["white","purple","blue","green","black"];
for(i = 0; active !=i -1; i++)
{
    document.querySelector('body').style.backgroundColor = colorArr[i];
}
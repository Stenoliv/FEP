//Get username from localstorage and display welcome back message
const user = localStorage.getItem("usrname");
if (user != null) {
    document.querySelector('#out').innerText = "Welcome back " + user + "!";
    document.querySelector('#olduser').style.display = 'flex';
    document.querySelector('#newuser').style.display = 'none';
}
//user creation for new users
else {
    document.querySelector("#submit-btn").addEventListener('click', submit);
    function submit() {
        let firstname = document.getElementById('firstname').value;
        let lastname = document.getElementById('lastname').value;
        let age = document.getElementById('age').value;

        if (firstname == "") {
            alert("Please enter a firstname!");
        }
        if (lastname == "") {
            alert("Please enter a lastname!");
        }
        if (age < 18) {
            alert("You are too young to play go away!");
        }
        else {
            let use1 = firstname.slice(0, 3);
            let use2 = lastname.slice(0, 4);
            let usrn = use2.concat(use1);
            usrn = usrn.toLowerCase();
            let output = ("Hello " + firstname + " your username is: " + usrn + ", Welcome to Razver!");
            document.querySelector('#out').innerText = output;
            localStorage.setItem("usrname", usrn);
            localStorage.setItem("usersage", age);
        }
    };
}
//To open different sides when clicking icons on the first page
document.querySelector("#memgame").addEventListener('click', function () {
    window.location.assign("./pages/mspel.html");
})
document.querySelector("#rpsgame").addEventListener('click', function () {
    window.location.assign("./pages/ssp.html");
})

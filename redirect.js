function redirect() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email == "admin@gmail.com" && password == "user") {
        window.location.replace("all.html");
    }
    else {
        alert("Invalid information");
        return;
    }
}

function redirect2(){
    window.location.replace("questionnaire.html");
}
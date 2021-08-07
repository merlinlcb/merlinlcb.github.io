function function1() {
    document.getElementById("nav1").classList.add("active");
    document.getElementById("nav3").classList.remove("active");
    document.getElementById("nav2").classList.remove("active");
    var x = document.getElementById("homediv");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "block";
    }

    var x = document.getElementById("aboutme");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "none";
    }

    var x = document.getElementById("contactme");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "none";
    }
}
function function2() {
    document.getElementById("nav1").classList.remove("active");
    document.getElementById("nav3").classList.remove("active");
    document.getElementById("nav2").classList.add("active");
    var x = document.getElementById("aboutme");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "block";
    }

    var x = document.getElementById("homediv");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "none";
    }

    var x = document.getElementById("contactme");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "none";
    }
}
function function3() {
    document.getElementById("nav1").classList.remove("active");
    document.getElementById("nav3").classList.add("active");
    document.getElementById("nav2").classList.remove("active");
    var x = document.getElementById("contactme");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "block";
    }

    var x = document.getElementById("aboutme");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "none";
    }

    var x = document.getElementById("homediv");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "none";
    }
}

function validateName() {
    var name = document.getElementById('name').value;
    if(name.length == 0) {
        alert("Name can't be blank") ;
        return false;

    }
    if (!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
        alert("Please enter your correct name") ;//Validation Message
        return false;
    }
    return true;
}

function validatePhone() {
    var phone = document.getElementById('phone').value;
    return true;

}

function validateEmail () {

    var email = document.getElementById('email').value;
    if(email.length == 0) {
        alert("Email can't be blank") ;//Validation Message
        return false;

    }

    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        alert("Please enter a correct email address") ;//Validation Message
        return false;

    }

    return true;

}


function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail()) {

        alert("Form not submitted");//Validation Message
        return false;
    }
    else {
        submitted=true;
        return true;
    }
}

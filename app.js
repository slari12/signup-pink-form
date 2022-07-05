var fname = document.forms["myform"]["firstname"];
var lname = document.forms["myform"]["lastname"];
var email = document.forms["myform"]["email"];
var pass = document.forms["myform"]["pass"];
var btn = document.forms["myform"]["btn"];

var fname_error = document.getElementById("fname_error");
var lname_error = document.getElementById("lname_error");
var email_error = document.getElementById("email_error");
var pass_error = document.getElementById("pass_error");

//add eventlistener
fname.addEventListener("blur", fnameVerify, true);
lname.addEventListener("blur", lnameVerify, true);
email.addEventListener("blur", emailVerify, true);
pass.addEventListener("blur", passVerify, true);


function FormValidation(){
    if(fname.value == ""){
        fname.style.border = "solid 2px red";
        fname_error.textContent = "Section must be filled";
        fname_error.style.color = "red";
        return false;
    }
    if(lname.value == ""){
        lname.style.border = "solid 2px red";
        lname_error.textContent = "Section must be filled";
        lname_error.style.color = "red";
        return false;
    }
    if(email.value == ""){
        email.style.border = "solid 2px red";
        email_error.textContent = "Section must be filled";
        email_error.style.color = "red";
        return false;
    }
    if(pass.value == ""){
        pass.style.border = "solid 2px red";
        pass_error.textContent = "Section must be filled";
        pass_error.style.color = "red";
        return false;
    }
}
function fnameVerify(){
    if(fname.value != ""){
        fname.style.border = "solid 2px #C9D6DF";
        fname_error.innerHTML = "";
        return true;
    }
}
function lnameVerify(){
    if(lname.value != ""){
        lname.style.border = "solid 2px #C9D6DF";
        lname_error.innerHTML = "";
        return true;
    }
}
function emailVerify(){
    if(!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value))){
        // css dito
        email.style.border = "solid 2px red";
        email_error.style.color = "red";
        email_error.innerHTML = "Looks like this is not a valid email";
        return true;
      }else{
        // email.style.border = "solid 2px #C9D6DF";
        email_error.innerHTML = "";
        return true;
      }
}
function passVerify(){
    if(pass.value != ""){
        pass.style.border = "solid 2px #C9D6DF";
        pass_error.innerHTML = "";
        return true;
    }
}
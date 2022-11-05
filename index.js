let first_name=document.getElementById("firstname").value;
let lastname=document.getElementById("lastname").value;
let number=document.getElementById("phone").value;
let email=document.getElementById("email").value;
let country=document.getElementById("country").value;
let role=document.getElementById("role").value;
let password=document.getElementById("password").value;
let confirm_passward=document.getElementById("confirm_password").value;

document.addEventListener("submit",function(){


event.preventDefault();
var letters = /^[A-Za-z]+$/;
if(first_name.value.match(letters))
  {
   if(lastname.value.match(letters))
     {
      if(!(isNaN(number))){
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(email.match(mailformat)){
            if(verifyPassword(password)){
                if(password == confirm_passward){

                }else{
                    alert("passward is not match to original password");        
                }
            }else{
                alert("passward is not valid valid");    
            }

        }else{
            alert("mail is not valid");
        }
      }else{
        alert("number is not valid ");
      }
     }else{
        alert("lastname is not valid");
    }
    
}else{
    alert("first_name is not valid");
}

    console.log(lastname);
    console.log(number);
    console.log(email);
    console.log(country);
    console.log(role);
    console.log(password);
    console.log(confirm_password);


});

function verifyPassword(pass) {  
    var pw =pass;
    //check empty password field  
    if(pw == "") {  
       document.getElementById("message").innerHTML = "**Fill the password please!";  
       return false;  
    }  
     
   //minimum password length validation  
    if(pw.length < 8) {  
       document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";  
       return false;  
    } 
    if(pw.length > 15) {  
        document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";  
        return false;  
     } else {  
        return true;
     }   
}
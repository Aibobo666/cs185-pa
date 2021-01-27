//Image modal
var modal = document.querySelector(".modal");
var previews = document.querySelectorAll(".gallery img");
var original = document.querySelector('.modal-img');

for (var i = 0; i < previews.length; i++) {
    var img = previews[i];

    img.onclick = function(e) {
        modal.classList.add("open");
        original.src = this.src;
    }
}

modal.addEventListener("click", (e) => {
    if(e.target.classList.contains("modal")){
        modal.classList.remove("open");
        original.classList.remove("open");
    }
});

//scroll-to-top button
var myButton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop > 0.25*(document.body.scrollHeight) || 
        document.documentElement.scrollTop > 0.25*(document.documentElement.scrollHeight)){
            myButton.style.display = "block";
        }else{
            myButton.style.display = "none";
        }
}

function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//emial validation
function ValidateEmail(inputText)
{
    // var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(inputText.value.match(mailformat))
    {
    alert("Email successfully recorded");    //The pop up alert for a valid email address
    document.form1.Email.focus();
    return true;
    }
    else
    {
    alert("Invalid email address");    //The pop up alert for an invalid email address
    document.form1.Email.focus();
    return false;
    }
}




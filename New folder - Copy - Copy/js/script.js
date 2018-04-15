var account = document.querySelector(".account");
var input = document.querySelector(".password");

document.addEventListener("keydown", function(event){
    if(event.ctrlKey && event.which==77){
        account.classList.add("active");
    }

});
 var password ="123";




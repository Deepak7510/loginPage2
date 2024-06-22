const password = document.querySelector("#password");
const show = document.querySelector("#show");

show.addEventListener("click", function () {
    if (password.type === "password") {
        password.type = "text"
    }
    else if(password.type==="text"){
        password.type="Password"
    }
});

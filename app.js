// const scrollUp = document.querySelector("#scroll");

// // scroll to top functionality
// scrollUp.addEventListener("click", () => {
//     window.scrollTo({
//     top: 0,
//     left: 0,
//     behavior: "smooth",
//     });
// });

$(document).ready(function() {


        $(window).scroll(function() {

            if($(this).scrollTop() > 40) {
                $('#scrollBtn').fadeIn();
                } else {
                $('#scrollBtn').fadeout();
                }


        });

        $("#scrollBtn").click(function(){
                $('html, body').animate({scrollTop: 0},800);
        });
        
        });

function setFormMessage(formElement, type,message){
        const messageElement = formElement.querySelector('.form__message');

        messageElement.textContent = message;
        messageElement.classList.remove('form__message--success','form__message--error');
        messageElement.classList.add('form__message${type}');
}

// setFormMessage(loginForm,"success","You're logged in!");
function setInputError(inputElement,message) {
        inputElement.classList.add("form__input--error");
        inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement){
        inputElement.classList.remove("form__input--error");
        inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";

}

document.addEventListener('DOMContentLoaded', () => {
        const loginForm = document.querySelector('#login');
        const createAccountForm = document.querySelector('#createAccount');

        document.querySelector('#linkCreateAccount').addEventListener('click', e => {
                e.preventDefault();
                loginForm.classList.add('form--hidden');
                createAccountForm.classList.remove('form--hidden');
        });


        document.querySelector('#linkLogin').addEventListener('click', e => {
                e.preventDefault();
                loginForm.classList.remove('form--hidden');
                createAccountForm.classList.add('form--hidden');
        }); 

        loginForm.addEventListener('submit', e => {
                e.preventDefault();

                //ajax fetch the account login

                setFormMessage(loginForm,"error","Invalid username or password");
        });


        document.querySelectorAll(".form__input").forEach(inputElement => {
                inputElement.addEventListener("blur", e => {
                        if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 5) {
                                setInputError(inputElement, "Username must be at least 5 characters long");
                        }
                });


                inputElement.addEventListener("input", e => {
                        clearInputError(inputElement);
                });
        });

});
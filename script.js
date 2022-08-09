let menu = document.querySelector('#mobile-menu');
let menuLinks = document.querySelector('.nav-menu');

menu.addEventListener('click', () =>{

    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

)


// Modal items

const modal = document.getElementById('email-modal');
const openBtn = document.querySelector('.main-btn');
const closeBtn = document.querySelector('.close-btn');
openBtn.addEventListener('click', function(){
    modal.style.display = 'block'
})
closeBtn.addEventListener('click', function(){
    modal.style.display = 'none'
})

// Form validation


const form = document.getElementById('form');
const Name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password_confirm = document.getElementById('password-confirm');

// Show error

function showError(input, message){
    const formValidation = input.parentElement;
    formValidation.className = 'form-validation error';

    const errorMessage = formValidation.querySelector('p');
    errorMessage.innerText = message;


}
// check required fields

function checkRequired(inputArr){
   inputArr.forEach( 
    function(input){
        if(input.value.trim() === ''){
            showError(input, `${getFieldName(input)} is required` );
        }
        else{
            showvalid(input);

        }
    }
   )}
//     showvalid

function showvalid(input){
    const formvalidation = input.parentElement;
    formvalidation.className = 'form-validation valid';
}

// event listeners 

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    checkRequired([Name,  email, password, password_confirm ])
    checkLength(Name, 3, 30);
    
    checkLength(password, 8, 20);
    checkLength(password_confirm, 8, 20);
    checkPasswords(password, password_confirm);


})

// getFieldname

function getFieldName(input){

    return input.name.charAt(0).toUpperCase() + input.name.slice(1);
   

}

// checklength

function checkLength(input, min, max){

    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be atleast ${min} characters`)
    }
    if(input.value.length > max){
        showError(input, `${getFieldName(input)} should be less than ${max} characters`)
    }

}

// password are equal/unequal

function checkPasswords(input1, input2){
    if(input2.value !== input1.value){
        showError(input2,` Passwords not matched `)
    }
}






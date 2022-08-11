const e = require("express")

const loginForm = document.querySelector('#loginForm')
const usernameInput = document.querySelector('#username')

async function submitHandler(e){
    e.preventDefault()
    try {
        const response = await fetch('/login')
        await fetch('/')
    } catch (error) {
        console.log(error);
    }
   
}

loginForm.addEventListener('submit', submitHandler);

function validateForm(event){
    event.preventDefault()

    let isValid = true

    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let phone = document.getElementById("phone").value

    document.getElementById("nameError").innerText = ""
    document.getElementById("emailError").innerText = ""
    document.getElementById("passwordError").innerText = ""
    document.getElementById("phoneError").innerText = ""
    document.getElementById("successMsg").innerText = ""

    if(name == ""){
        document.getElementById("nameError").innerText = "name is required"
        document.getElementById("name").className = "invalid"
        isValid = false
    } else if(name.length < 3){
        document.getElementById("nameError").innerText = "name must be at least 3 characters"
        document.getElementById("name").className = "invalid"
        isValid = false
    } else {
        document.getElementById("name").className = "valid"
    }

    if(email == ""){
        document.getElementById("emailError").innerText = "email is required"
        document.getElementById("email").className = "invalid"
        isValid = false
    } else if(!email.includes("@") || !email.includes(".")){
        document.getElementById("emailError").innerText = "please enter a valid email"
        document.getElementById("email").className = "invalid"
        isValid = false
    } else {
        document.getElementById("email").className = "valid"
    }

    if(password == ""){
        document.getElementById("passwordError").innerText = "password is required"
        document.getElementById("password").className = "invalid"
        isValid = false
    } else if(password.length < 6){
        document.getElementById("passwordError").innerText = "password must be at least 6 characters"
        document.getElementById("password").className = "invalid"
        isValid = false
    } else {
        document.getElementById("password").className = "valid"
    }

    if(phone == ""){
        document.getElementById("phoneError").innerText = "phone number is required"
        document.getElementById("phone").className = "invalid"
        isValid = false
    } else if(phone.length < 10){
        document.getElementById("phoneError").innerText = "please enter a valid phone number"
        document.getElementById("phone").className = "invalid"
        isValid = false
    } else {
        document.getElementById("phone").className = "valid"
    }

    if(isValid){
        document.getElementById("successMsg").innerText = "form submitted successfully!"
        document.getElementById("myForm").reset()
    }
}

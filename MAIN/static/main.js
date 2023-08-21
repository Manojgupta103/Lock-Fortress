//display  modal on click
 
const modalWrapper = document.querySelector(".modals-wrapper");
if (modalWrapper){
    function displayModal(id){
        const modal = document.getElementById(id);
        modalWrapper.style.display = "flex";
        modal.style.display = "flex";
        
        //close modal
        const close = document.getElementById("close-modal");
        close.addEventListener("click", () =>{
            modalWrapper.style.display = "none";
            modal.style.display = "none";
        document.querySelector("header").style.display = "unset";
        })

        document.querySelector("header").style.display = "none";
    }
}


//copy to clipboard
const copies = document.querySelectorAll(".copy");
copies.forEach(copy =>{
    copy.onclick = () =>{
        let elemntToCopy = copy.previousElementSibling;
        elemntToCopy.select();
        document.execCommand("copy");
    }
})

//Display the actions of the password card for mobile devices
const actions = document.querySelectorAll(".actions");
if (actions){
    actions.forEach(action =>{
        action.onclick = () =>{
            const links = action.querySelectorAll("a");
            links.forEach(link =>{
                link.style.display = "flex";
            })
            setTimeout(function(){
                links.forEach(link =>{
                    link.style.display = "none";
                })}
            , 3000)
        }
    })
}

// Password evaluator
const passwordInput = document.getElementById("password");
if (passwordInput) {
    const strengthMeter = document.getElementById("strength-meter");
    const feedback = document.getElementById("password-feedback");
    const strengthIndicator = document.getElementById("password-strength");

    passwordInput.addEventListener("input", () => {
        const password = passwordInput.value;
        const [score, suggestions] = getPasswordStrength(password);

        strengthMeter.value = score;
        feedback.innerHTML = suggestions.join("<br>");

        if (score === 0) {
            strengthIndicator.textContent = "Very Weak";
            strengthIndicator.style.color = "red";
        } else if (score === 1) {
            strengthIndicator.textContent = "Weak";
            strengthIndicator.style.color = "orange";
        } else if (score === 2) {
            strengthIndicator.textContent = "Moderate";
            strengthIndicator.style.color = "yellow";
        } else if (score === 3) {
            strengthIndicator.textContent = "Strong";
            strengthIndicator.style.color = "green";
        } else {
            strengthIndicator.textContent = "Very Strong";
            strengthIndicator.style.color = "darkgreen";
        }
    });
}

// Toggle password visibility
const showPasswordToggle = document.getElementById("show-password-toggle");
const passwordField = document.getElementById("password");
if (showPasswordToggle && passwordField) {
    showPasswordToggle.addEventListener("click", () => {
        if (passwordField.type === "password") {
            passwordField.type = "text";
        } else {
            passwordField.type = "password";
        }
    });
}
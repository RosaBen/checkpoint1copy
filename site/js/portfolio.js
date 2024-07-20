// change avatar
const avatar=document.querySelector('.avatar');

avatar.addEventListener('click', function(){
    const newSrc="./image/avatar-bis.png";

    
    avatar.src= newSrc;
    avatar.alt="avatar-bis";
});

// change firstname and font color
const initialFirstName = document.getElementById("firstname");

    const changeButton = document.createElement("button");
    const description = document.querySelector(".description");
    changeButton.setAttribute("type", "button");
    changeButton.textContent = "Change name and background color";
    changeButton.classList.add("btn", "visible");
    description.appendChild(changeButton);

    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Entrez votre prénom");
    input.classList.add("inputName", "hidden");
    description.appendChild(input);

    changeButton.addEventListener('click', function() {
        input.classList.remove("hidden");
        input.classList.add("visible");
    });

    // chnage background color
const elementBackgroundToChange = document.querySelectorAll(".pink-bg");


// change links color

const links=document.querySelectorAll('a');


// change add li element with button and input

input.addEventListener('change', function() {
    const updatedName = input.value;  
    if (updatedName) {  
        initialFirstName.textContent = updatedName;  
        initialFirstName.style.color = "white";
    }
    input.classList.remove("visible");
    input.classList.add("hidden");

    elementBackgroundToChange.forEach((element) => {
        element.classList.remove("pink-bg");
        element.classList.add("purple-bg");
    });

});













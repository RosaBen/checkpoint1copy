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

    input.addEventListener('change', function() {
        const updatedName = input.value;  
        if (updatedName) {  
            initialFirstName.textContent = updatedName;  
            initialFirstName.style.color = "white";
        }
        input.classList.remove("visible");
        input.classList.add("hidden");

    });

    












// chnage avatar
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

// change links color

const links=document.querySelectorAll('a');
links.forEach((link) => {
    link.classList.add("links");
});

// add li element with button and input

const sectionContainers=document.querySelectorAll(".column");
sectionContainers.forEach((sectionContainer)=>{
    const list=document.createElement("ul");
    list.classList.add("list");
    sectionContainer.appendChild(list);

    const addButton=document.createElement("button");
addButton.classList.add("btn");
addButton.textContent="Ajouter un skill";
addButton.setAttribute("type","button");
sectionContainer.appendChild(addButton);
})

const frontEndButton=document.querySelector(".column:nth-of-type(2) .btn");
frontEndButton.classList.add("frontEndBtn");

const frontEndList=document.querySelector(".column:nth-of-type(2) .list");
frontEndList.classList.add("frontEndList");


const backEndButton=document.querySelector(".column:nth-of-type(1) .btn");
backEndButton.classList.add("backEndBtn");

const backEndList=document.querySelector(".column:nth-of-type(1) .list");
backEndList.classList.add("backEndList");

const addFESkills=document.querySelector(".frontEndBtn");

addFESkills.addEventListener("click", function(){
    const input=document.createElement("input");
    input.setAttribute("type","text");
    input.classList.add("inputFE");
    input.classList.add("visible");
    frontEndList.appendChild(input);

    const button=document.createElement("button");
    button.classList.add("visible");
    button.textContent="Valider";
    button.setAttribute("type","button");
    frontEndList.appendChild(button); 
    button.addEventListener("click", function(){
        const inputValue=input.value; 
if(inputValue){
    const li=document.createElement("li");
    li.textContent=inputValue;
    frontEndList.appendChild(li);
    input.classList.remove("visible");
    input.classList.add("hidden");
    button.classList.remove("visible");
    button.classList.add("hidden");
}
});
});



const addBESkills=document.querySelector(".backEndBtn");

addBESkills.addEventListener("click", function(){
    const input=document.createElement("input");
    input.setAttribute("type","text");
    input.classList.add("inputBE");
    input.classList.add("visible");
    backEndList.appendChild(input);

    const button=document.createElement("button");
    button.classList.add("visible");
    button.textContent="Valider";
    button.setAttribute("type","button");
    backEndList.appendChild(button); 
    button.addEventListener("click", function(){
        const inputValue=input.value; 
if(inputValue){
    const li=document.createElement("li");
    li.textContent=inputValue;
    backEndList.appendChild(li);
    input.classList.remove("visible");
    input.classList.add("hidden");
    button.classList.remove("visible");
    button.classList.add("hidden");
}
});
});

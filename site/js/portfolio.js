// chnage avatar
const avatar=document.querySelector('.avatar');

avatar.addEventListener('click', function(){
    const newSrc="./image/avatar-bis.png";

    
    avatar.src= newSrc;
    avatar.alt="avatar-bis";
});


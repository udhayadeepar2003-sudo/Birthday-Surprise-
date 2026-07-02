function openGift() {

    // Hide Welcome Screen
    document.getElementById("welcome").classList.add("hidden");

    // Show Birthday Screen
    document.getElementById("birthday").classList.remove("hidden");

    // Play Music (if birthday.mp3 exists)
    const music = document.getElementById("music");

    if (music) {
        music.play().catch(() => {
            console.log("Music autoplay blocked by browser.");
        });
    }

    // Fireworks
    createFireworks();

}

// Fireworks Effect
function createFireworks(){

    const container=document.getElementById("fireworks");

    setInterval(()=>{

        const fire=document.createElement("div");

        fire.style.position="absolute";
        fire.style.left=Math.random()*100+"%";
        fire.style.top=Math.random()*80+"%";
        fire.style.width="12px";
        fire.style.height="12px";
        fire.style.borderRadius="50%";
        fire.style.background=
        `hsl(${Math.random()*360},100%,60%)`;

        fire.style.boxShadow=
        `0 0 25px hsl(${Math.random()*360},100%,60%)`;

        fire.style.animation="boom .8s ease-out";

        container.appendChild(fire);

        setTimeout(()=>{
            fire.remove();
        },800);

    },250);

}

// Firework Animation
const style=document.createElement("style");

style.innerHTML=`
@keyframes boom{

0%{
transform:scale(.2);
opacity:1;
}

100%{
transform:scale(6);
opacity:0;
}

}
`;

document.head.appendChild(style);

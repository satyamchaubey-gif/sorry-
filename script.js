function nextPage(page){
    document.querySelectorAll(".page").forEach(p=>{
        p.classList.remove("active");
    });

    document.getElementById("page"+page).classList.add("active");
}

function showLove(){
    document.getElementById("answer").style.display="block";
}

for(let i=0;i<30;i++){

    let heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML=["💜","✨","♡","🫰"][Math.floor(Math.random()*4)];

    heart.style.left=Math.random()*100+"%";

    heart.style.fontSize=(Math.random()*20+15)+"px";

    heart.style.animationDuration=(Math.random()*5+5)+"s";

    document.body.appendChild(heart);
}
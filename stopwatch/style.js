const playButton = document.getElementsByClassName("play")[0];
const lapButton= document.getElementsByClassName("lap")[0];
const resetButton= document.getElementsByClassName("reset")[0];

let isPlay=false

const toggleButton = () =>{
    lapButton.classList.remove("hidden");
    resetButton.classList.remove("hidden");
}
const play = () =>{
    if(!isPlay){
        playButton.innerHTML='pause';
        isPlay=true;
    }else{
        playButton.innerHTML='Play';
        isPlay=false;
    }
    toggleButton();
}
const reset= () =>{
lapButton.classList.add("hidden");
resetButton.classList.add("hidden");
}

playButton.addEventListener("click",play);
resetButton.addEventListener("click",reset);














l
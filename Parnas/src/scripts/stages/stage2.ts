import "../../styles/_stage2.scss";

let stage2_score:number = 0;

let stage2_Title_Screen: HTMLElement = document.getElementById("Stage2_TitleScreen")!;
let stage2_Game_Screen: HTMLElement = document.getElementById("Stage2_Game")!;
let stage2_Result_screen: HTMLElement = document.getElementById("Stage2_Result")!;

const stage2_Start = () => {
    stage2_Title_Screen.style.display = "none";
    stage2_Game_Screen.style.display = "block";
}

document.getElementById("Stage2_Title_but")!.onclick = () => {
    stage2_Start();
}

document.getElementById("Stage2_Game_but")!.onclick = () => {
    document.getElementById("Stage2_Game")!.style.display = "none";
    document.getElementById("Stage2_Result")!.style.display = "block";
}

document.getElementById("Stage2_Result_next")!.onclick = () => {
    document.getElementById("Stage2_Result")!.style.display = "none";
    document.getElementById("Final_Screen")!.style.display = "block";
}
export default stage2_Start;
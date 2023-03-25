let stage1_score:number = 0;

let stage1_Title_Screen: HTMLElement = document.getElementById("Stage1_TitleScreen")!;
let stage1_Game_Screen: HTMLElement = document.getElementById("Stage1_Game")!;

const stage1_Start = () => {
    stage1_Title_Screen.style.display = "none";
    stage1_Game_Screen.style.display = "block";
}

let stage1_Game_but = document.getElementById("Stage1_Game_but")!;
let stage1_Result_screen: HTMLElement = document.getElementById("Stage1_Result")!;
stage1_Game_but.onclick = () => {
    stage1_Game_Screen.style.display = "none";
    stage1_Result_screen.style.display = "block";
}

let stage1_Result_restart: HTMLElement = document.getElementById("Stage1_Result_restart")!;
stage1_Result_restart.onclick = () => {
    stage1_Result_screen.style.display = "none";
    stage1_Title_Screen.style.display = "display";
}

let stage1NextButton = document.getElementById("Stage1_Result_next")!;
stage1NextButton.onclick = () => {
    document.getElementById("Stage1_Screen")!.style.display = "none";
    document.getElementById("Stage2_Screen")!.style.display = "block";
}
export default stage1_Start;
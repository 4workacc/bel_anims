import "../../styles/_stage1.scss";
import { stage1_StartGame } from "./stage1_game";

let stage1_Title_Screen: HTMLElement = document.getElementById("Stage1_TitleScreen")!;
let stage1_Game_Screen: HTMLElement = document.getElementById("Stage1_Game")!;
let stage1_Result_screen: HTMLElement = document.getElementById("Stage1_Result")!;


const stage1_Start = () => {
    stage1_Title_Screen.style.display = "none";
    stage1_Game_Screen.style.display = "block";   
}

let stage1_Title_but = document.getElementById("Stage1_Title_but")!;

stage1_Title_but.onclick = () => {
    stage1_Title_Screen.style.display = "none";
    stage1_Game_Screen.style.display = "block";
    stage1_StartGame();
}

let stage1_Game_but = document.getElementById("Stage1_Game_but");
stage1_Game_but!.onclick = () => {
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
    document.getElementById("Stage2_TitleScreen")!.style.display = "block";
}
export default stage1_Start;
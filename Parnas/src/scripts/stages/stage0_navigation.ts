import "../../styles/_stage0.scss";
import { stage0_gameStart } from "./stage0_game";
// // NAVIGATION
// let stage0Screen:HTMLElement = document.getElementById("Stage0_Screen")!;

let stage0TitleScreen: HTMLElement = document.getElementById("Stage0_TitleScreen")!;
// let stage0TitleBut: HTMLElement = document.getElementById("Start0_Title_but")!;

let stage0GameScreen: HTMLElement = document.getElementById("Stage0_Game")!;
let stage0ResultScreen: HTMLElement = document.getElementById("Stage0_Result")!;
// let stage0ToResultsBut = document.getElementById("Stage0_Game_but");

stage0TitleScreen.onclick = () => {
    stage0TitleScreen.style.display = "none";
    stage0GameScreen.style.display = "block";  
    stage0ResultScreen.style.display = "none";  
    stage0_gameStart();
};

// stage0ToResultsBut!.onclick = () => {
//     stage0GameScreen.style.display = "none";
//     stage0ResultScreen.style.display = "block";
// }

// let stage0RestartBut = document.getElementById("Stage0_Result_restart");

// stage0RestartBut!.onclick = () => {
//     stage0ResultScreen.style.display = "none";
//     stage0TitleScreen.style.display = "block";           
// }

// let stage1Screen: HTMLElement = document.getElementById("Stage1_Screen")!;
// let stage0NextButton = document.getElementById("Stage0_Result_next");
// stage0NextButton!.onclick = () => {
//     stage0Screen.style.display = "none";
//     stage1Screen.style.display = "block";    
// }



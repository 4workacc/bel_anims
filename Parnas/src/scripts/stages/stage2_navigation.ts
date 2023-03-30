import { stage2_Start } from "./stage2_game";


// let stage2_Title_Screen: HTMLElement = document.getElementById("Stage2_TitleScreen")!;
// let stage2_Game_Screen: HTMLElement = document.getElementById("Stage2_Game")!;
// // let stage2_Result_screen: HTMLElement = document.getElementById("Stage2_Result")!;



document.getElementById("Stage2_TitleScreen")!.onclick = () => {
    stage2_Start();
}

// document.getElementById("Stage2_Game_but")!.onclick = () => {
//     document.getElementById("Stage2_Game")!.style.display = "none";
//     document.getElementById("Stage2_Result")!.style.display = "block";
// }

// document.getElementById("Stage2_Result_next")!.onclick = () => {
//     document.getElementById("Stage2_Result")!.style.display = "none";
//     document.getElementById("Final_Screen")!.style.display = "block";
// }

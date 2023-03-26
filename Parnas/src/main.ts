import './style.scss';
import './scripts/stages/stage0_navigation';
import './scripts/stages/stage0_game';
import './scripts/stages/stage1';
import './scripts/stages/stage2';

let globalScore: number = 0;

export const IncGlobalScore = (count: number) => {
    globalScore += count;
    console.log(globalScore);
}

let GameStartButton: HTMLElement = document.getElementById("GameStartButton")!;

GameStartButton.onclick = () => {
    document.getElementById("TitleScreen")!.style.display = "none";   
    document.getElementById("Stage0_Screen")!.style.display = "block";
    document.getElementById("Stage0_TitleScreen")!.style.display = "block";
    document.getElementById("Stage0_Result")!.style.display = "none";
}

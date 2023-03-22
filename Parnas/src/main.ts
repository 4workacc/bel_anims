import './style.scss';
import './scripts/stages/stage0';
import './scripts/stages/stage1';
import './scripts/stages/stage2';

let globalScore: number = 0;

export const IncGlobalScore = (count: number) => {
    globalScore += count;
    console.log(globalScore);
}

export const showStage0 = () => {
    document.getElementById("TitleScreen")!.style.display = "none";
    document.getElementById("Stage0_Screen")!.style.display = "block";
}

document.getElementById('GameStartButton')!.onclick = () => {
    showStage0();
}
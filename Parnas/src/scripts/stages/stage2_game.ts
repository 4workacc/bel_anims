import "../../styles/_stage2.scss";
import { stage2Main, stage2Pseudo } from "../tasks/task2";

let stage2_Title_Screen: HTMLElement = document.getElementById("Stage2_TitleScreen")!;
let stage2_Game_Screen: HTMLElement = document.getElementById("Stage2_Game")!;
let stage2_PseudoArr: string[] = [];
let stage2_FIOSArr: string[][] = [];
let stage2_curIndex: number = 0
let stage2_rightCount: number = 0;

const stage2_pseugoCount: number = 10;

const stage2_generatePseudo = (): string[] => {
    let pseudoArr: string[] = [];
    while (pseudoArr.length < stage2_pseugoCount) {
        let randIndex: number = Math.floor(Math.random() * stage2Pseudo.length);
        if (pseudoArr.indexOf(stage2Pseudo[randIndex]) === -1) {
            pseudoArr.push(stage2Pseudo[randIndex]);
        }
    }
    return pseudoArr;
}

const stage2_generageStots = () => {
    while ( document.getElementById("Stage2_Game_ShotBar")!.firstChild ) {
        document.getElementById("Stage2_Game_ShotBar")?.removeChild(document.getElementById("Stage2_Game_ShotBar")!.lastChild!)
    }  
    for (let i: number = 0; i < stage2_pseugoCount; i++) {
        let shot: HTMLDivElement = document.createElement("div");
        shot.id = `stage2_shot${i}`;
        shot.classList.add("Stage2_shotInactive");
        document.getElementById("Stage2_Game_ShotBar")?.appendChild(shot);
    }
}

const stage2_generateFIO = (): string[][] => {
    let arr: string[][] = [];
    for (let i = 0; i < stage2_pseugoCount; i++) {
        let arr1: string[] = [];
        while (arr1.length < 5) {
            let rInd: number = Math.floor(Math.random() * 5);
            if (arr1.indexOf(stage2Main[rInd]) === -1) {
                arr1.push(stage2Main[rInd])
            }
        }
        let fioIndex: number = stage2Pseudo.indexOf(stage2_PseudoArr[i])
        if (arr1.indexOf(stage2Main[fioIndex]) === -1) {
            arr1[Math.floor(Math.random() * 5)] = stage2Main[fioIndex];
        }
        arr.push(arr1);
    }
    return arr;
}
const stage2_displayQuest = () => {
    document.getElementById("Stage2_PseudoTitle")!.innerHTML = stage2_PseudoArr[stage2_curIndex];
}

const stage2_fioHandler = (clickedFio:string) => {      
    if (stage2_curIndex < 9) {
        let curPseudoInde:number = stage2Pseudo.indexOf(stage2_PseudoArr[stage2_curIndex]);
        if (stage2Main[curPseudoInde] === clickedFio) {
            document.getElementById(`stage2_shot${stage2_curIndex}`)?.classList.add('Stage2_right');
            stage2_rightCount +=1;
        }
        else {
            document.getElementById(`stage2_shot${stage2_curIndex}`)?.classList.add('Stage2_err');
        }     
        stage2_curIndex += 1;   
        stage2_displayQuest()
        stage2_generateDisplayFIOS();
    }
    else {        
        if (stage2_rightCount >= 8) {          
            document.getElementById("Stage2_ResultTitle")!.innerHTML =`Неверагодна! Вы трапілі на Парнас!!! Вы геній!!!`
            document.getElementById("Stage2_Game")!.style.display = "none";
            document.getElementById("Stage2_Result")!.style.display = "block";
            document.getElementById("Stage2_Result")!.classList.add("Stage2_ResultGood");
            document.getElementById("Stage2_Result")!.onclick = () => {
                document.getElementById("Stage2_Screen")!.style.display = "none";
                document.getElementById("Final_Screen")!.style.display = "block";
            }            
        }
        else {
            document.getElementById("Stage2_Result")!.classList.add("Stage2_ResultBad");
            document.getElementById("Stage2_ResultTitle")!.innerHTML =`Паўтарыце спробу яшчэ раз.`;
            document.getElementById("Stage2_Game")!.style.display = "none";
            document.getElementById("Stage2_Result")!.style.display = "block";
            document.getElementById("Stage2_Result")!.onclick = () => {
                document.getElementById("Stage2_Result")!.style.display = "none";
                document.getElementById("Stage2_Screen")!.style.display = "block";
                stage2_Start();
            }   
        }        
    }
}

const stage2_generateDisplayFIOS = () => {
    while ( document.getElementById("Stage2_FioBar")!.firstChild ) {
        document.getElementById("Stage2_FioBar")?.removeChild(document.getElementById("Stage2_FioBar")!.lastChild!)
    }    
    for (let i=0; i<5; i++) {
        let newFIO: HTMLElement = document.createElement("p");
        newFIO.classList.add("Stage2_Fio");
        newFIO.innerHTML = stage2_FIOSArr[stage2_curIndex][i];
        newFIO.onclick = () => {            
            stage2_fioHandler(stage2_FIOSArr[stage2_curIndex][i])
        }
        document.getElementById("Stage2_FioBar")?.appendChild(newFIO);
    }    
}

export const stage2_Start = () => {
    stage2_Title_Screen.style.display = "none";
    stage2_Game_Screen.style.display = "block";
    stage2_generageStots();
    stage2_PseudoArr = stage2_generatePseudo();
    stage2_FIOSArr = stage2_generateFIO();
    stage2_rightCount = 0;
    stage2_curIndex = 0;
    stage2_displayQuest();
    stage2_generateDisplayFIOS();
}


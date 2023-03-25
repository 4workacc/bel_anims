import { IncGlobalScore } from "../../main";
import '../tasks/task0'

import { stage0books } from "../tasks/task0";
import { stage0test } from "../tasks/task0";

import "../../styles/_stage0.scss";

let stage0_score:number = 0;
let stage0_questionCount:number = 10;
// let stage0_errorsAllowed: number = 2;

let stage0_rightAnsers: number;
let stage0_curQuestionIndex: number;

let stage0_simptomsArr: string[] = [];
let stage0_booksArr: string[] = [];

let stage0Screen: HTMLElement = document.getElementById("Stage0_Screen")!;
let titleScreen: HTMLElement = document.getElementById("TitleScreen")!;

export const stage0_Start = () => {    
    stage0_rightAnsers = 0;
    stage0_curQuestionIndex = 0;
    stage0_generateGameArr();
    stage0_setCurrentSimptoms();
    stage0_setCurrentBooks();
    console.log(stage0_simptomsArr);

    titleScreen.style.display = "none";
    stage0Screen.style.display = "block";
}

export const stage0_End = () => {
    IncGlobalScore( stage0_score );
}

const stage0_generateGameArr = () => {
    stage0_booksArr = [];
    stage0_simptomsArr = [];
    while (stage0_simptomsArr.length < stage0_questionCount) {
        let ind: number = Math.floor(Math.random() * stage0test.length);
        let tempSimptom: string = stage0test[ind];
        if (stage0_simptomsArr.indexOf(tempSimptom) == -1) {
            stage0_simptomsArr.push(tempSimptom);
            stage0_booksArr.push(stage0books[ind]);
        }
    }
}

const stage0_setCurrentSimptoms = () => {
    console.log(stage0_curQuestionIndex, stage0_rightAnsers);
}

const stage0_setCurrentBooks = () => {
    console.log(stage0_curQuestionIndex, stage0_rightAnsers);
}

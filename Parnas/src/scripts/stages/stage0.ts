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

let stage0Screen:HTMLElement = document.getElementById("Stage0_Screen")!;
let stage0TitleScreen: HTMLElement = document.getElementById("Stage0_TitleScreen")!;
let stage0TitleBut: HTMLElement = document.getElementById("Start0_Title_but")!;

let stage0GameScreen: HTMLElement = document.getElementById("Stage0_Game")!;
let stage0ResultScreen: HTMLElement = document.getElementById("Stage0_Result")!;

let stage0ToResultsBut = document.getElementById("Stage0_Game_but");

export const stage0_Start = () => {    
    stage0_rightAnsers = 0;
    stage0_curQuestionIndex = 0;
    stage0_generateGameArr();
    stage0_setCurrentSimptoms();
    stage0_setCurrentBooks();     
}

stage0TitleBut.onclick = () => {
    stage0TitleScreen.style.display = "none";
    stage0GameScreen.style.display = "block";
};

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

stage0ToResultsBut!.onclick = () => {
    stage0GameScreen.style.display = "none";
    stage0ResultScreen.style.display = "block";
}

let stage0ResturtBut = document.getElementById("Stage0_Result_restart");

stage0ResturtBut!.onclick = () => {
    stage0ResultScreen.style.display = "none";
    stage0TitleScreen.style.display = "block";
    stage0_Start();    
}

let stage1Screen: HTMLElement = document.getElementById("Stage1_Screen")!;
let stage0NextButton = document.getElementById("Stage0_Result_next");
stage0NextButton!.onclick = () => {
    stage0Screen.style.display = "none";
    stage1Screen.style.display = "block";    
}
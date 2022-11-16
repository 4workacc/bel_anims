import { test } from './task0';
import { books } from './task0';

let curTaskCount: number = 10;

let simptomsArr: string[] = [];
let booksArr: string[] = [];

while (simptomsArr.length < curTaskCount) {
    let ind: number = Math.floor(Math.random() * test.length);
    let tempSimptom: string = test[ind];
    if (simptomsArr.indexOf(tempSimptom) == -1) {
        simptomsArr.push(tempSimptom);
        booksArr.push(books[ind]);
    }
}

//screens
const stage0TitleScreen: HTMLElement = document.getElementById('FirstScreen_Title');
const stage0GameScreen: HTMLElement = document.getElementById('FirstScreen_Game');
const stage0ResultScreen: HTMLElement = document.getElementById('FirstScreen_Result')
//panels
const stage0ProgressBar: HTMLElement = document.getElementById('FirstScreen_Game__results');
const stage0BookPanel: HTMLElement = document.getElementById('FirstScreen_Game__booksList');
//text
const stage0MainText: HTMLElement = document.getElementById('FirstScreen_Game__simptom');
const stage0Books: HTMLCollection = document.getElementsByClassName('FirstScreen_Game__simptom');
//buttons 
const stage0StartButton: HTMLElement = document.getElementById('FirstScreen_Title__but');
const stage0GameButton: HTMLElement = document.getElementById('FirstScreen_Game__but');
const stage0ResultButton: HTMLElement = document.getElementById('FinalScreen_Result__but');


export const startStage0 = () => {
    console.log(booksArr);
    console.log(simptomsArr);
}
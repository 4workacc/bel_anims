import { stage0books } from "../tasks/task0";
import { stage0test } from "../tasks/task0";

let stage0_questionCount: number = 10;

let stage0_simptomsArr: string[] = [];
let stage0_rightBooksArr: string[] = [];
let stage0_booksArr: string[][] = [];

const stage0_generateArrays = () => {
    let rr: number[] = [];
    while (rr.length < stage0_questionCount) {
        let i: number = Math.floor(Math.random() * stage0books.length);
        if (rr.indexOf(i) === -1) {
            rr.push(i);
        }
    }
    for (let i: number = 0; i < stage0_questionCount; i++) {
        stage0_booksArr.push(stage0_generate5RandomBooks(stage0books[rr[i]]));
        stage0_simptomsArr.push(stage0test[rr[i]]);
        stage0_rightBooksArr.push(stage0books[rr[i]]);
    }
}
const stage0_generate5RandomBooks = (rightAnswer: string): string[] => {
    let rr: string[] = [];
    while (rr.length < 5) {
        let q: number = Math.floor(Math.random() * stage0books.length);
        if (rr.indexOf(stage0books[q]) === -1) {
            rr.push(stage0books[q]);
        }
    }
    if (rr.indexOf(rightAnswer) === -1) {
        rr[Math.floor(Math.random() * 5)] = rightAnswer;
    }
    console.log(rr)
    return rr;
}
// GUI
let stage0_score: number = 0;
let stage0_rightAnswers: number;
let stage0_curQuestionIndex: number;

const stage0_generageStots = () => {
    for (let i: number = 0; i < stage0_questionCount; i++) {
        let shot: HTMLDivElement = document.createElement("div");
        shot.id = `stage0_shot${i}`;
        shot.classList.add("Stage0_shotInactive");
        document.getElementById("Stage0_Game_ShotBar")?.appendChild(shot);
    }
}

const stage_setTextValues = () => {
    while ( document.getElementById("Stage0_BooksBar")!.firstChild ) {
        document.getElementById("Stage0_BooksBar")?.removeChild(document.getElementById("Stage0_BooksBar")!.lastChild!)
    }    
    document.getElementById("Stage0_Simptoms")!.innerHTML = stage0_simptomsArr[stage0_curQuestionIndex];
    for (let i: number = 0; i < 5; i++) {        
        let book: HTMLParagraphElement = document.createElement("p");
        book.classList.add("Stage0_Book");
        book.innerHTML = stage0_booksArr[stage0_curQuestionIndex][i];
        book.id = `Stage0_Book${i}`;
        book.onclick = () => { stage0_shot(stage0_booksArr[stage0_curQuestionIndex][i] == stage0_rightBooksArr[stage0_curQuestionIndex]) };
        document.getElementById("Stage0_BooksBar")?.appendChild(book);
    }
}

let stage0_ResultScreen: HTMLElement = document.getElementById("Stage0_Result")!;
const stage0_shot = (isRight: boolean) =>{
    let curShot: HTMLElement | null = document.getElementById(`stage0_shot${stage0_curQuestionIndex}`);
    if (isRight) {
        curShot?.classList.add("Stage_ShotGood");
        stage0_rightAnswers += 1;
    }
    else {
        curShot?.classList.add("Stage_ShotBad")
    };
    if ( stage0_curQuestionIndex < stage0_questionCount-1 ) {
        stage0_curQuestionIndex += 1;
        stage_setTextValues();
    } else {        
        if ( stage0_rightAnswers > 9 ) {
            document.getElementById("Stage0_ResultGod")!.classList.add("Stage0_ResultGod_good");
            document.getElementById("Stage0_ResultTitle")!.innerHTML = "Малайчынка! Падымайцеся вышэй.";
            document.getElementById("Stage0_Result_restart")!.style.display = "none";
            document.getElementById("Stage0_Result_next")!.style.display = "block";
        } 
        else if ( stage0_rightAnswers > 0 ) {
            document.getElementById("Stage0_ResultGod")!.classList.add("Stage0_ResultGod_good")
            document.getElementById("Stage0_ResultTitle")!.innerHTML = "Добра, але трэба перачытаць некаторыя творы.";
            document.getElementById("Stage0_Result_restart")!.style.display = "none";
            document.getElementById("Stage0_Result_next")!.style.display = "block";
        }
        else if ( stage0_rightAnswers <= 0 ) { 
            document.getElementById("Stage0_ResultGod")!.classList.add("Stage0_ResultGod_bad")
            document.getElementById("Stage0_ResultTitle")!.innerHTML = "Не атрымалася. Паспрабуйце яшчэ раз.";
            document.getElementById("Stage0_Result_restart")!.style.display = "block";
            document.getElementById("Stage0_Result_next")!.style.display = "none";
        }
        stage0_ResultScreen!.style.display = "block";
        document.getElementById("Stage0_Game")!.style.display = "none";
    }
    
}

export const stage0_gameStart = () => {
    stage0_rightAnswers = 0;
    stage0_curQuestionIndex = 0;
    stage0_score = 0;
    stage0_simptomsArr = [];
    stage0_booksArr = [];
    stage0_ResultScreen.style.display = "none";
    while ( document.getElementById("Stage0_Game_ShotBar")!.firstChild ) {
        document.getElementById("Stage0_Game_ShotBar")?.removeChild(document.getElementById("Stage0_Game_ShotBar")!.lastChild!)
    }
    stage0_generateArrays();
    stage0_generageStots();
    stage_setTextValues();
}





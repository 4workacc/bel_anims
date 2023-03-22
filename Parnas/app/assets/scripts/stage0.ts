import { globalScore } from './index';
import { test } from './task0';
import { books } from './task0';

let stage0TaskCount: number = 10;
let curIndex: number = 0;

let simptomsArr: string[] = [];
let booksArr: string[] = [];
let curRightBook: string = '';
let rightAnswersCount: number = 0;

while (simptomsArr.length < stage0TaskCount) {
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
const stage0MainText: HTMLElement = document.getElementById('FirstScreen_Game__simptomP');
const stage0ResultScreenText: HTMLElement = document.getElementById('FinalScreen_Result__text');
//buttons 
const stage0StartButton: HTMLElement = document.getElementById('FirstScreen_Title__but');
//imgs
const stage0ResultScreenImg: HTMLElement = document.getElementById('FinalScreen_Result__img');



stage0StartButton.onclick = () => {
    document.getElementById('FinalScreen_Result__restartBut').style.display = 'none';
    document.getElementById('FinalScreen_Result__but').style.display = 'block';
    generateShots();
    generateBooks();
    stage0MainText.innerHTML = simptomsArr[curIndex];
    stage0TitleScreen.style.left = '-1100px';
    stage0GameScreen.style.left = '0';
}

const generateShots = () => {
    for (let i: number = 0; i < stage0TaskCount; i++) {
        let shot: HTMLElement = document.createElement('div');
        shot.classList.add('FirstScreen_Game__shot');
        shot.id = 'FirstScreen_Game__shot' + i;
        stage0ProgressBar.appendChild(shot);
    }
}

const generateBooks = () => {
    curRightBook = booksArr[curIndex];
    let curBooksArr: string[] = ['', '', '', '', ''];
    curBooksArr[Math.floor(Math.random() * 5)] = booksArr[curIndex];
    for (let i: number = 0; i < 5; i++) {
        if (curBooksArr[i] === '') {
            while (curBooksArr[i] === '') {
                let randomBook: string = booksArr[Math.floor(Math.random() * booksArr.length)];
                if (curBooksArr.indexOf(randomBook) === -1) {
                    curBooksArr[i] = randomBook;
                }
            }
        }
    }
    while (stage0BookPanel.firstChild) {
        stage0BookPanel.removeChild(stage0BookPanel.lastChild);
    }
    for (let i: number = 0; i < 5; i++) {
        let book: HTMLElement = document.createElement('p');
        book.classList.add('FirstScreen_Game__book');
        book.id = 'FirstScreen_Game__book' + i;
        book.innerHTML = curBooksArr[i];
        book.onclick = () => {
            setShot(curBooksArr[i]);
            newStep();
        }
        stage0BookPanel.appendChild(book);
    }
}

const newStep = () => {
    curIndex += 1;
    if (curIndex < stage0TaskCount) {
        stage0MainText.innerHTML = simptomsArr[curIndex];
        generateBooks();
    }
    else {
        showResult();
        stage0GameScreen.style.left = '-101%';
        stage0ResultScreen.style.left = '0'
    }
}

const setShot = (userSelectedBook: string) => {
    if (userSelectedBook === curRightBook) {
        rightAnswersCount += 1;
        document.getElementById('FirstScreen_Game__shot' + curIndex).style.backgroundColor = 'green';
    }
    else {
        document.getElementById('FirstScreen_Game__shot' + curIndex).style.backgroundColor = 'red';
    }
}

const showResult = () => {
    stage0ResultScreen.appendChild(stage0ProgressBar);
    let stage0Score: number = rightAnswersCount / stage0TaskCount;
    if (stage0Score > 0.9) {
        stage0ResultScreenText.innerHTML = 'Малайчынка! Падымайцеся вышэй. ' + stage0Score;
        stage0ResultScreenImg.classList.add('FinalScreen_Result__imgGood');
    }
    if (stage0Score < 0.9 && stage0Score >= 0.7) {
        stage0ResultScreenText.innerHTML = 'Добра, але трэба перачытаць некаторыя твора.' + stage0Score;
        stage0ResultScreenImg.classList.add('FinalScreen_Result__imgBad');
    }
    if (stage0Score < 0.7) {
        stage0ResultScreenText.innerHTML = 'Не атрымалася. Паспрабуйце яшчэ раз. ' + stage0Score;
        stage0ResultScreenImg.classList.add('FinalScreen_Result__imgBad');
        document.getElementById('FinalScreen_Result__but').style.display = 'none';
        document.getElementById('FinalScreen_Result__restartBut').style.display = 'block';
    }
}

document.getElementById('FinalScreen_Result__restartBut').onclick = () => {
    alert(1);
    curIndex = 0;
    simptomsArr = [];
    booksArr = [];
    curRightBook = '';
    rightAnswersCount = 0;

    document.getElementById('FinalScreen_Result__restartBut').style.display = 'none';
    document.getElementById('FinalScreen_Result__but').style.display = 'block';

    while (stage0ProgressBar.firstChild) {
        stage0ProgressBar.removeChild(stage0ProgressBar.lastChild);
    }

    // generateShots();
    // generateBooks();
    stage0MainText.innerHTML = simptomsArr[curIndex];
    stage0TitleScreen.style.left = '-1100px';
    stage0GameScreen.style.left = '0';
}

import { stage2Main, stage2Pseudo } from "./task2";

const stage2WordCount: number = 5;

// #$#####################################

const stage2StartBut: HTMLElement = document.getElementById('ThirdScreen_Title__but');

const stage2TitleScreen: HTMLElement = document.getElementById('ThirdScreen_Title');
const stage2GameScreen: HTMLElement = document.getElementById('ThirdScreen_Game');
const stage2ResultScreen: HTMLElement = document.getElementById('ThirdScreen_Results');

const stage2GameTitle: HTMLElement = document.getElementById('ThirdScreen_Game__title');
const stage2GameFIOPanel: HTMLElement = document.getElementById('ThirdScreen_Game__fios');

const stage2GameResultPanel: HTMLElement = document.getElementById('ThirdScreen_Game__results');
const stage2GameResultImg: HTMLElement = document.getElementById('ThirdScreen_Result__img');

const stage2GameResultText: HTMLElement = document.getElementById('ThirdScreen_Result__title');

// ####################################

let stage2FIOArr: string[] = [];
let stage2PseudoArr: string[] = [];

let stage2CurPseudo: string = '';
let stage2CurFIO: string = '';

let stage2CurIndex: number = 0;
let stage2RightAnswerCount: number = 0;
// ############################

const stage2Start = () => {
    stage2TitleScreen.style.left = '-101%';    
    stage2GenerateGameArr();   
    stage2SetTexts();
    stage2GenerateDivPagen();
    stage2GameScreen.style.left = '0';
}

stage2StartBut.onclick = stage2Start;

const stage2GeneratedFIOS = (): string[] => {    
    let arr: string[] = [];
    while ( arr.length < 5) {
        let randInd: number = Math.floor(Math.random() * stage2Pseudo.length -1);
        if ( arr.indexOf( stage2Main[randInd] ) === -1 ) {
            arr.push( stage2Main[randInd] );
        }       
    }
    if ( arr.indexOf( stage2FIOArr[stage2CurIndex] ) === -1 ) {
        let x: number = Math.floor( Math.random()* 5);
        console.log (x);
        arr[ x ] = stage2FIOArr[stage2CurIndex];
    }
    return arr;
}

const stage2SetTexts = () => {    
    stage2GameTitle.innerHTML = stage2PseudoArr[stage2CurIndex];
    stage2CurPseudo = stage2PseudoArr[stage2CurIndex];
    stage2CurFIO = stage2FIOArr[stage2CurIndex];
    let stage2fios: string[] = stage2GeneratedFIOS();
    while (stage2GameFIOPanel.firstChild) {
        stage2GameFIOPanel.removeChild(stage2GameFIOPanel.firstChild);
    }
    for ( let i: number = 0; i<stage2fios.length; i++){
        let pp: HTMLElement = document.createElement('p');
        pp.innerHTML = stage2fios[i];
        pp.onclick = () => stage2FIOClickHandler(stage2fios[i]);
        pp.classList.add('ThirdScreen_Game__fio');
        stage2GameFIOPanel.appendChild(pp);
    }

}

const stage2ResultsDiv: HTMLCollection = document.getElementsByClassName('ThirdScreen_Game__result');

const stage2FIOClickHandler = ( fio: string) => {
    if ( fio === stage2CurFIO ) {
        stage2ResultsDiv[stage2CurIndex].classList.add('ThirdScreen_Game__resultgood');
        stage2RightAnswerCount += 1;
    }
    else {
        stage2ResultsDiv[stage2CurIndex].classList.add('ThirdScreen_Game__resultbad');
    };
    stage2CurIndex += 1;
    if ( stage2CurIndex < stage2WordCount ) {
        stage2SetTexts();
    }
    else {
        stage2GameScreen.style.left = '-101%';
        stage2ResultScreen.style.left = '0';
       
        if (stage2RightAnswerCount > 4 ) {
            stage2GameResultText.innerHTML =  'Неверагодна! Вы трапілі на Парнас!!! Вы геній!!!';
            stage2GameResultImg.classList.add('ThirdScreen_Result__imggood');
        }
        else {
            stage2GameResultText.innerHTML =  'Паўтарыце спробу яшчэ раз.';
            stage2GameResultImg.classList.add('ThirdScreen_Result__imgbad');
        }
    }
    
}

const stage2GenerateGameArr = () => {
    while (stage2PseudoArr.length < stage2WordCount) {
        let randInd: number = Math.floor(Math.random() * stage2Pseudo.length);
        if (stage2PseudoArr.indexOf(stage2Pseudo[randInd]) === -1) {
            stage2FIOArr.push(stage2Main[randInd]);
            stage2PseudoArr.push(stage2Pseudo[randInd]);
        }
    }
}

const stage2GenerateDivPagen = () => {
    for ( let i:number = 0; i< stage2WordCount; i++) {
        let d: HTMLElement = document.createElement('div');
        d.classList.add('ThirdScreen_Game__result');
        stage2GameResultPanel.appendChild(d);
    }
}
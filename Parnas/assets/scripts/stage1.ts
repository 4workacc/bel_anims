import { globalScore } from "./script";
import { IMan, stage1Authors } from "./task1";

const stage1AuthorsCount: number = 5;

const stage1StartButton: HTMLElement  = document.getElementById('SecondScreen_Title__but');

const stage1TitleScreen: HTMLElement = document.getElementById('SecondScreen_Title');
const stage1GameScfeen: HTMLElement = document.getElementById('SecondScreen_Game');
const stage1ResultScreen: HTMLElement = document.getElementById('SecondScreen_Result');

const stage1GameCard: HTMLElement = document.getElementById('SecondScreen_Game__card');

stage1StartButton.onclick = () => {
    stage1TitleScreen.style.left = '-101%';
    stage1GameScfeen.style.left = '0';
}


let stage1AuthorsArr: IMan[] = [];
let randIndexes: number[] = [];
while ( stage1AuthorsArr.length <5 ) {
    let ind: number = Math.floor( Math.random()*stage1Authors.length);
    if ( randIndexes.indexOf(ind) === -1 ) {
        randIndexes.push( ind );
        stage1AuthorsArr.push( stage1Authors[ind] );
    }
}

const geomarkClickHandler = (ind: number) => { 
    stage1GameCard.style.opacity = '1';
    stage1GameCard.style.display = 'block';
    setStage1Card(ind);
}

for ( let i: number = 0; i<stage1AuthorsArr.length; i++ ) {   
    const mark1: HTMLElement = document.createElement('div');
    mark1.classList.add('Geomark');
    mark1.id = 'stage1Geomark'+i;
    mark1.onclick = () => geomarkClickHandler(i);
    mark1.style.left = stage1AuthorsArr[i].coordX+'px';
    mark1.style.top = stage1AuthorsArr[i].coordY+'px';
    document.getElementById('SecondScreen_Game__map').appendChild(mark1);
}

const stage1CardAuthor: HTMLCollection = document.getElementsByClassName('SecondScreen_card__author');
const stage1CardTitle: HTMLElement = document.getElementById('SecondScreen_Card__title');
for ( let i: number = 0; i<5; i++) {
    let a: HTMLElement = stage1CardAuthor[i] as HTMLElement;

    a.onclick = () => {
        stage1GameCard.style.opacity = '0';
        stage1GameCard.style.display = 'none';
    }
}

const setStage1Card = (ind: number) => {
    stage1CardTitle.innerHTML = stage1AuthorsArr[ind].address;
    for ( let i: number = 0; i<5; i++) {
        let a: HTMLElement = stage1CardAuthor[i] as HTMLElement;
        a.title = stage1AuthorsArr[ind].fio;
    }
}
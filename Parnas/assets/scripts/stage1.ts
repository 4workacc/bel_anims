import { IMan, stage1Authors } from "./task1";

const stage1StartButton: HTMLElement  = document.getElementById('SecondScreen_Title__but');

const stage1TitleScreen: HTMLElement = document.getElementById('SecondScreen_Title');
const stage1GameScreen: HTMLElement = document.getElementById('SecondScreen_Game');
const stage1ResultScreen: HTMLElement = document.getElementById('SecondScreen_Result');

const stage1AuthorsPanel: HTMLElement = document.getElementById('SecondScreen_card__authors');

let stage1CurCLickedMark: HTMLElement = document.getElementById('stage1Geomark');
let stage1CurAnswerCount: number = 0;
`#####################################################`
// 
const stage1ShowResultScreen = () => {
    stage1GameScreen.style.left = '-101%';    
    stage1ResultScreen.style.left = '0';
}
//
stage1StartButton.onclick = () => {
    stage1TitleScreen.style.left = '-101%';
    stage1SetGeomarks();
    stage1GameScreen.style.left = '0';
}
// SHOW AND HIDE CARD WITH AUTHORS

const stage1GameCard: HTMLElement = document.getElementById('SecondScreen_Game__card');

const stage1ShowCard = () => {
    stage1GameCard.style.left = '50%';
    stage1GameCard.style.opacity = '1';
    stage1GameCard.style.display = 'block';
}

const stage1HideCard = () => {
    stage1GameCard.style.left = '101%';
    stage1GameCard.style.opacity = '0';
    stage1GameCard.style.display = 'none';
   
    while (stage1AuthorsPanel.firstChild) {
        stage1AuthorsPanel.removeChild(stage1AuthorsPanel.firstChild);
    }
}

// GENERATE CUR AUTHORS SET

const stage1CurAuthors: IMan[] = [];
const randIndexArr: number[] = [];

while (stage1CurAuthors.length < 5) {
    let randInd: number = Math.floor(Math.random() * stage1Authors.length);
    if (randIndexArr.indexOf(randInd) === -1) {
        randIndexArr.push(randInd);
        stage1CurAuthors.push(stage1Authors[randInd]);
    }
}
//
const stage1CardTitle: HTMLElement = document.getElementById('SecondScreen_Card__title');

const generatePortraits = (ind: number) => {
    
    for (let i: number = 0; i < 5; i++) {
        let port: HTMLElement = document.createElement('div');
        port.classList.add('SecondScreen_card__author');
        port.id = 'SecondScreen_card__author' + i;
        port.style.backgroundImage = `url(../assets/images/stage1/${i}.jpg)`
        port.onclick = () => portClickHandler( i );
        stage1AuthorsPanel.appendChild(port);
    }
};
const portClickHandler = ( ind: number ) => {
    stage1HideCard();
    stage1CurAnswerCount += 1;
    if ( stage1CurAnswerCount === 5 ) {
        stage1ShowResultScreen();
    }
    stage1CurCLickedMark.style.display = 'none';
}
const stage1GenerateCard = (ind: number) => {
    stage1CardTitle.innerHTML = stage1CurAuthors[ind].address;
    stage1CurCLickedMark = document.getElementById(`stage1Geomark${ind}`);   
    generatePortraits(ind);
    stage1ShowCard();
}

// SET GEOMARKS AT MAP

const stage1SetGeomarks = () => {
    for (let i: number = 0; i < stage1CurAuthors.length; i++) {
        const mark1: HTMLElement = document.createElement('div');
        mark1.classList.add('Geomark');
        mark1.id = 'stage1Geomark' + i;
        mark1.onclick = () => stage1GenerateCard(i);
        mark1.style.left = stage1CurAuthors[i].coordX + 'px';
        mark1.style.top = stage1CurAuthors[i].coordY + 'px';
        document.getElementById('SecondScreen_Game__map').appendChild(mark1);
    }
}


import { IMan, stage1Authors } from "./task1";

const stage1StartButton: HTMLElement = document.getElementById('SecondScreen_Title__but');

const stage1TitleScreen: HTMLElement = document.getElementById('SecondScreen_Title');
const stage1GameScreen: HTMLElement = document.getElementById('SecondScreen_Game');
const stage1ResultScreen: HTMLElement = document.getElementById('SecondScreen_Result');

const stage1AuthorsPanel: HTMLElement = document.getElementById('SecondScreen_card__authors');

let stage1CurCLickedMark: HTMLElement = document.getElementById('stage1Geomark');
let stage1CurAnswerCount: number = 0;
let stage1RightCount: number = 0;
let stage1CurAuthor: IMan = stage1Authors[0];
const stage1CurAuthors: IMan[] = [];
const randIndexArr: number[] = [];
let curMarkX: number = -100;
let curMarkY: number = -100;
`#####################################################`
// 
const stage1ShowResultScreen = () => {
    stage1GameScreen.style.left = '-101%';
    let stage1ResultImg: HTMLElement = document.getElementById('SecondScreen_Result__img');
    let stage1ResultTitle: HTMLElement = document.getElementById('SecondScreen_Result__title');
    if (stage1RightCount > 3) {
        stage1ResultImg.classList.add('SecondScreen_Result__imggood');
        stage1ResultTitle.innerHTML = 'Добра';
    }
    else {
        stage1ResultImg.classList.add('SecondScreen_Result__imgbad');
        stage1ResultTitle.innerHTML = 'Дрэнна';
    }
    stage1ResultScreen.style.left = '0';
}
//
stage1StartButton.onclick = () => {
    // GENERATE CUR AUTHORS SET
    while (stage1CurAuthors.length < 5) {
        let randInd: number = Math.floor(Math.random() * stage1Authors.length);
        if (randIndexArr.indexOf(randInd) === -1) {
            randIndexArr.push(randInd);
            stage1CurAuthors.push(stage1Authors[randInd]);
        }
    }
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
//
const stage1CardTitle: HTMLElement = document.getElementById('SecondScreen_Card__title');

const stage1RandomPortraits = (ind: number): string[] => {

    let randImgs: any[] = [];
    while (randImgs.length < 5) {
        let indx: number = Math.floor(Math.random() * stage1Authors.length);
        if (randImgs.indexOf(stage1Authors[indx].img) === -1) {
            randImgs.push(stage1Authors[indx].img);
        }
    }
    if (randImgs.indexOf(stage1CurAuthor.img) === -1) {
        randImgs[Math.floor(Math.random() * 4)] = stage1CurAuthor.img;
    }

    return randImgs;
}

const generatePortraits = (ind: number) => {
    let por: string[] = stage1RandomPortraits(ind);
    for (var i: number = 0; i < 5; i++) {
        let port: HTMLElement = document.createElement('div');
        port.classList.add('SecondScreen_card__author');
        port.id = 'SecondScreen_card__author' + i;
        port.style.backgroundImage = `url(../assets/images/stage1/${por[i]}.jpg)`
        port.onclick = (e) => portClickHandler(e);
        stage1AuthorsPanel.appendChild(port);
    }
};
const portClickHandler = (e: any) => {
    stage1HideCard();
    if (stage1CurAuthor.img === e.target.style.backgroundImage.split('/')[4].split('.')[0]) {
        stage1RightCount += 1;
        generateRightMark();
    }
    else {
        generateBadMark();
    };
    stage1CurAnswerCount += 1;
    if (stage1CurAnswerCount === 5) {
        stage1ShowResultScreen();
    }
    stage1CurCLickedMark.style.display = 'none';
}

const stage1GenerateCard = (ind: number, newX: number, newY: number) => {
    stage1CardTitle.innerHTML = stage1CurAuthors[ind].address;
    stage1CurCLickedMark = document.getElementById(`stage1Geomark${ind}`);
    stage1CurAuthor = stage1CurAuthors[ind];
    curMarkX = newX;
    curMarkY = newY;
    generatePortraits(ind);
    stage1ShowCard();
}

// SET GEOMARKS AT MAP

const stage1SetGeomarks = () => {
    for (let i: number = 0; i < stage1CurAuthors.length; i++) {
        const mark1: HTMLElement = document.createElement('div');
        mark1.classList.add('Geomark');
        mark1.id = 'stage1Geomark' + i;
        mark1.onclick = () => stage1GenerateCard(i, stage1CurAuthors[i].coordX, stage1CurAuthors[i].coordY);
        mark1.style.left = stage1CurAuthors[i].coordX + 'px';
        mark1.style.top = stage1CurAuthors[i].coordY + 'px';
        document.getElementById('SecondScreen_Game__map').appendChild(mark1);
    }
}

const generateRightMark = () => {  

    let m: HTMLElement = document.createElement('div');
    m.classList.add('SecondScreen_card__rightMark');
    m.style.left = curMarkX + 'px';
    m.style.top = curMarkY + 'px';
    document.getElementById('SecondScreen_Game__map').appendChild(m);
}
const generateBadMark = () => {
    let m: HTMLElement = document.createElement('div');
    m.classList.add('SecondScreen_card__badMark');
    m.style.left = curMarkX + 'px';
    m.style.top = curMarkY + 'px';
    document.getElementById('SecondScreen_Game__map').appendChild(m);
}


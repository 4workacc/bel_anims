import { globalScore } from "./script";

const stage1StartButton: HTMLElement  = document.getElementById('SecondScreen_Title__but');

const stage1TitleScreen: HTMLElement = document.getElementById('SecondScreen_Title');
const stage1GameScfeen: HTMLElement = document.getElementById('SecondScreen_Game');
const stage1ResultScreen: HTMLElement = document.getElementById('SecondScreen_Result');

stage1StartButton.onclick = () => {
    stage1TitleScreen.style.left = '-101%';
    stage1GameScfeen.style.left = '0';
}
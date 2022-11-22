//Start game
import '../styles/main.scss';
import './stage0';
import './stage1';
 
var startBut = document.getElementById('StartBut');

var TitleScreen:HTMLElement = document.getElementById('TitleScreen');
var FirstScreen:HTMLElement = document.getElementById('FirstScreen');
var SecondScreen:HTMLElement = document.getElementById('SecondScreen');
var ThirdScreen:HTMLElement = document.getElementById('ThirdScreen');
var FinalScreen:HTMLElement = document.getElementById('FinalScreen');

startBut!.onclick = function(){
    TitleScreen!.style.left = '-1024px'; 
    FirstScreen!.style.left = '0px';
}

const stage0ResultButton: HTMLElement = document.getElementById('FinalScreen_Result__but');
stage0ResultButton.onclick = () => {
    FirstScreen!.style.left = '-1024px';
    SecondScreen.style.left = '0';
}

const stage1ResultButton: HTMLElement = document.getElementById('SecondScreen_Result__but');
stage1ResultButton.onclick = () => {
    SecondScreen!.style.left = '-1024px';
    ThirdScreen!.style.left = '0';
}

export let globalScore:number = 0;





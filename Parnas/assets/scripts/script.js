//Start game
import stage0vare, * as s0 from './stage0';

var startBut = document.getElementById('StartBut');

var TitleScreen = document.getElementById('TitleScreen');
var FirstScreen = document.getElementById('FirstScreen');
var SecondScreen = document.getElementById('SecondScreen');
var ThirdScreen = document.getElementById('ThirdScreen');
var FinalScreen = document.getElementById('FinalScreen');

startBut.onclick = function(){
    TitleScreen.style.left = '-1024px';
    FirstScreen.style.left = stage0vare + 'px';    
}

var globalScore = 0;

function startStage0(){
    
}
function startStage1(){

}
function startStage2(){

}
function final(){

}


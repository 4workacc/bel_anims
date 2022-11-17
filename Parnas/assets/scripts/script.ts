//Start game
import '../styles/main.scss';
import './stage0';
 
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

var globalScore:number = 0;





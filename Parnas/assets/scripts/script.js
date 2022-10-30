//Start game
var startBut = document.getElementById('StartBut');

var TitleScreen = document.getElementById('TitleScreen');
var FirstScreen = document.getElementById('FirstScreen');
var SecondScreen = document.getElementById('SecondScreen');
var ThirdScreen = document.getElementById('ThirdScreen');
var FinalScreen = document.getElementById('FinalScreen');

startBut.onclick = function(){
    TitleScreen.style.left = '-1024px';
    FirstScreen.style.left = '0px';
}
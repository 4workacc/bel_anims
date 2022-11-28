//Start game
import '../styles/main.scss';

import './stage0';
import './stage1';
import './stage2';

import '../fonts/Lobster-Regular.ttf';
import '../fonts/Pacifico-Regular.ttf';

import '../images/stage0/0_01.png';
import '../images/stage0/0_02.png';
import '../images/stage0/0_03.png';
import '../images/stage1/1_01.png';
import '../images/stage1/1_02.png';
import '../images/stage1/1_03.png';
import '../images/global/back01.png';
import '../images/global/back2.png';
import '../images/global/back21.png';
import '../images/global/back22.png';
import '../images/global/back32.png';
import '../images/global/back42.png';
import '../images/stage1/geomark_neutral.png';
import '../images/stage1/map.png';
import '../images/stage1/markBad.png';
import '../images/stage1/markGood.png';
import '../images/global/znak.jpg';

import '../images/stage1/0.jpg';
import '../images/stage1/1.jpg';
import '../images/stage1/2.jpg';
import '../images/stage1/3.jpg';
import '../images/stage1/4.jpg';
import '../images/stage1/5.jpg';
import '../images/stage1/6.jpg';
import '../images/stage1/7.jpg';
import '../images/stage1/8.jpg';
import '../images/stage1/9.jpg';
import '../images/stage1/10.jpg';
import '../images/stage1/11.jpg';
import '../images/stage1/12.jpg';
import '../images/stage1/13.jpg';
import '../images/stage1/14.jpg';
import '../images/stage1/15.jpg';
import '../images/stage1/16.jpg';
import '../images/stage1/17.jpg';
import '../images/stage1/18.jpg';
import '../images/stage1/19.jpg';
import '../images/stage1/20.jpg';
import '../images/stage1/21.jpg';
import '../images/stage1/22.jpg';

import '../images/stage2/imgs - 0009.png';
import '../images/stage2/imgs - 0010.png';
import '../images/stage2/imgs - 0011.png';


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





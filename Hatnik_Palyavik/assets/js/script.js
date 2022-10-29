var hata_words = ["Печ", "Жырандоль", "Калаўрот", "Начоўка", "Макацёр", "Дзяжа", "Збан", "Прас","Нагавіцы","Бурнос", "Гарлачык", "Слоік", "Сподак", "Лыжка", "Талерка", "Калдуны", "Адрына", "Пуня"];
var pole_words = ["Адрына","Пуня", "Саха", "Серп", "Барана", "Плуг", "Цапільна", "Свіран", "Смык", "Вершаліна", "Каса", "Граблі", "Веялка", "Ільнамялкі", "Сякера", "Рыдлёўка"];
console.log(hata_words)
var fullWordArr = hata_words.concat( pole_words );
// GLOBAL VARS
var globalWordCount = 10;
var gameWords = [];
var curWord = "";
var rightCount = 0;
//SCREENS 
var TitleScreen = document.getElementById('TitleScreen');
var MainScreen = document.getElementById('MainScreen');
var ResultScreen = document.getElementById('ResultScreen');
var Main = document.getElementById('Main');

//SELECT QUESTION COUNT BUTTONS
var but10 = document.getElementById('but10');
var but20 = document.getElementById('but20');
var but30 = document.getElementById('but30');

//UTILS
function shuffle(array) {array.sort(() => Math.random() - 0.5);};
shuffle( fullWordArr );

//SELECT QUESTION COUNT
but10.onclick = function(){ questionCountHandler(10); };
but20.onclick = function(){ questionCountHandler(20); };
but30.onclick = function(){ questionCountHandler(30); };

function questionCountHandler( count ) {
    globalWordCount = count;  
    but10.classList.remove('ActiveButton');
    but20.classList.remove('ActiveButton');
    but30.classList.remove('ActiveButton');
    switch ( count ) {
        case 10 : 
            but10.classList.add('ActiveButton');
            break;
        case 20 : 
            but20.classList.add('ActiveButton');
            break;
        case 30 : 
            but30.classList.add('ActiveButton');
            break;
    }   
}
// GENERATE ARRAY AT SCREEN
function generateDisplaingWords(){
    while ( document.getElementById('Words').firstChild) {
        document.getElementById('Words').removeChild( document.getElementById('Words').lastChild);
    }
    var gArr = [];
    for ( var i=0; i<=gameWords.length; i++) {
        var word = document.createElement('p');
        word.innerText = gameWords[i];
        word.id = 'Word'+i;
        word.classList.add('Word');
        gArr.push(word);
    }
    for ( var i=0; i<gArr.length; i++) {
        document.getElementById('Words').appendChild(gArr[i]);
    }
    gArr[0].style.fontSize = '40px';
    curWord = gArr[0].innerHTML;
}

//START BUTTON
var StartBut = document.getElementById('StartBut');

StartBut.onclick = function(){   
    gameWords = [];
    for ( var i=0; i<globalWordCount; i++) {
        gameWords[i] = fullWordArr[i];
    };
    while ( document.getElementById('Bar').firstChild) {
        document.getElementById('Bar').removeChild( document.getElementById('Bar').lastChild);
    }       
    for (var i=0; i <globalWordCount; i++) {
        var bar = document.createElement('div');
        bar.id = 'bar'+i;
        bar.classList.add('bar');
        document.getElementById('Bar').appendChild(bar);
    }

    generateDisplaingWords();
    
    TitleScreen.style.left = '-101%';
    MainScreen.style.left = '0';
    Main.style.left = '0';

    console.log(curWord);
}

var ALeft = document.getElementById('ArrowLeft');
var ARight = document.getElementById('ArrowRight');

ALeft.onclick = function() {
    if ( hata_words.indexOf(curWord) != -1 ) {
        setRight()
    }
    else {
        setWrong();
    }
    gameWords.shift();
    if ( gameWords.length > 0 ) {
        generateDisplaingWords();    
    }
    else {
        alert ("Дакладна адказаў : " + rightCount + " з "+globalWordCount + " ("+(rightCount/globalWordCount)*100+"%)");
    }
}
ARight.onclick = function() {
    if ( pole_words.indexOf(curWord) != -1 ) {
        setRight()
    }
    else {
        setWrong();
    }
    gameWords.shift();
    if ( gameWords.length > 0 ) {
        generateDisplaingWords();    
    }
    else {
        alert ("Дакладна адказаў : " + rightCount + " з "+globalWordCount + " ("+(rightCount/globalWordCount)*100+"%)");
    }
}
function setRight() {
    var curBarIndex = globalWordCount - gameWords.length;
    document.getElementById('bar'+curBarIndex).classList.add('right_bar');
    rightCount += 1;
}
function setWrong() {
    var curBarIndex = globalWordCount - gameWords.length;
    document.getElementById('bar'+curBarIndex).classList.add('wrong_bar');
}
var words = [
    "Печ", "Жырандоль", "Калаўрот", "Начоўка", "Макацёр", "Дзяжа", "Збан", "Прас",
    "Нагавіцы","Бурнос", "Гарлачык", "Слоік", "Сподак", "Лыжка", "Талерка", "Калдуны",    
    "Адрына", "Пуня", "Саха", "Серп", "Барана", "Плуг", "Свіран",    
    "Смык",    
    "Вершаліна",    
    "Каса",     
    "Граблі",    
    "Веялка",    
    "Ільнамялкі",    
    "Сякера",    
    "Рыдлёўка"    
]

var TitleScreen = document.getElementById('TitleScreen');
var MainScreen = document.getElementById('MainScreen');
var ResultScreen = document.getElementById('ResultScreen');
var Main = document.getElementById('Main');

//START GAME SECTION
var StartBut = document.getElementById('StartBut');

StartBut.onclick = function(){   
    TitleScreen.style.left = '-101%';
    MainScreen.style.left = '0';
    Main.style.left = '0';
}
//GENERATE ARRAY SECTION
var gameWords = [];
var curWordIndex = 0;
for ( var i=0; i<words.length; i++) {
    var word = document.createElement('p');
    word.innerText = words[i];
    word.id = 'Word'+i;
    word.classList.add('Word');
    gameWords.push(word);
}
shuffle(gameWords);
SetWordList();
//
for (var i=0; i <words.length; i++) {
    var bar = document.createElement('div');
    bar.id = 'bar'+i;
    bar.classList.add('bar');
    document.getElementById('Bar').appendChild(bar);
}
// 
var ALeft = document.getElementById('ArrowLeft');
var ARight = document.getElementById('ArrowRight');

ALeft.onclick = function(){
    gameWords.shift();
    curWordIndex += 1;
    SetWordList();
}
ARight.onclick = function(){
    gameWords.shift();
    curWordIndex += 1;
    SetWordList();
}

function SetWordList(){
    while ( document.getElementById('Words').firstChild) {
        document.getElementById('Words').removeChild( document.getElementById('Words').lastChild);
      }
    for ( var i=0; i<gameWords.length; i++) {
        document.getElementById('Words').appendChild(gameWords[i]);
    }
    gameWords[0].style.fontSize = '40px';
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
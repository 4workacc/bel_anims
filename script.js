var author_data = [
    {
        "name" : "Янка Купала",
        "adress" : "фальварак Вязынка Мінскага павета Мінскай губерні (цяпер вёска Вязынка Маладзечанскага раёна Мінскай вобласці).",
        "left" : "533",
        "top" : "419",
        "img" : "1.jpg"
    },
    {
        "name" : "Якуб Колас",
        "adress" : "засценак Акінчыцы Мінскага павета Мінскай губерні (цяпер у межах г. Стоўбцы)",
        "left" : "487",
        "top" : "550",
        "img" : "2.jpg"
    },
    {
        "name" : "Кузьма Чорны",
        "adress" : "в. Боркі, Слуцкі павет, цяпер Капыльскі раён, Мінская вобласць",
        "left" : "581",
        "top" : "637",
        "img" : "3.jpg"
    },
    {
        "name" : "Максім Танк",
        "adress" : "в. Пількаўшчына, Вілейскі павет, цяпер Мядзельскі раён  ",
        "left" : "526",
        "top" : "284",
        "img" : "4.jpg"
    },
    {
        "name" : "Рыгор Барадулін",
        "adress" : "хутар Верасоўка, Ушацкі раён, Віцебская вобласць",
        "left" : "717",
        "top" : "227",
        "img" : "5.jpg"
    },
    {
        "name" : "Змітрок Бядуля  ",
        "adress" : "в. Пасадзец, цяпер Лагойскі раён, Мінская вобласць",
        "left" : "591",
        "top" : "331",
        "img" : "6.jpg"
    },
    {
        "name" : "Пятро Глебка",
        "adress" : "в. Вялікая Уса, цяпер Уздзенскі раён, Мінская вобласць",
        "left" : "552",
        "top" : "488",
        "img" : "7.jpg"
    },
    {
        "name" : "Данута Бічэль",
        "adress" : "в. Біскупцы Лідскі раён ",
        "left" : "379",
        "top" : "442",
        "img" : "8.jpg"
    },
    {
        "name" : "Андрэй Макаёнак",
        "adress" : "в. Борхаў, Рагачоўскі раён, Гомельская вобласць",
        "left" : "909",
        "top" : "592",
        "img" : "9.jpg"
    },
    {
        "name" : "Цётка",
        "adress" : "фальварак Пешчын,  Лідскі раён",
        "left" : "417",
        "top" : "515",
        "img" : "10.jpg"
    },
    {
        "name" : "І. Шамякін   ",
        "adress" : "вёска Карма, Добрушскі раён, Гомельская вобласць",
        "left" : "1034",
        "top" : "734",
        "img" : "11.jpg"
    }
];

var maxMarkCount = 5;

var active_marks = document.getElementsByClassName("mark");
var randomedIndexes = [];
while ( randomedIndexes.length < maxMarkCount ) {
    var newInd = Math.floor(Math.random()*author_data.length);
    if ( randomedIndexes.indexOf(newInd) === -1 ) {
        randomedIndexes.push(newInd);
    } 
}
var active_autors = [];

for ( var i=0; i<maxMarkCount; i++) {
    active_autors.push( author_data[randomedIndexes[i]])
}

console.log(active_autors)

var active_infos = [];

var portraits = document.querySelectorAll(".portraits");
var fios = document.querySelectorAll(".fios");

for ( var i=0; i<maxMarkCount; i++) {
    active_infos[i] = active_autors[i].adress;
    active_marks[i].style.left = active_autors[i].left+"px";
    active_marks[i].style.top = active_autors[i].top+"px";
    active_marks[i].alt = active_autors[i].adress;
    active_marks[i].title = active_autors[i].adress;

    portraits[i].style.backgroundImage = "url('./assets/"+active_autors[i].img+"')";
    fios[i].innerHTML = active_autors[i].name;
}

var info_adress = document.querySelector("#info_adress");

var isUIVisible = false;

for ( let i=0; i<maxMarkCount; i++) {
    active_marks[i].onclick = function(){
        info_adress.innerHTML = active_autors[i].adress;        
        if (!isUIVisible) {
            showUI();        
            active_marks[i].classList.add("selectedMark");
            selectedAutor = active_autors[i];
        }
    }
}

var portrait_panel = document.querySelector("#portraits");
var fios_panel = document.querySelector("#fios");
var answer_panel = document.querySelector("#answer");
var answer_port = document.querySelector("#answer_port");
var answer_fio = document.querySelector("#answer_fio");
var resultMarks = document.querySelectorAll(".result");

var selectedFio = null;
var selectedPort = null;
var selectedMark = null;
var selectedAutor = null;

function showUI(){          
    portrait_panel.style.left = "0px";
    fios_panel.style.right = "-100px";
    answer_panel.style.display = "block";
    isUIVisible = true;
}
function hideUI(){  
    portrait_panel.style.left = "-1000px";
    fios_panel.style.right = "-1000px";
    answer_panel.style.display = "none";
    answer_fio.innerHTML = "";
    answer_port.style.backgroundImage = null;
    info_adress.innerHTML = "";
    isUIVisible = false;
}

for ( let i=0; i<maxMarkCount; i++) {
    portraits[i].onclick = function(){
        clearSelectionPort();
        portraits[i].classList.add("selectedPort");
        selectedPort = portraits[i];
        answer_port.style.backgroundImage =  portraits[i].style.backgroundImage;
    }
}
for ( let i=0; i<maxMarkCount; i++) {
    fios[i].onclick = function(){
        clearSelectionFIO();
        fios[i].classList.add("selectedFIO");
        selectedFio = fios[i];       
        answer_fio.innerHTML = selectedFio.innerHTML;
    }
}
function clearSelectionFIO(){
    for ( let i=0; i<maxMarkCount; i++) {
        fios[i].classList.remove("selectedFIO");        
    }
}
function clearSelectionPort(){
    for ( let i=0; i<maxMarkCount; i++) {
        portraits[i].classList.remove("selectedPort");      
    }
}

document.querySelector("#answer_close_but").onclick = function(){
    hideUI();    
}

var answerCount = 0;
var rightCount = 0;


document.querySelector("#answer_but").onclick = function(){
    if ( selectedFio !== null && selectedPort !== null) {           
        var isFioRight = selectedAutor.name === selectedFio.innerHTML;
        var isPortRight = selectedAutor.img === selectedPort.style.backgroundImage.split("/")[2].split("\"")[0];
        var isAdressRight = false ;
        for ( var i=0; i<maxMarkCount; i++) {
            if (active_autors[i].name ===answer_fio.innerHTML) {               
                if ( active_autors[i].adress === info_adress.innerHTML) {
                    isAdressRight = true;                  
                    break;
                }
            }           
        }
        if ( isFioRight && isAdressRight && isPortRight ) {
            rightCount += 1;
            resultMarks[answerCount].style.backgroundColor = "green";
        }
        else {
            resultMarks[answerCount].style.backgroundColor = "red";
        }
        hideUI();
        document.querySelector(".selectedFIO").style.display = "none"; 
        document.querySelector(".selectedFIO").classList.remove("selectedFIO");     
        document.querySelector(".selectedPort").style.display = "none";   
        document.querySelector(".selectedPort").classList.remove("selectedPort");
        document.querySelector(".selectedMark").style.display = "none";   
        document.querySelector(".selectedMark").classList.remove("selectedMark"); 
        answerCount += 1;
        if ( answerCount === maxMarkCount) {
            alert("Дакладна "+rightCount+ " з "+maxMarkCount);
        }
    }
    else {
        alert("Неабходна выбраць партрэт i прозвiшча, альбо закрыть карту")
    }
}
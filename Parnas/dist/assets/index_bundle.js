/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/styles/main.scss":
/*!*********************************!*\
  !*** ./assets/styles/main.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./assets/styles/main.scss?");

/***/ }),

/***/ "./assets/scripts/script.ts":
/*!**********************************!*\
  !*** ./assets/scripts/script.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"globalScore\": () => (/* binding */ globalScore)\n/* harmony export */ });\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.scss */ \"./assets/styles/main.scss\");\n/* harmony import */ var _stage0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stage0 */ \"./assets/scripts/stage0.ts\");\n/* harmony import */ var _stage1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stage1 */ \"./assets/scripts/stage1.ts\");\n//Start game\r\n\r\n\r\n\r\nvar startBut = document.getElementById('StartBut');\r\nvar TitleScreen = document.getElementById('TitleScreen');\r\nvar FirstScreen = document.getElementById('FirstScreen');\r\nvar SecondScreen = document.getElementById('SecondScreen');\r\nvar ThirdScreen = document.getElementById('ThirdScreen');\r\nvar FinalScreen = document.getElementById('FinalScreen');\r\nstartBut.onclick = function () {\r\n    TitleScreen.style.left = '-1024px';\r\n    FirstScreen.style.left = '0px';\r\n};\r\nvar stage0ResultButton = document.getElementById('FinalScreen_Result__but');\r\nstage0ResultButton.onclick = function () {\r\n    FirstScreen.style.left = '-1024px';\r\n    SecondScreen.style.left = '0';\r\n};\r\nvar stage1ResultButton = document.getElementById('SecondScreen_Result__but');\r\nstage1ResultButton.onclick = function () {\r\n    SecondScreen.style.left = '-1024px';\r\n    ThirdScreen.style.left = '0';\r\n};\r\nvar globalScore = 0;\r\n\n\n//# sourceURL=webpack:///./assets/scripts/script.ts?");

/***/ }),

/***/ "./assets/scripts/stage0.ts":
/*!**********************************!*\
  !*** ./assets/scripts/stage0.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _task0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task0 */ \"./assets/scripts/task0.ts\");\n\r\n\r\nvar stage0TaskCount = 10;\r\nvar curIndex = 0;\r\nvar simptomsArr = [];\r\nvar booksArr = [];\r\nvar curRightBook = '';\r\nvar rightAnswersCount = 0;\r\nwhile (simptomsArr.length < stage0TaskCount) {\r\n    var ind = Math.floor(Math.random() * _task0__WEBPACK_IMPORTED_MODULE_0__.test.length);\r\n    var tempSimptom = _task0__WEBPACK_IMPORTED_MODULE_0__.test[ind];\r\n    if (simptomsArr.indexOf(tempSimptom) == -1) {\r\n        simptomsArr.push(tempSimptom);\r\n        booksArr.push(_task0__WEBPACK_IMPORTED_MODULE_0__.books[ind]);\r\n    }\r\n}\r\n//screens\r\nvar stage0TitleScreen = document.getElementById('FirstScreen_Title');\r\nvar stage0GameScreen = document.getElementById('FirstScreen_Game');\r\nvar stage0ResultScreen = document.getElementById('FirstScreen_Result');\r\n//panels\r\nvar stage0ProgressBar = document.getElementById('FirstScreen_Game__results');\r\nvar stage0BookPanel = document.getElementById('FirstScreen_Game__booksList');\r\n//text\r\nvar stage0MainText = document.getElementById('FirstScreen_Game__simptomP');\r\nvar stage0ResultScreenText = document.getElementById('FinalScreen_Result__text');\r\n//buttons \r\nvar stage0StartButton = document.getElementById('FirstScreen_Title__but');\r\n//imgs\r\nvar stage0ResultScreenImg = document.getElementById('FinalScreen_Result__img');\r\nstage0StartButton.onclick = function () {\r\n    generateShots();\r\n    generateBooks();\r\n    stage0MainText.innerHTML = simptomsArr[curIndex];\r\n    stage0TitleScreen.style.left = '-1100px';\r\n    stage0GameScreen.style.left = '0';\r\n};\r\nvar generateShots = function () {\r\n    for (var i = 0; i < stage0TaskCount; i++) {\r\n        var shot = document.createElement('div');\r\n        shot.classList.add('FirstScreen_Game__shot');\r\n        shot.id = 'FirstScreen_Game__shot' + i;\r\n        stage0ProgressBar.appendChild(shot);\r\n    }\r\n};\r\nvar generateBooks = function () {\r\n    curRightBook = booksArr[curIndex];\r\n    var curBooksArr = ['', '', '', '', ''];\r\n    curBooksArr[Math.floor(Math.random() * 5)] = booksArr[curIndex];\r\n    for (var i = 0; i < 5; i++) {\r\n        if (curBooksArr[i] === '') {\r\n            while (curBooksArr[i] === '') {\r\n                var randomBook = booksArr[Math.floor(Math.random() * booksArr.length)];\r\n                if (curBooksArr.indexOf(randomBook) === -1) {\r\n                    curBooksArr[i] = randomBook;\r\n                }\r\n            }\r\n        }\r\n    }\r\n    while (stage0BookPanel.firstChild) {\r\n        stage0BookPanel.removeChild(stage0BookPanel.lastChild);\r\n    }\r\n    var _loop_1 = function (i) {\r\n        var book = document.createElement('p');\r\n        book.classList.add('FirstScreen_Game__book');\r\n        book.id = 'FirstScreen_Game__book' + i;\r\n        book.innerHTML = curBooksArr[i];\r\n        book.onclick = function () {\r\n            setShot(curBooksArr[i]);\r\n            newStep();\r\n        };\r\n        stage0BookPanel.appendChild(book);\r\n    };\r\n    for (var i = 0; i < 5; i++) {\r\n        _loop_1(i);\r\n    }\r\n};\r\nvar newStep = function () {\r\n    curIndex += 1;\r\n    if (curIndex < stage0TaskCount) {\r\n        stage0MainText.innerHTML = simptomsArr[curIndex];\r\n        generateBooks();\r\n    }\r\n    else {\r\n        showResult();\r\n        stage0GameScreen.style.left = '-101%';\r\n        stage0ResultScreen.style.left = '0';\r\n    }\r\n};\r\nvar setShot = function (userSelectedBook) {\r\n    if (userSelectedBook === curRightBook) {\r\n        rightAnswersCount += 1;\r\n        document.getElementById('FirstScreen_Game__shot' + curIndex).style.backgroundColor = 'green';\r\n    }\r\n    else {\r\n        document.getElementById('FirstScreen_Game__shot' + curIndex).style.backgroundColor = 'red';\r\n    }\r\n};\r\nvar showResult = function () {\r\n    var stage0Score = rightAnswersCount / stage0TaskCount;\r\n    if (stage0Score > 0.7) {\r\n        stage0ResultScreenText.innerHTML = 'Выдатна ' + stage0Score;\r\n        stage0ResultScreenImg.classList.add('FinalScreen_Result__imgGood');\r\n    }\r\n    else {\r\n        stage0ResultScreenText.innerHTML = 'Дрэнна ' + stage0Score;\r\n        stage0ResultScreenImg.classList.add('FinalScreen_Result__imgBad');\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./assets/scripts/stage0.ts?");

/***/ }),

/***/ "./assets/scripts/stage1.ts":
/*!**********************************!*\
  !*** ./assets/scripts/stage1.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _task1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task1 */ \"./assets/scripts/task1.ts\");\n\r\nvar stage1StartButton = document.getElementById('SecondScreen_Title__but');\r\nvar stage1TitleScreen = document.getElementById('SecondScreen_Title');\r\nvar stage1GameScreen = document.getElementById('SecondScreen_Game');\r\nvar stage1ResultScreen = document.getElementById('SecondScreen_Result');\r\nvar stage1AuthorsPanel = document.getElementById('SecondScreen_card__authors');\r\nvar stage1CurCLickedMark = document.getElementById('stage1Geomark');\r\nvar stage1CurAnswerCount = 0;\r\n\"#####################################################\";\r\n// \r\nvar stage1ShowResultScreen = function () {\r\n    stage1GameScreen.style.left = '-101%';\r\n    stage1ResultScreen.style.left = '0';\r\n};\r\n//\r\nstage1StartButton.onclick = function () {\r\n    stage1TitleScreen.style.left = '-101%';\r\n    stage1SetGeomarks();\r\n    stage1GameScreen.style.left = '0';\r\n};\r\n// SHOW AND HIDE CARD WITH AUTHORS\r\nvar stage1GameCard = document.getElementById('SecondScreen_Game__card');\r\nvar stage1ShowCard = function () {\r\n    stage1GameCard.style.left = '50%';\r\n    stage1GameCard.style.opacity = '1';\r\n    stage1GameCard.style.display = 'block';\r\n};\r\nvar stage1HideCard = function () {\r\n    stage1GameCard.style.left = '101%';\r\n    stage1GameCard.style.opacity = '0';\r\n    stage1GameCard.style.display = 'none';\r\n    while (stage1AuthorsPanel.firstChild) {\r\n        stage1AuthorsPanel.removeChild(stage1AuthorsPanel.firstChild);\r\n    }\r\n};\r\n// GENERATE CUR AUTHORS SET\r\nvar stage1CurAuthors = [];\r\nvar randIndexArr = [];\r\nwhile (stage1CurAuthors.length < 5) {\r\n    var randInd = Math.floor(Math.random() * _task1__WEBPACK_IMPORTED_MODULE_0__.stage1Authors.length);\r\n    if (randIndexArr.indexOf(randInd) === -1) {\r\n        randIndexArr.push(randInd);\r\n        stage1CurAuthors.push(_task1__WEBPACK_IMPORTED_MODULE_0__.stage1Authors[randInd]);\r\n    }\r\n}\r\n//\r\nvar stage1CardTitle = document.getElementById('SecondScreen_Card__title');\r\nvar generatePortraits = function (ind) {\r\n    var _loop_1 = function (i) {\r\n        var port = document.createElement('div');\r\n        port.classList.add('SecondScreen_card__author');\r\n        port.id = 'SecondScreen_card__author' + i;\r\n        port.style.backgroundImage = \"url(../assets/images/stage1/\".concat(i, \".jpg)\");\r\n        port.onclick = function () { return portClickHandler(i); };\r\n        stage1AuthorsPanel.appendChild(port);\r\n    };\r\n    for (var i = 0; i < 5; i++) {\r\n        _loop_1(i);\r\n    }\r\n};\r\nvar portClickHandler = function (ind) {\r\n    stage1HideCard();\r\n    stage1CurAnswerCount += 1;\r\n    if (stage1CurAnswerCount === 5) {\r\n        stage1ShowResultScreen();\r\n    }\r\n    stage1CurCLickedMark.style.display = 'none';\r\n};\r\nvar stage1GenerateCard = function (ind) {\r\n    stage1CardTitle.innerHTML = stage1CurAuthors[ind].address;\r\n    stage1CurCLickedMark = document.getElementById(\"stage1Geomark\".concat(ind));\r\n    generatePortraits(ind);\r\n    stage1ShowCard();\r\n};\r\n// SET GEOMARKS AT MAP\r\nvar stage1SetGeomarks = function () {\r\n    var _loop_2 = function (i) {\r\n        var mark1 = document.createElement('div');\r\n        mark1.classList.add('Geomark');\r\n        mark1.id = 'stage1Geomark' + i;\r\n        mark1.onclick = function () { return stage1GenerateCard(i); };\r\n        mark1.style.left = stage1CurAuthors[i].coordX + 'px';\r\n        mark1.style.top = stage1CurAuthors[i].coordY + 'px';\r\n        document.getElementById('SecondScreen_Game__map').appendChild(mark1);\r\n    };\r\n    for (var i = 0; i < stage1CurAuthors.length; i++) {\r\n        _loop_2(i);\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./assets/scripts/stage1.ts?");

/***/ }),

/***/ "./assets/scripts/task0.ts":
/*!*********************************!*\
  !*** ./assets/scripts/task0.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"books\": () => (/* binding */ books),\n/* harmony export */   \"test\": () => (/* binding */ test)\n/* harmony export */ });\nvar test = [\r\n    'Цялушка, пан, загадкі, дзяўчынка',\r\n    'Залатое пяро, яблыня, ваўчыха, жывая вада',\r\n    'Асёл, певень, кот, сабака, разбойнікі',\r\n    'Старац, хан Батый, Юсуфі',\r\n    'Пятро, Гнат, бацька, велікан, парады',\r\n    'Марыйка, маргарыткі, сон, стакротка',\r\n    'Сямён, чорны сабака, вуж, карона, Марыся',\r\n    'Лёня Саўчанка, Грыша Міхневіч, адзнака, завіруха, крыўда, хворая нага',\r\n    'Серж, дзядуля, газа, партызаны',\r\n    'Ф. Валенрод, Ульрык фон Юнгінген, Вітаўт, крыжакі',\r\n    'Марыля, Тонік, “стараста”, Сямён Мокуць, Жолудзь, немцы',\r\n    'Ірка, алені, рагаты, смажанае мяса',\r\n    'Чорная кошка, кацяняты',\r\n    'Антарыс-5, доктар Савіч, гальштук',\r\n    'Князь, белы палац, гусляр, бяседа, дуб',\r\n    'Клецкі, дзеці, Ліпава, бярозавы сок, дзядзька',\r\n    'Тэкля, чаканне, вайна 16 год, Васіль, помнік',\r\n    'Тэкля, пан, Каляды, грошы',\r\n    'Цыркуль, лацінская мова, тры ордэны, табакерка',\r\n    'Пан Цаба, польская мова, Данік Малец, абаранкі',\r\n    'Пантона-Мантона-Дэмантона, канькі, запіскі, лёд, Эма',\r\n    'Беларуская хата, арнамент, стравы, печ',\r\n    'Белы плашчык, чырвоны берэцік, кабанчык, Сцяпан, рукі маці',\r\n    'Сонца, калодзеж, Гастрыт',\r\n    'Залаты пояс, васілёк, персідскі ўзор',\r\n    'Вечар, чабор, дзеўчына, прастор',\r\n    'Інсургенты, Гораў, жанчына, вераб’іная ноч',\r\n    'Ласяня, ляснік, браканьеры',\r\n    'Вучоны, сала, рыдлёўкі, немцы, гімнасцёрка',\r\n    'Асілак, каханне, Наталька, пан, магіла',\r\n    'Праўда, лыч, бруд, падсвінак',\r\n    'Настаўнік, каханне, А.Быкоўскі',\r\n    'Скальпель, Сажань, падполле, бальніца',\r\n    'Бомба, Бабоўка, калектывізацыя, немцы, Гуж',\r\n    'Вундеркінд, бібліятэка, тэлевізар, размовы пра палітыку',\r\n    'Балота, каханне, рабіна, перадзел зямлі, бандыты',\r\n    'Паўстанне, дзядзькаванне, Белы конь, князь',\r\n    'Прывіды, партрэт, балота, апошняя з роду'\r\n];\r\nvar books = [\r\n    'Разумная дачка',\r\n    'Залаты птах',\r\n    'Музыкі',\r\n    '\"Лебядзіны скіт\" У.Караткевіч',\r\n    '«Нямоглы бацька» У.Караткевіч',\r\n    ' «Падслуханая казка» А.Федарэнка',\r\n    '«Вужыная карона» Я.Баршчэўскі',\r\n    '«Сябры» А.Васілевіч',\r\n    '«Насцечка» К.Чорны',\r\n    '«Незабыўная старонка славянскай мінуўшчыны» Г.Сянкевіч',\r\n    '«Салодкія яблыкі» В.Адамчык',\r\n    '«Алені» І.Пташнікаў',\r\n    '«Багіра» Я.Маўр',\r\n    '«Гальштучнік» Р.Баравікова',\r\n    '«Курган» Я.Купала',\r\n    '«Дзядзька-кухар» Я.Колас',\r\n    '«Незагойная рана» В.Быкаў',\r\n    '«На Каляды к сыну» З.Бядуля',\r\n    '«Настаўнік чарчэння» І.Навуменка',\r\n    '«Урокі пані Мар’і» Я.Брыль',\r\n    '«Мэры Кэт» М.Лупсякоў',\r\n    '«Зямля пад белымі крыламі» У.Караткевіч',\r\n    '«Дзяльба кабанчыка» В.Карамазаў ',\r\n    '«Вечар» А.Дудараў',\r\n    '«Слуцкія ткачыхі» М.Багдановіч',\r\n    ' «Пахне чабор» П.Броўка',\r\n    ' «Паром на бурнай рацэ» У.Караткевіч',\r\n    '«Губаты» Г.Далідовіч',\r\n    '«Жураўліны крык» В.Быкаў',\r\n    '«Магіла льва» Я.Купала',\r\n    '«Ганарысты парсюк» К.Крапіва',\r\n    '«Паўлінка» Я.Купала',\r\n    '«Сэрца на далоні» І.Шамякін',\r\n    ' «Знак бяды» В.Быкаў',\r\n    '«Зацюканы апостал» А.Макаёнак',\r\n    '«Людзі на балоце» І.Мележ',\r\n    '«Каласы пад сярпом тваім» У.Караткевіч',\r\n    '«Дзікае паляванне караля Стаха» У. Караткевіч'\r\n];\r\n\n\n//# sourceURL=webpack:///./assets/scripts/task0.ts?");

/***/ }),

/***/ "./assets/scripts/task1.ts":
/*!*********************************!*\
  !*** ./assets/scripts/task1.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stage1Authors\": () => (/* binding */ stage1Authors)\n/* harmony export */ });\nvar stage1Authors = [\r\n    {\r\n        fio: \"Янка Купала\",\r\n        address: \"фальварак Вязынка Мінскага павета Мінскай губерні (цяпер вёска Вязынка Маладзечанскага раёна Мінскай вобласці)\",\r\n        coordX: 351,\r\n        coordY: 324,\r\n        img: \"0\"\r\n    },\r\n    {\r\n        fio: \"Якуб Колас\",\r\n        address: \"Акінчыцы Мінскага павета Мінскай губерні (цяпер у межах г.Стоўбцы)\",\r\n        coordX: 312,\r\n        coordY: 371,\r\n        img: \"1\"\r\n    },\r\n    {\r\n        fio: \"Кузьма Чорны\",\r\n        address: \"в. Боркі, Слуцкі павет, цяпер Капыльскі раён, Мінская вобласць\",\r\n        coordX: 384,\r\n        coordY: 400,\r\n        img: \"2\"\r\n    },\r\n    {\r\n        fio: \"Максім Танк\",\r\n        address: \"в. Пількаўшчына, Вілейскі павет, цяпер Мядзельскі раён  \",\r\n        coordX: 341,\r\n        coordY: 216,\r\n        img: \"3\"\r\n    },\r\n    {\r\n        fio: \"Рыгор Барадулін\",\r\n        address: \"Городок, Ушацкі раён, Віцебская вобласць\",\r\n        coordX: 600,\r\n        coordY: 106,\r\n        img: \"4\"\r\n    },\r\n    {\r\n        fio: \"Змітрок Бядуля\",\r\n        address: \"в. Пасадзец, цяпер Лагойскі раён, Мінская вобласць\",\r\n        coordX: 378,\r\n        coordY: 271,\r\n        img: \"5\"\r\n    },\r\n    {\r\n        fio: \"Пятро Глебка\",\r\n        address: \"в. Вялікая Уса, цяпер Уздзенскі раён, Мінская вобласць\",\r\n        coordX: 372,\r\n        coordY: 397,\r\n        img: \"6\"\r\n    },\r\n    {\r\n        fio: \"Данута Бічэль\",\r\n        address: \"Бічэль  в. Біскупцы Лідскі раён \",\r\n        coordX: 207,\r\n        coordY: 353,\r\n        img: \"7\"\r\n    },\r\n    {\r\n        fio: \"Андрэй Макаёнак\",\r\n        address: \"Макаёнак  в. Борхаў, Рагачоўскі раён, Гомельская вобласць\",\r\n        coordX: 655,\r\n        coordY: 454,\r\n        img: \"8\"\r\n    },\r\n    {\r\n        fio: \"Цётка\",\r\n        address: \"фальварак Пешчын, Лідскі раён\",\r\n        coordX: 166,\r\n        coordY: 374,\r\n        img: \"9\"\r\n    },\r\n    {\r\n        fio: \"Іван Шамякін\",\r\n        address: \"вёска Карма, Добрушскі раён, Гомельская вобласць\",\r\n        coordX: 383,\r\n        coordY: 392,\r\n        img: \"10\"\r\n    },\r\n    {\r\n        fio: \"Ядвігін Ш\",\r\n        address: \"агр. Добасна, Кіраўскі раён,  Магілёўская вобласць\",\r\n        coordX: 579,\r\n        coordY: 465,\r\n        img: \"11\"\r\n    },\r\n    {\r\n        fio: \"Кандрат Крапіва\",\r\n        address: \"в. Нізок, Уздзенскі раён, Мінская вобласць\",\r\n        coordX: 364,\r\n        coordY: 429,\r\n        img: \"12\"\r\n    },\r\n    {\r\n        fio: \"Уладзімір Караткевіч\",\r\n        address: \"г. Орша, Віцебская вобласць\",\r\n        coordX: 640,\r\n        coordY: 266,\r\n        img: \"13\"\r\n    },\r\n    {\r\n        fio: \"Васіль Быкаў\",\r\n        address: \"в. Бычкі, Ушацкі раён, Віцебская вобласць\",\r\n        coordX: 456,\r\n        coordY: 164,\r\n        img: \"14\"\r\n    },\r\n    {\r\n        fio: \"Алена Васілевіч\",\r\n        address: \"засценак Даманшчына, цяпер вёска Ліпнікі, Слуцкі раён, Мінская вобласць \",\r\n        coordX: 178,\r\n        coordY: 607,\r\n        img: \"15\"\r\n    },\r\n    {\r\n        fio: \"Раіса Баравікова\",\r\n        address: \"в. Пешкі, Бярозаўскі раён, Брэсцкая вобласць \",\r\n        coordX: 147,\r\n        coordY: 581,\r\n        img: \"\"\r\n    },\r\n    {\r\n        fio: \"Яўгенія Янішчыц\",\r\n        address: \"в. Рудка, Пінскі раён, Брэсцкая вобласць \",\r\n        coordX: 241,\r\n        coordY: 597,\r\n        img: \"16\"\r\n    },\r\n    {\r\n        fio: \"Пятрусь Броўка\",\r\n        address: \"в. Пуцілкавічы, Ушацкі раён, Віцебская вобласць\",\r\n        coordX: 454,\r\n        coordY: 190,\r\n        img: \"17\"\r\n    },\r\n    {\r\n        fio: \"Анатоль Грачанікаў\",\r\n        address: \"Шарпілаўка, Гомельскі раён, Гомельская вобласць\",\r\n        coordX: 538,\r\n        coordY: 269,\r\n        img: \"18\"\r\n    },\r\n    {\r\n        fio: \"Андрэй Федарэнка\",\r\n        address: \"в. Бярозаўка Мазырскі раён, Гомельская вобласць\",\r\n        coordX: 215,\r\n        coordY: 369,\r\n        img: \"19\"\r\n    },\r\n    {\r\n        fio: \"Генадзь Бураўкін\",\r\n        address: \"в. Тродавічы, Расонскі раён, Віцебская вобласць\",\r\n        coordX: 522,\r\n        coordY: 80,\r\n        img: \"20\"\r\n    },\r\n    {\r\n        fio: \"Любоў Канстанцінаўна Тарасюк\",\r\n        address: \"в. Пінкавічы, Пінскі раён, Брэсцкая \",\r\n        coordX: 255,\r\n        coordY: 618,\r\n        img: \"21\"\r\n    }\r\n];\r\n\n\n//# sourceURL=webpack:///./assets/scripts/task1.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/scripts/script.ts");
/******/ 	
/******/ })()
;
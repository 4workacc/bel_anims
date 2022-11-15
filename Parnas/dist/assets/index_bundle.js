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

/***/ "./assets/scripts/stage0.js":
/*!**********************************!*\
  !*** ./assets/scripts/stage0.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar stage0vare = 10;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stage0vare);\n\n//# sourceURL=webpack:///./assets/scripts/stage0.js?");

/***/ }),

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.scss */ \"./assets/styles/main.scss\");\n/* harmony import */ var _stage0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stage0 */ \"./assets/scripts/stage0.js\");\n/* harmony import */ var _task0__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task0 */ \"./assets/scripts/task0.ts\");\n//Start game\n\n\n\n\nvar startBut = document.getElementById('StartBut');\nvar TitleScreen = document.getElementById('TitleScreen');\nvar FirstScreen = document.getElementById('FirstScreen');\nvar SecondScreen = document.getElementById('SecondScreen');\nvar ThirdScreen = document.getElementById('ThirdScreen');\nvar FinalScreen = document.getElementById('FinalScreen');\nstartBut.onclick = function () {\n    TitleScreen.style.left = '-1024px';\n    FirstScreen.style.left = _stage0__WEBPACK_IMPORTED_MODULE_1__[\"default\"] + 'px';\n};\nvar globalScore = 0;\nconsole.log(_task0__WEBPACK_IMPORTED_MODULE_2__.test);\nconsole.log(_task0__WEBPACK_IMPORTED_MODULE_2__.books);\nfunction startStage0() {\n}\nfunction startStage1() {\n}\nfunction startStage2() {\n}\nfunction final() {\n}\n\n\n//# sourceURL=webpack:///./assets/scripts/script.ts?");

/***/ }),

/***/ "./assets/scripts/task0.ts":
/*!*********************************!*\
  !*** ./assets/scripts/task0.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"books\": () => (/* binding */ books),\n/* harmony export */   \"test\": () => (/* binding */ test)\n/* harmony export */ });\nvar test = [\n    'Цялушка, пан, загадкі, дзяўчынка',\n    'Залатое пяро, яблыня, ваўчыха, жывая вада',\n    'Асёл, певень, кот, сабака, разбойнікі',\n    'Старац, хан Батый, Юсуфі',\n    'Пятро, Гнат, бацька, велікан, парады',\n    'Марыйка, маргарыткі, сон, стакротка',\n    'Сямён, чорны сабака, вуж, карона, Марыся',\n    'Лёня Саўчанка, Грыша Міхневіч, адзнака, завіруха, крыўда, хворая нага',\n    'Серж, дзядуля, газа, партызаны',\n    'Ф. Валенрод, Ульрык фон Юнгінген, Вітаўт, крыжакі',\n    'Марыля, Тонік, “стараста”, Сямён Мокуць, Жолудзь, немцы',\n    'Ірка, алені, рагаты, смажанае мяса',\n    'Чорная кошка, кацяняты',\n    'Антарыс-5, доктар Савіч, гальштук',\n    'Князь, белы палац, гусляр, бяседа, дуб',\n    'Клецкі, дзеці, Ліпава, бярозавы сок, дзядзька',\n    'Тэкля, чаканне, вайна 16 год, Васіль, помнік',\n    'Тэкля, пан, Каляды, грошы',\n    'Цыркуль, лацінская мова, тры ордэны, табакерка',\n    'Пан Цаба, польская мова, Данік Малец, абаранкі',\n    'Пантона-Мантона-Дэмантона, канькі, запіскі, лёд, Эма',\n    'Беларуская хата, арнамент, стравы, печ',\n    'Белы плашчык, чырвоны берэцік, кабанчык, Сцяпан, рукі маці',\n    'Сонца, калодзеж, Гастрыт',\n    'Залаты пояс, васілёк, персідскі ўзор',\n    'Вечар, чабор, дзеўчына, прастор',\n    'Інсургенты, Гораў, жанчына, вераб’іная ноч',\n    'Ласяня, ляснік, браканьеры',\n    'Вучоны, сала, рыдлёўкі, немцы, гімнасцёрка',\n    'Асілак, каханне, Наталька, пан, магіла',\n    'Праўда, лыч, бруд, падсвінак',\n    'Настаўнік, каханне, А.Быкоўскі',\n    'Скальпель, Сажань, падполле, бальніца',\n    'Бомба, Бабоўка, калектывізацыя, немцы, Гуж',\n    'Вундеркінд, бібліятэка, тэлевізар, размовы пра палітыку',\n    'Балота, каханне, рабіна, перадзел зямлі, бандыты',\n    'Паўстанне, дзядзькаванне, Белы конь, князь',\n    'Прывіды, партрэт, балота, апошняя з роду'\n];\nvar books = [\n    'Разумная дачка',\n    'Залаты птах',\n    'Музыкі',\n    '\"Лебядзіны скіт\" У.Караткевіч',\n    '«Нямоглы бацька» У.Караткевіч',\n    ' «Падслуханая казка» А.Федарэнка',\n    '«Вужыная карона» Я.Баршчэўскі',\n    '«Сябры» А.Васілевіч',\n    '«Насцечка» К.Чорны',\n    '«Незабыўная старонка славянскай мінуўшчыны» Г.Сянкевіч',\n    '«Салодкія яблыкі» В.Адамчык',\n    '«Алені» І.Пташнікаў',\n    '«Багіра» Я.Маўр',\n    '«Гальштучнік» Р.Баравікова',\n    '«Курган» Я.Купала',\n    '«Дзядзька-кухар» Я.Колас',\n    '«Незагойная рана» В.Быкаў',\n    '«На Каляды к сыну» З.Бядуля',\n    '«Настаўнік чарчэння» І.Навуменка',\n    '«Урокі пані Мар’і» Я.Брыль',\n    '«Мэры Кэт» М.Лупсякоў',\n    '«Зямля пад белымі крыламі» У.Караткевіч',\n    '«Дзяльба кабанчыка» В.Карамазаў ',\n    '«Вечар» А.Дудараў',\n    '«Слуцкія ткачыхі» М.Багдановіч',\n    ' «Пахне чабор» П.Броўка',\n    ' «Паром на бурнай рацэ» У.Караткевіч',\n    '«Губаты» Г.Далідовіч',\n    '«Жураўліны крык» В.Быкаў',\n    '«Магіла льва» Я.Купала',\n    '«Ганарысты парсюк» К.Крапіва',\n    '«Паўлінка» Я.Купала',\n    '«Сэрца на далоні» І.Шамякін',\n    ' «Знак бяды» В.Быкаў',\n    '«Зацюканы апостал» А.Макаёнак',\n    '«Людзі на балоце» І.Мележ',\n    '«Каласы пад сярпом тваім» У.Караткевіч',\n    '«Дзікае паляванне караля Стаха» У. Караткевіч'\n];\n\n\n//# sourceURL=webpack:///./assets/scripts/task0.ts?");

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
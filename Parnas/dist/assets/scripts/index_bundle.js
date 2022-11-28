(()=>{"use strict";var e={379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var d={},c=[],a=0;a<e.length;a++){var i=e[a],s=r.base?i[0]+r.base:i[0],l=d[s]||0,m="".concat(s," ").concat(l);d[s]=l+1;var u=n(m),f={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var _=o(f,r);r.byIndex=a,t.splice(a,0,{identifier:m,updater:_,references:1})}c.push(m)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var d=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<d.length;c++){var a=n(d[c]);t[a].references--}for(var i=r(e,o),s=0;s<d.length;s++){var l=n(d[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}d=i}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var d=n.sourceMap;d&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(d))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var d=t[r]={exports:{}};return e[r](d,d.exports,n),d.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0,(()=>{var e={};n.r(e);var t=n(379),r=n.n(t),o=n(795),d=n.n(o),c=n(569),a=n.n(c),i=n(565),s=n.n(i),l=n(216),m=n.n(l),u=n(589),f=n.n(u),_={};_.styleTagTransform=f(),_.setAttributes=s(),_.insert=a().bind(null,"head"),_.domAPI=d(),_.insertStyleElement=m(),r()(e.default,_),e.default&&e.default.locals&&e.default.locals;for(var g=["Цялушка, пан, загадкі, дзяўчынка","Залатое пяро, яблыня, ваўчыха, жывая вада","Асёл, певень, кот, сабака, разбойнікі","Старац, хан Батый, Юсуфі","Пятро, Гнат, бацька, велікан, парады","Марыйка, маргарыткі, сон, стакротка","Сямён, чорны сабака, вуж, карона, Марыся","Лёня Саўчанка, Грыша Міхневіч, адзнака, завіруха, крыўда, хворая нага","Серж, дзядуля, газа, партызаны","Ф. Валенрод, Ульрык фон Юнгінген, Вітаўт, крыжакі","Марыля, Тонік, “стараста”, Сямён Мокуць, Жолудзь, немцы","Ірка, алені, рагаты, смажанае мяса","Чорная кошка, кацяняты","Антарыс-5, доктар Савіч, гальштук","Князь, белы палац, гусляр, бяседа, дуб","Клецкі, дзеці, Ліпава, бярозавы сок, дзядзька","Тэкля, чаканне, вайна 16 год, Васіль, помнік","Тэкля, пан, Каляды, грошы","Цыркуль, лацінская мова, тры ордэны, табакерка","Пан Цаба, польская мова, Данік Малец, абаранкі","Пантона-Мантона-Дэмантона, канькі, запіскі, лёд, Эма","Беларуская хата, арнамент, стравы, печ","Белы плашчык, чырвоны берэцік, кабанчык, Сцяпан, рукі маці","Сонца, калодзеж, Гастрыт","Залаты пояс, васілёк, персідскі ўзор","Вечар, чабор, дзеўчына, прастор","Інсургенты, Гораў, жанчына, вераб’іная ноч","Ласяня, ляснік, браканьеры","Вучоны, сала, рыдлёўкі, немцы, гімнасцёрка","Асілак, каханне, Наталька, пан, магіла","Праўда, лыч, бруд, падсвінак","Настаўнік, каханне, А.Быкоўскі","Скальпель, Сажань, падполле, бальніца","Бомба, Бабоўка, калектывізацыя, немцы, Гуж","Вундеркінд, бібліятэка, тэлевізар, размовы пра палітыку","Балота, каханне, рабіна, перадзел зямлі, бандыты","Паўстанне, дзядзькаванне, Белы конь, князь","Прывіды, партрэт, балота, апошняя з роду"],p=["Разумная дачка","Залаты птах","Музыкі",'"Лебядзіны скіт" У.Караткевіч',"«Нямоглы бацька» У.Караткевіч"," «Падслуханая казка» А.Федарэнка","«Вужыная карона» Я.Баршчэўскі","«Сябры» А.Васілевіч","«Насцечка» К.Чорны","«Незабыўная старонка славянскай мінуўшчыны» Г.Сянкевіч","«Салодкія яблыкі» В.Адамчык","«Алені» І.Пташнікаў","«Багіра» Я.Маўр","«Гальштучнік» Р.Баравікова","«Курган» Я.Купала","«Дзядзька-кухар» Я.Колас","«Незагойная рана» В.Быкаў","«На Каляды к сыну» З.Бядуля","«Настаўнік чарчэння» І.Навуменка","«Урокі пані Мар’і» Я.Брыль","«Мэры Кэт» М.Лупсякоў","«Зямля пад белымі крыламі» У.Караткевіч","«Дзяльба кабанчыка» В.Карамазаў ","«Вечар» А.Дудараў","«Слуцкія ткачыхі» М.Багдановіч"," «Пахне чабор» П.Броўка"," «Паром на бурнай рацэ» У.Караткевіч","«Губаты» Г.Далідовіч","«Жураўліны крык» В.Быкаў","«Магіла льва» Я.Купала","«Ганарысты парсюк» К.Крапіва","«Паўлінка» Я.Купала","«Сэрца на далоні» І.Шамякін"," «Знак бяды» В.Быкаў","«Зацюканы апостал» А.Макаёнак","«Людзі на балоце» І.Мележ","«Каласы пад сярпом тваім» У.Караткевіч","«Дзікае паляванне караля Стаха» У. Караткевіч"],y=0,h=[],S=[],v="",E=0;h.length<10;){var I=Math.floor(Math.random()*g.length),B=g[I];-1==h.indexOf(B)&&(h.push(B),S.push(p[I]))}var T=document.getElementById("FirstScreen_Title"),M=document.getElementById("FirstScreen_Game"),b=document.getElementById("FirstScreen_Result"),x=document.getElementById("FirstScreen_Game__results"),C=document.getElementById("FirstScreen_Game__booksList"),G=document.getElementById("FirstScreen_Game__simptomP"),L=document.getElementById("FinalScreen_Result__text"),k=document.getElementById("FirstScreen_Title__but"),X=document.getElementById("FinalScreen_Result__img");k.onclick=function(){Y(),F(),G.innerHTML=h[y],T.style.left="-1100px",M.style.left="0"};var Y=function(){for(var e=0;e<10;e++){var t=document.createElement("div");t.classList.add("FirstScreen_Game__shot"),t.id="FirstScreen_Game__shot"+e,x.appendChild(t)}},F=function(){v=S[y];var e=["","","","",""];e[Math.floor(5*Math.random())]=S[y];for(var t=0;t<5;t++)if(""===e[t])for(;""===e[t];){var n=S[Math.floor(Math.random()*S.length)];-1===e.indexOf(n)&&(e[t]=n)}for(;C.firstChild;)C.removeChild(C.lastChild);var r=function(t){var n=document.createElement("p");n.classList.add("FirstScreen_Game__book"),n.id="FirstScreen_Game__book"+t,n.innerHTML=e[t],n.onclick=function(){O(e[t]),R()},C.appendChild(n)};for(t=0;t<5;t++)r(t)},R=function(){(y+=1)<10?(G.innerHTML=h[y],F()):(H(),M.style.left="-101%",b.style.left="0")},O=function(e){e===v?(E+=1,document.getElementById("FirstScreen_Game__shot"+y).style.backgroundColor="green"):document.getElementById("FirstScreen_Game__shot"+y).style.backgroundColor="red"},H=function(){var e=E/10;e>.7?(L.innerHTML="Выдатна "+e,X.classList.add("FinalScreen_Result__imgGood")):(L.innerHTML="Дрэнна "+e,X.classList.add("FinalScreen_Result__imgBad"))},w=[{fio:"Янка Купала",address:"фальварак Вязынка Мінскага павета Мінскай губерні (цяпер вёска Вязынка Маладзечанскага раёна Мінскай вобласці)",coordX:351,coordY:324,img:"0"},{fio:"Якуб Колас",address:"Акінчыцы Мінскага павета Мінскай губерні (цяпер у межах г.Стоўбцы)",coordX:312,coordY:371,img:"1"},{fio:"Кузьма Чорны",address:"в. Боркі, Слуцкі павет, цяпер Капыльскі раён, Мінская вобласць",coordX:384,coordY:400,img:"2"},{fio:"Максім Танк",address:"в. Пількаўшчына, Вілейскі павет, цяпер Мядзельскі раён  ",coordX:341,coordY:216,img:"3"},{fio:"Рыгор Барадулін",address:"Городок, Ушацкі раён, Віцебская вобласць",coordX:600,coordY:106,img:"4"},{fio:"Змітрок Бядуля",address:"в. Пасадзец, цяпер Лагойскі раён, Мінская вобласць",coordX:378,coordY:271,img:"5"},{fio:"Пятро Глебка",address:"в. Вялікая Уса, цяпер Уздзенскі раён, Мінская вобласць",coordX:372,coordY:397,img:"6"},{fio:"Данута Бічэль",address:"Бічэль  в. Біскупцы Лідскі раён ",coordX:207,coordY:353,img:"7"},{fio:"Андрэй Макаёнак",address:"Макаёнак  в. Борхаў, Рагачоўскі раён, Гомельская вобласць",coordX:655,coordY:454,img:"8"},{fio:"Цётка",address:"фальварак Пешчын, Лідскі раён",coordX:166,coordY:374,img:"9"},{fio:"Іван Шамякін",address:"вёска Карма, Добрушскі раён, Гомельская вобласць",coordX:383,coordY:392,img:"10"},{fio:"Ядвігін Ш",address:"агр. Добасна, Кіраўскі раён,  Магілёўская вобласць",coordX:579,coordY:465,img:"11"},{fio:"Кандрат Крапіва",address:"в. Нізок, Уздзенскі раён, Мінская вобласць",coordX:364,coordY:429,img:"12"},{fio:"Уладзімір Караткевіч",address:"г. Орша, Віцебская вобласць",coordX:640,coordY:266,img:"13"},{fio:"Васіль Быкаў",address:"в. Бычкі, Ушацкі раён, Віцебская вобласць",coordX:456,coordY:164,img:"14"},{fio:"Алена Васілевіч",address:"засценак Даманшчына, цяпер вёска Ліпнікі, Слуцкі раён, Мінская вобласць ",coordX:178,coordY:607,img:"15"},{fio:"Раіса Баравікова",address:"в. Пешкі, Бярозаўскі раён, Брэсцкая вобласць ",coordX:147,coordY:581,img:"16"},{fio:"Яўгенія Янішчыц",address:"в. Рудка, Пінскі раён, Брэсцкая вобласць ",coordX:241,coordY:597,img:"17"},{fio:"Пятрусь Броўка",address:"в. Пуцілкавічы, Ушацкі раён, Віцебская вобласць",coordX:454,coordY:190,img:"18"},{fio:"Анатоль Грачанікаў",address:"Шарпілаўка, Гомельскі раён, Гомельская вобласць",coordX:538,coordY:269,img:"19"},{fio:"Андрэй Федарэнка",address:"в. Бярозаўка Мазырскі раён, Гомельская вобласць",coordX:215,coordY:369,img:"20"},{fio:"Генадзь Бураўкін",address:"в. Тродавічы, Расонскі раён, Віцебская вобласць",coordX:522,coordY:80,img:"21"},{fio:"Любоў Канстанцінаўна Тарасюк",address:"в. Пінкавічы, Пінскі раён, Брэсцкая ",coordX:255,coordY:618,img:"22"}],P=document.getElementById("SecondScreen_Title__but"),j=document.getElementById("SecondScreen_Title"),A=document.getElementById("SecondScreen_Game"),N=document.getElementById("SecondScreen_Result"),U=document.getElementById("SecondScreen_card__authors"),q=document.getElementById("stage1Geomark"),D=0,J=0,z=w[0],K=[],Q=[],V=-100,W=-100;P.onclick=function(){for(;K.length<5;){var e=Math.floor(Math.random()*w.length);-1===Q.indexOf(e)&&(Q.push(e),K.push(w[e]))}j.style.left="-101%",ne(),A.style.left="0"};var Z=document.getElementById("SecondScreen_Game__card"),$=document.getElementById("SecondScreen_Card__title"),ee=function(e){!function(){for(Z.style.left="101%",Z.style.opacity="0",Z.style.display="none";U.firstChild;)U.removeChild(U.firstChild)}();var t=e.target.style.backgroundImage.split("/");z.img===t[t.length-1].split(".")[0]?(J+=1,re()):oe(),5===(D+=1)&&function(){A.style.left="-101%";var e=document.getElementById("SecondScreen_Result__img"),t=document.getElementById("SecondScreen_Result__title");J>3?(e.classList.add("SecondScreen_Result__imggood"),t.innerHTML="Добра"):(e.classList.add("SecondScreen_Result__imgbad"),t.innerHTML="Дрэнна"),N.style.left="0"}(),q.style.display="none"},te=function(e,t,n){$.innerHTML=K[e].address,q=document.getElementById("stage1Geomark".concat(e)),z=K[e],V=t,W=n,function(e){for(var t=function(e){for(var t=[];t.length<5;){var n=Math.floor(Math.random()*w.length);-1===t.indexOf(w[n].img)&&t.push(w[n].img)}return-1===t.indexOf(z.img)&&(t[Math.floor(4*Math.random())]=z.img),t}(),n=0;n<5;n++){var r=document.createElement("div");r.classList.add("SecondScreen_card__author"),r.id="SecondScreen_card__author"+n,r.style.backgroundImage="url(assets/images/stage1/".concat(t[n],".jpg)"),r.onclick=function(e){return ee(e)},U.appendChild(r)}}(),Z.style.left="50%",Z.style.opacity="1",Z.style.display="block"},ne=function(){for(var e=function(e){var t=document.createElement("div");t.classList.add("Geomark"),t.id="stage1Geomark"+e,t.onclick=function(){return te(e,K[e].coordX,K[e].coordY)},t.style.left=K[e].coordX+"px",t.style.top=K[e].coordY+"px",document.getElementById("SecondScreen_Game__map").appendChild(t)},t=0;t<K.length;t++)e(t)},re=function(){var e=document.createElement("div");e.classList.add("SecondScreen_card__rightMark"),e.style.left=V+"px",e.style.top=W+"px",document.getElementById("SecondScreen_Game__map").appendChild(e)},oe=function(){var e=document.createElement("div");e.classList.add("SecondScreen_card__badMark"),e.style.left=V+"px",e.style.top=W+"px",document.getElementById("SecondScreen_Game__map").appendChild(e)},de=["Яська-гаспадар з-пад Вільні ","Мацей Бурачок ","Янка Лучына ","Карусь Каганец ","Ядвігін Ш. ","Цётка  ","Змітрок Бядуля ","Якуб Колас ","Янка Купала ","Янка Маўр ","Цішка Гартны ","Кандрат Крапіва ","Міхась Чарот ","Кузьма Чорны ","Язэп Пушча ","Максім Танк ","Адам Глобус "],ce=["Кастусь Каліноўскі","Францішак Багушэвіч","Іван Люцыянавіч Неслухоўскі","Казімір Кастравіцкі ","Антон Іванавіч Лявіцкі","Алаіза Сцяпанаўна Пашкевіч","Самуіл Яфімавіч Плаўнік","Канстанцін Міхайлавіч Міцкевіч","Іван Дамінікавіч Луцэвіч","Іван Міхайлавіч Фёдараў","Зміцер Жылуновіч","Кандрат Кандратавіч Атраховіч","Міхаіл Сымонавіч Кудзелька","Мікалай Карлавіч Раманоўскі","Іосіф Паўлавіч Плашчынскі","Яўген Іванавіч Скурко","Уладзімір Вячаслававіч Адамчык"],ae=document.getElementById("ThirdScreen_Title__but"),ie=document.getElementById("ThirdScreen_Title"),se=document.getElementById("ThirdScreen_Game"),le=document.getElementById("ThirdScreen_Results"),me=document.getElementById("ThirdScreen_Game__title"),ue=document.getElementById("ThirdScreen_Game__fios"),fe=document.getElementById("ThirdScreen_Game__results"),_e=[],ge=[],pe="",ye=0;ae.onclick=function(){ie.style.left="-101%",Ee(),he(),Ie(),se.style.left="0"};var he=function(){me.innerHTML=ge[ye],ge[ye],pe=_e[ye];for(var e=function(){for(var e=[];e.length<5;){var t=Math.floor(Math.random()*de.length-1);-1===e.indexOf(ce[t])&&e.push(ce[t])}if(-1===e.indexOf(_e[ye])){var n=Math.floor(5*Math.random());console.log(n),e[n]=_e[ye]}return e}();ue.firstChild;)ue.removeChild(ue.firstChild);for(var t=function(t){var n=document.createElement("p");n.innerHTML=e[t],n.onclick=function(){return ve(e[t])},n.classList.add("ThirdScreen_Game__fio"),ue.appendChild(n)},n=0;n<e.length;n++)t(n)},Se=document.getElementsByClassName("ThirdScreen_Game__result"),ve=function(e){e===pe?Se[ye].classList.add("ThirdScreen_Game__resultgood"):Se[ye].classList.add("ThirdScreen_Game__resultbad"),(ye+=1)<5?he():(se.style.left="-101%",le.style.left="0")},Ee=function(){for(;ge.length<5;){var e=Math.floor(Math.random()*de.length);-1===ge.indexOf(de[e])&&(_e.push(ce[e]),ge.push(de[e]))}},Ie=function(){for(var e=0;e<5;e++){var t=document.createElement("div");t.classList.add("ThirdScreen_Game__result"),fe.appendChild(t)}},Be=document.getElementById("StartBut"),Te=document.getElementById("TitleScreen"),Me=document.getElementById("FirstScreen"),be=document.getElementById("SecondScreen"),xe=document.getElementById("ThirdScreen");document.getElementById("FinalScreen"),Be.onclick=function(){Te.style.left="-1024px",Me.style.left="0px"},document.getElementById("FinalScreen_Result__but").onclick=function(){Me.style.left="-1024px",be.style.left="0"},document.getElementById("SecondScreen_Result__but").onclick=function(){be.style.left="-1024px",xe.style.left="0"}})()})();
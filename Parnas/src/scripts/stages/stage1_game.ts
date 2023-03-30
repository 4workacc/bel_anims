import "../../styles/_stage1.scss";
import { IMan } from "../tasks/task1";
import { stage1Authors } from "../tasks/task1";

const stage1_countOfAuthors: number = 5;
let stage1_arrayOfAuthors: IMan[] = [];
// let stage1_arrayOfMarks: HTMLElement[] = [];
let stage1_Cards: HTMLElement = document.getElementById("Stage1_Card")!;

export const stage1_StartGame = () => {
    stage1_Cards.style.display = "none";
    stage1_generateArrayOfAuthors();
    console.log(1, stage1_arrayOfAuthors);
}

let stage1_curClickedMark: any = null;

const stage1_generateArrayOfAuthors = () => {
    while (stage1_arrayOfAuthors.length < stage1_countOfAuthors) {
        let randInd: number = Math.floor(Math.random() * stage1Authors.length);
        if (stage1_arrayOfAuthors.indexOf(stage1Authors[randInd]) === -1) {
            stage1_arrayOfAuthors.push(stage1Authors[randInd]);

            let newMark: HTMLElement = document.createElement("div");
            newMark.classList.add("Stage1_Mark");
            newMark.style.left = `${stage1Authors[randInd].coordX}px`;
            newMark.style.top = `${stage1Authors[randInd].coordY}px`;
            newMark.title = `${stage1Authors[randInd].address}`;

            newMark.onclick = () => {
                stage1_curClickedMark = newMark;
                console.log(stage1_curClickedMark.title);
                let portArr: IMan[] = stage1_generateAuthorsCards(stage1Authors[randInd]);

                document.getElementById("Stage1_AuthorPlace")!.innerHTML = `${stage1Authors[randInd].address}`;
                document.getElementById("Stage1_AuthorPort0")!.title = portArr[0].fio;
                document.getElementById("Stage1_AuthorPort0")!.classList.add(`Stage1_Author${portArr[0].img}`);
                document.getElementById("Stage1_AuthorPort1")!.title = portArr[1].fio;
                document.getElementById("Stage1_AuthorPort1")!.classList.add(`Stage1_Author${portArr[1].img}`);
                document.getElementById("Stage1_AuthorPort2")!.title = portArr[2].fio;
                document.getElementById("Stage1_AuthorPort2")!.classList.add(`Stage1_Author${portArr[2].img}`);
                document.getElementById("Stage1_AuthorPort3")!.title = portArr[3].fio;
                document.getElementById("Stage1_AuthorPort3")!.classList.add(`Stage1_Author${portArr[3].img}`);
                document.getElementById("Stage1_AuthorPort4")!.title = portArr[4].fio;
                document.getElementById("Stage1_AuthorPort4")!.classList.add(`Stage1_Author${portArr[4].img}`);

                stage1_Cards.style.display = "block";
            };
            document.getElementById("Stage1_Map")?.appendChild(newMark);
        }
    }
}

const stage1_generateAuthorsCards = (rightAuthor: IMan): IMan[] => {
    let newSet: IMan[] = [];
    while (newSet.length < 5) {
        let ind: number = Math.floor(Math.random() * stage1Authors.length);
        if (newSet.indexOf(stage1Authors[ind]) === -1) {
            newSet.push(stage1Authors[ind]);
        }
    }
    if (newSet.indexOf(rightAuthor) === -1) {
        newSet[Math.floor(Math.random() * 5)] = rightAuthor;
    }
    return newSet;
}

const stage1_clearPortraitCardStyles = () => {
    for (let i = 0; i < 5; i++) {
        while (document.getElementById(`Stage1_AuthorPort${i}`)!.classList.length > 0) {
            document.getElementById(`Stage1_AuthorPort${i}`)!.classList.remove(document.getElementById(`Stage1_AuthorPort${i}`)!.classList[0]);
        }
        document.getElementById(`Stage1_AuthorPort${i}`)!.classList.add("Stage1_Author");
    }
}

const stage1_checkAnswer = (address: string, author: string): boolean => {
    let result: boolean = false;
    for (let i = 0; i < stage1Authors.length; i++) {
        if (stage1Authors[i].address === address && stage1Authors[i].fio === author) {
            result = true;
        }
    }
    return result;
}

for (let i = 0; i < 5; i++) {
    let el = document.getElementsByClassName("Stage1_Author");
    let el1 = el[i] as HTMLElement;
    el1.onclick = () => {
        if (stage1_checkAnswer(stage1_curClickedMark.title, el1.title)) {
            alert("Right!");
        };
        stage1_clearPortraitCardStyles();
        stage1_Cards.style.display = "none";

    }
}


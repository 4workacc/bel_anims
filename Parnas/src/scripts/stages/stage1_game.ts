import "../../styles/_stage1.scss";
import { IMan } from "../tasks/task1";
import { stage1Authors } from "../tasks/task1";

const stage1_countOfAuthors: number = 5;
let stage1_arrayOfAuthors: IMan[] = [];
let stage1_arrayOfMarks: HTMLElement[] = [];

export const stage1_StartGame = () => {
    stage1_generateArrayOfAuthors();
    console.log(1, stage1_arrayOfAuthors);
}

const stage1_generateArrayOfAuthors = () => {
    while (stage1_arrayOfAuthors.length < stage1_countOfAuthors ) {
        let randInd: number = Math.floor(Math.random()*stage1Authors.length);
        if ( stage1_arrayOfAuthors.indexOf(stage1Authors[randInd]) === -1) {
            stage1_arrayOfAuthors.push(stage1Authors[randInd]);
            let newMark: HTMLElement = document.createElement("div");
            newMark.classList.add("Stage1_Mark");
            newMark.style.left = `${stage1Authors[randInd].coordX}px`;
            newMark.style.top = `${stage1Authors[randInd].coordY}px`;
            newMark.title = `${stage1Authors[randInd].address}`;
            document.getElementById("Stage1_Map")?.appendChild(newMark);
        }
    }   
}
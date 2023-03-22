let stage1_score:number = 0;

const stage1_Start = () => {
    console.log(`Stage 1 starder with score ${stage1_score}`);
}

document.getElementById('q1')!.onclick = () => {
    stage1_Start();
}

export default stage1_Start;
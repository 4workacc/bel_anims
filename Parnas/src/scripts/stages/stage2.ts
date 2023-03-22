let stage2_score:number = 0;

const stage2_Start = () => {
    console.log(`Stage 2 starder with score ${stage2_score}`);
}

document.getElementById('q2')!.onclick = () => {
    stage2_Start();
}

export default stage2_Start;
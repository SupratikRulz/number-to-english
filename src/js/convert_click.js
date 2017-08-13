import { Chunk } from "./chunker.js";
let convert = () => {
    let text = document.getElementById("textBox").value;
    document.getElementById("resultBox").value = "";
    let chunkObj = new Chunk(text);
    chunkObj.startChunking();
};
document.getElementById("convert").addEventListener("click", convert);
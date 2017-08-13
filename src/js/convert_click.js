import { Chunk } from "./chunker.js";

/**
 * @function convert 
 * takes input from the textbox and displays result in resultbox when clicked on convert button!It is the starting point of the application
 * 
 */
let convert = () => {
    let text = document.getElementById("textBox").value;
    document.getElementById("resultBox").value = "";
    let chunkObj = new Chunk(text);
    chunkObj.startChunking();
};
document.getElementById("convert").addEventListener("click", convert);
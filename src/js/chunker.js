import { Identifier } from "./identifier.js";
/**
 * 
 * 
 * @export
 * @class Chunk
 */
export class Chunk {

    /**
     * Creates an instance of Chunk.
     * @param {string} text 
     * @memberof Chunk
     */
    constructor(text) {
        this.text = text;
    }

    /**
     * 
     * 
     * @memberof Chunk creates the chunk of 2000 characters and sends to identifier time to time
     */
    startChunking() {
        let i = 0;
        let tempString = " ";
        while (this.text.length > 2000) {
            i = this.text.indexOf(" ", 2000);
            tempString = this.text.substring(0, i);
            this.text = this.text.substring(i);
            let identifierObj = new Identifier(tempString, tempString.split(/\s/));
            identifierObj.identifyNumberAndStore();
        }
        let identifierObj = new Identifier(this.text, this.text.split(/\s/));
        identifierObj.identifyNumberAndStore();
    }
}
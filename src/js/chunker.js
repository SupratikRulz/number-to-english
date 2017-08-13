import { Identifier } from "./identifier.js";
export class Chunk {

    constructor(text) {
        this.text = text;
    }

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
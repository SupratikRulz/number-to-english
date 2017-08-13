import { NumberToEnglish } from "./digit_to_english.js";
export class Cardinal {
    constructor(word) {
        this.word = word;
    }
    isCardinal() {
        return /^[0-9]+$/.test(this.word) ?
            true : false;
    }
    doCardinalWord() {
        let w2n = new NumberToEnglish(this.word);
        let convertedWord = w2n.doNumberToEnglish(this.word);
        //console.log(convertedWord);
        // replace(convertedWord, this.index);
        return convertedWord;
    }
}
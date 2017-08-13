import { NumberToEnglish } from "./digit_to_english.js";
/**
 * 
 * 
 * @export
 * @class Cardinal
 */
export class Cardinal {

    /**
     * Creates an instance of Cardinal.
     * @param {string} word 
     * @memberof Cardinal
     */
    constructor(word) {
        this.word = word;
    }

    /**
     * 
     * 
     * @returns {true|false} checks if the input is in cardinal format or not
     * @memberof Cardinal
     */
    isCardinal() {
        return /^[0-9]+$/.test(this.word) ?
            true : false;
    }

    /**
     * 
     * 
     * @returns {string} which is the english word equivalent to the cardinal input
     * @memberof Cardinal
     */
    doCardinalWord() {
        let w2n = new NumberToEnglish(this.word);
        let convertedWord = w2n.doNumberToEnglish(this.word);
        return convertedWord;
    }
}
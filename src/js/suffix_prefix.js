import { NumberToEnglish } from "./digit_to_english.js";

/**
 * 
 * 
 * @export
 * @class SuffixPrefix
 */
export class SuffixPrefix {
    /**
     * Creates an instance of SuffixPrefix.
     * @param {any} word 
     * @memberof SuffixPrefix
     */
    constructor(word) {
        this.word = word;
        this.select = "none";
    }

    /**
     * 
     * 
     * @returns {true|false} true or false value according to match  
     * @memberof SuffixPrefix
     */
    isSuffixPrefix() {
        if (/^[+][0-9]{2}[-][0-9]{10}$/.test(this.word)) {
            this.select = "none";
        } else if (/^[@#`~$%^&*()_\-+={}\\|:;"'?.>,<]+\d+$/.test(this.word)) {
            this.select = "prefix";
        } else if (/\d+[r][d]|\d+[t][h]|\d+[n][d]|\d+[s][t]|\d+[s#`~$%^&*()_\-+={}\\|;"'?>,<]/.test(this.word)) {
            this.select = "suffix";
        }
        return this.select == "none" ? false : true;
    }

    /**
     * 
     * 
     * @returns {string} changes the digits in the category to english words 
     * @memberof SuffixPrefix
     */
    doSuffixPrefixWord() {
        let w2n = new NumberToEnglish(this.word);
        let convertedWord = "";
        let sentenceArray = this.word.split(/\d+/g);
        let digitArray = this.word.match(/\d+/g);
        switch (this.select) {
        case "suffix":
            if (digitArray != null) {
                var len1 = sentenceArray.length;
                var len2 = digitArray.length;
                var len = len1 > len2 ? len1 : len2;
                var x = 0;
                while (x < len) {
                    convertedWord = convertedWord + (sentenceArray[x] ? sentenceArray[x] : "");
                    digitArray[x] ? convertedWord = convertedWord + w2n.doNumberToEnglish(digitArray[x]) : convertedWord = convertedWord + "";
                    x++;
                }
            }
            convertedWord = convertedWord.replace("threerd", "third");
            convertedWord = convertedWord.replace("onest", "first");
            convertedWord = convertedWord.replace("twond", "second");
            convertedWord = convertedWord.replace("fiveth", "fifth");
            convertedWord = convertedWord.replace("eightth", "eighth");
            convertedWord = convertedWord.replace("nineth", "ninth");
            break;
        case "prefix":
            if (digitArray != null) {
                var leng1 = sentenceArray.length;
                var leng2 = digitArray.length;
                var leng = leng1 > leng2 ? leng1 : leng2;
                var xg = 0;
                while (xg < leng) {
                    convertedWord = convertedWord + (sentenceArray[xg] ? sentenceArray[xg] : "");
                    digitArray[xg] ? convertedWord = convertedWord + w2n.doNumberToEnglish(digitArray[xg]) : convertedWord = convertedWord + "";
                    xg++;
                }
            }
            break;
        }
        return convertedWord;
    }
}
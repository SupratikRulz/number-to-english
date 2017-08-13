import { NumberToEnglish } from "./digit_to_english.js";

export class SpecialMiddle {

    constructor(word) {
        this.word = word;
        this.select = "none";
    }

    isSpecialMiddle() {
        if (/^\d+[.]\d+[a-zA-Z]*$/.test(this.word)) {
            this.select = "decimal";
        } else if (/^\d+[/]\d+$/.test(this.word)) {
            this.select = "fraction";
        } else if (/^\d{1,2}[:\-./]\d{1,2}$|^\d{1,2}[:\-./]\d{1,2}[:\-./]\d{1,2}$/.test(this.word)) {
            this.select = "time";
        } else if (/^[+][0-9]{2}[-][0-9]{10}$/.test(this.word)) {
            this.select = "phno";
        } else if (/^\d{1,2}[:\-./]\d{1,2}[:\-./]\d{2,4}$/.test(this.word)) {
            this.select = "date";
        } else if (/\d/.test(this.word) && !/[a-zA-Z]+\d+/.test(this.word)) {
            this.select = "other";
        }

        return this.select == "none" ? false : true;
    }

    doSpecialMiddleWord() {
        let w2n = new NumberToEnglish(this.word);
        let convertedWord = "";
        switch (this.select) {
        case "decimal":
        {
            let pointIndex = this.word.indexOf(".");
            let firstPartNumber = this.word.substring(0, pointIndex);
            let firstPartWord = w2n.doNumberToEnglish(firstPartNumber);
            convertedWord = firstPartWord + " point ";
            let secondPartNumber = this.word.substring(pointIndex + 1);
            let secondPartWord = "";
            for (let i = 0; i < secondPartNumber.toString().length; i++) {
                secondPartWord = secondPartWord + " " + w2n.doNumberToEnglish(secondPartNumber.toString().charAt(i));
            }
            if (/[a-zA-z]/.test(this.word)) {
                let alphabet = /[a-zA-Z]+/.exec(this.word);
                convertedWord = convertedWord + secondPartWord.trim() + " " + alphabet;
            } else {
                convertedWord = convertedWord + secondPartWord.trim() + " ";
            }
            //console.log(convertedWord);
            //replace(convertedWord, this.index);
            break;
        }
        case "fraction":
        {
            let byIndex = this.word.indexOf("/");
            let firstPartNumber2 = this.word.substring(0, byIndex);
            let firstPartWord2 = w2n.doNumberToEnglish(firstPartNumber2);
            let secondPartNumber2 = this.word.substring(byIndex + 1);
            let secondPartWord2 = w2n.doNumberToEnglish(secondPartNumber2);
            convertedWord = firstPartWord2 + " by " + secondPartWord2;
            //console.log(convertedWord);
            //replace(convertedWord, this.index);
            break;
        }
        case "time":
        case "date":
        case "other":
        {
            let sentenceArray = this.word.split(/\d+/g);
            let digitArray = this.word.match(/\d+/g);
            if (digitArray != null) {
                var len1 = sentenceArray.length;
                var len2 = digitArray.length;
                var len = len1 > len2 ? len1 : len2;
                var x = 0;
                //console.log(sentenceArray[x]);
                while (x < len) {
                    convertedWord = convertedWord + (sentenceArray[x] ? sentenceArray[x] : "");
                    digitArray[x] ? convertedWord = convertedWord + w2n.doNumberToEnglish(digitArray[x]) : convertedWord = convertedWord + "";
                    x++;
                }
            }
            //console.log(convertedWord);
            //replace(convertedWord, this.index);
            break;
        }
        case "phno":
        {
            let digitArray2 = this.word.match(/\d+/g);
            convertedWord = "plus ";
            let temp = "";
            for (let i = 0; i < digitArray2[0].toString().length; i++) {
                temp = temp + " " + w2n.doNumberToEnglish(digitArray2[0].toString().charAt(i));
            }
            convertedWord = convertedWord + temp + " ";
            temp = "";
            for (let i = 0; i < digitArray2[1].toString().length; i++) {
                temp = temp + " " + w2n.doNumberToEnglish(digitArray2[1].toString().charAt(i));
            }

            convertedWord = convertedWord + "dash " + temp;
            //console.log(convertedWord);
            //replace(convertedWord, this.index);
            break;
        }
        }
        return convertedWord;

    }
}
import { Decider } from "./decider.js";

/**
 * 
 * 
 * @export
 * @class Identifier
 */
export class Identifier {
    /**
     * Creates an instance of Identifier.
     * @param {string} text 
     * @param {string} textArray 
     * @memberof Identifier
     */

    constructor(text, textArray) {
        this.text = text;
        this.textArray = textArray;
        this.counter = 0;
        this.timeoutCounter = 0;
    }

    /**
     * 
     * 
     * @memberof Identifier which sends the splitted texts to decider asynchronously and 
     * merges the changed texts into the array when all setTimeouts are done executing and 
     * displays the result 
     */

    identifyNumberAndStore() {
        let flag = false;
        for (let i = 0; i < this.textArray.length; i++) {
            if (/\d/.test(this.textArray[i])) {
                flag = true;
                let that = this;
                this.counter++;
                setTimeout(function() {
                    let deciderObj = new Decider(that.textArray[i]);
                    that.textArray[i] = deciderObj.decide();
                    that.timeoutCounter++;
                    that.timeoutCounter === that.counter ? that.displayArray(that) : null;
                }, 0);
            } else {
                continue;
            }
        }
        let that = this;
        flag == false ? this.displayArray(that) : null;
    }

    /**
     * 
     * 
     * @param {this} that 
     * @memberof Identifier
     */
    displayArray(that) {
        let temp = document.getElementById("resultBox").value;
        document.getElementById("resultBox").value = temp + " " + that.textArray.join(" ");
    }
}
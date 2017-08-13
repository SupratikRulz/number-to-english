import { Decider } from "./decider.js";
export class Identifier {
    constructor(text, textArray) {
        //console.log(text);
        this.text = text;
        this.textArray = textArray;
        this.counter = 0;
        this.timeoutCounter = 0;
    }
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
    displayArray(that) {
        let temp = document.getElementById("resultBox").value;
        document.getElementById("resultBox").value = temp + " " + that.textArray.join(" ");
        //console.log("Joined: " + temp2);
    }
}
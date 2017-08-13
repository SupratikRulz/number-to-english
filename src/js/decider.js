import { Cardinal } from "./cardinal.js";
import { SpecialMiddle } from "./special_middle.js";
import { SuffixPrefix } from "./suffix_prefix.js";

export class Decider {
    constructor(word) {
        this.word = word;
    }
    decide() {
        //console.log(this.word);
        let cardinalObj = new Cardinal(this.word);
        let specialMiddleObj = new SpecialMiddle(this.word);
        let suffixPrefixObj = new SuffixPrefix(this.word);
        if (cardinalObj.isCardinal()) {
            return cardinalObj.doCardinalWord();
        } else if (suffixPrefixObj.isSuffixPrefix()) {
            return suffixPrefixObj.doSuffixPrefixWord();
        } else if (specialMiddleObj.isSpecialMiddle()) {
            return specialMiddleObj.doSpecialMiddleWord();
        }
        return this.word;
    }
}
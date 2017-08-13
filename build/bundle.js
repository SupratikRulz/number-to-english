/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NumberToEnglish = exports.NumberToEnglish = function () {
    function NumberToEnglish(digit) {
        _classCallCheck(this, NumberToEnglish);

        this.words = digit;
    }

    _createClass(NumberToEnglish, [{
        key: "doNumberToEnglish",
        value: function doNumberToEnglish(n) {
            var string = n.toString(),
                units,
                tens,
                scales,
                start,
                end,
                chunks,
                chunksLen,
                chunk,
                ints,
                i,
                word,
                words;
            //  var and = custom_join_character || "and";
            var sign = string.charAt(0) == "-" ? "-" : "";
            /* Is number zero? */
            if (parseInt(string) === 0) {
                return sign + "zero";
            }
            /* Array of units as words */
            units = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
            /* Array of tens as words */
            tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
            /* Array of scales as words */
            scales = ["", "thousand", "million", "billion", "trillion", "quadrillion", "quintillion", "sextillion", "septillion", "octillion", "nonillion", "decillion", "undecillion", "duodecillion", "tredecillion", "quatttuor-decillion", "quindecillion", "sexdecillion", "septen-decillion", "octodecillion", "novemdecillion", "vigintillion", "centillion"];
            /* Split user arguemnt into 3 digit chunks from right to left */
            start = string.length;
            chunks = [];
            while (start > 0) {
                end = start;
                chunks.push(string.slice(start = Math.max(0, start - 3), end));
            }
            /* Check if function has enough scale words to be able to stringify the user argument */
            chunksLen = chunks.length;
            if (chunksLen > scales.length) {
                return "";
            }
            /* Stringify each integer in each chunk */
            words = [];
            for (i = 0; i < chunksLen; i++) {
                chunk = parseInt(chunks[i]);
                if (chunk) {
                    /* Split chunk into array of individual integers */
                    ints = chunks[i].split("").reverse().map(parseFloat);
                    /* If tens integer is 1, i.e. 10, then add 10 to units integer */
                    if (ints[1] === 1) {
                        ints[0] += 10;
                    }
                    /* Add scale word if chunk is not zero and array item exists */
                    if (word = scales[i]) {
                        words.push(word);
                    }
                    /* Add unit word if array item exists */
                    if (word = units[ints[0]]) {
                        words.push(word);
                    }
                    /* Add tens word if array item exists */
                    if (word = tens[ints[1]]) {
                        words.push(word);
                    }
                    /* Add "and" string after units or tens integer if: */
                    // if (ints[0] || ints[1]) {
                    //     /* Chunk has a hundreds integer or chunk is the first of multiple chunks */
                    //     if (ints[2] || !i && chunksLen) {
                    //         words.push(and);
                    //     }
                    // }
                    /* Add hundreds word if array item exists */
                    if (word = units[ints[2]]) {
                        words.push(word + " hundred");
                    }
                }
            }
            return sign + words.reverse().join(" ");
        }
    }]);

    return NumberToEnglish;
}();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _chunker = __webpack_require__(2);

var convert = function convert() {
    var text = document.getElementById("textBox").value;
    document.getElementById("resultBox").value = "";
    var chunkObj = new _chunker.Chunk(text);
    chunkObj.startChunking();
};
document.getElementById("convert").addEventListener("click", convert);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Chunk = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _identifier = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Chunk = exports.Chunk = function () {
    function Chunk(text) {
        _classCallCheck(this, Chunk);

        this.text = text;
    }

    _createClass(Chunk, [{
        key: "startChunking",
        value: function startChunking() {
            var i = 0;
            var tempString = " ";
            while (this.text.length > 2000) {
                i = this.text.indexOf(" ", 2000);
                tempString = this.text.substring(0, i);
                this.text = this.text.substring(i);
                var _identifierObj = new _identifier.Identifier(tempString, tempString.split(/\s/));
                _identifierObj.identifyNumberAndStore();
            }
            var identifierObj = new _identifier.Identifier(this.text, this.text.split(/\s/));
            identifierObj.identifyNumberAndStore();
        }
    }]);

    return Chunk;
}();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Identifier = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _decider = __webpack_require__(4);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Identifier = exports.Identifier = function () {
    function Identifier(text, textArray) {
        _classCallCheck(this, Identifier);

        //console.log(text);
        this.text = text;
        this.textArray = textArray;
        this.counter = 0;
        this.timeoutCounter = 0;
    }

    _createClass(Identifier, [{
        key: "identifyNumberAndStore",
        value: function identifyNumberAndStore() {
            var _this = this;

            var flag = false;

            var _loop = function _loop(i) {
                if (/\d/.test(_this.textArray[i])) {
                    flag = true;
                    var _that = _this;
                    _this.counter++;
                    setTimeout(function () {
                        var deciderObj = new _decider.Decider(_that.textArray[i]);
                        _that.textArray[i] = deciderObj.decide();
                        _that.timeoutCounter++;
                        _that.timeoutCounter === _that.counter ? _that.displayArray(_that) : null;
                    }, 0);
                } else {
                    return "continue";
                }
            };

            for (var i = 0; i < this.textArray.length; i++) {
                var _ret = _loop(i);

                if (_ret === "continue") continue;
            }
            var that = this;
            flag == false ? this.displayArray(that) : null;
        }
    }, {
        key: "displayArray",
        value: function displayArray(that) {
            var temp = document.getElementById("resultBox").value;
            document.getElementById("resultBox").value = temp + " " + that.textArray.join(" ");
            //console.log("Joined: " + temp2);
        }
    }]);

    return Identifier;
}();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Decider = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cardinal = __webpack_require__(5);

var _special_middle = __webpack_require__(6);

var _suffix_prefix = __webpack_require__(7);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Decider = exports.Decider = function () {
    function Decider(word) {
        _classCallCheck(this, Decider);

        this.word = word;
    }

    _createClass(Decider, [{
        key: "decide",
        value: function decide() {
            //console.log(this.word);
            var cardinalObj = new _cardinal.Cardinal(this.word);
            var specialMiddleObj = new _special_middle.SpecialMiddle(this.word);
            var suffixPrefixObj = new _suffix_prefix.SuffixPrefix(this.word);
            if (cardinalObj.isCardinal()) {
                return cardinalObj.doCardinalWord();
            } else if (suffixPrefixObj.isSuffixPrefix()) {
                return suffixPrefixObj.doSuffixPrefixWord();
            } else if (specialMiddleObj.isSpecialMiddle()) {
                return specialMiddleObj.doSpecialMiddleWord();
            }
            return this.word;
        }
    }]);

    return Decider;
}();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Cardinal = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _digit_to_english = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cardinal = exports.Cardinal = function () {
    function Cardinal(word) {
        _classCallCheck(this, Cardinal);

        this.word = word;
    }

    _createClass(Cardinal, [{
        key: "isCardinal",
        value: function isCardinal() {
            return (/^[0-9]+$/.test(this.word) ? true : false
            );
        }
    }, {
        key: "doCardinalWord",
        value: function doCardinalWord() {
            var w2n = new _digit_to_english.NumberToEnglish(this.word);
            var convertedWord = w2n.doNumberToEnglish(this.word);
            //console.log(convertedWord);
            // replace(convertedWord, this.index);
            return convertedWord;
        }
    }]);

    return Cardinal;
}();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SpecialMiddle = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _digit_to_english = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SpecialMiddle = exports.SpecialMiddle = function () {
    function SpecialMiddle(word) {
        _classCallCheck(this, SpecialMiddle);

        this.word = word;
        this.select = "none";
    }

    _createClass(SpecialMiddle, [{
        key: "isSpecialMiddle",
        value: function isSpecialMiddle() {
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
    }, {
        key: "doSpecialMiddleWord",
        value: function doSpecialMiddleWord() {
            var w2n = new _digit_to_english.NumberToEnglish(this.word);
            var convertedWord = "";
            switch (this.select) {
                case "decimal":
                    var pointIndex = this.word.indexOf(".");
                    var firstPartNumber = this.word.substring(0, pointIndex);
                    var firstPartWord = w2n.doNumberToEnglish(firstPartNumber);
                    convertedWord = firstPartWord + " point ";
                    var secondPartNumber = this.word.substring(pointIndex + 1);
                    var secondPartWord = "";
                    for (var i = 0; i < secondPartNumber.toString().length; i++) {
                        secondPartWord = secondPartWord + " " + w2n.doNumberToEnglish(secondPartNumber.toString().charAt(i));
                    }
                    if (/[a-zA-z]/.test(this.word)) {
                        var alphabet = /[a-zA-Z]+/.exec(this.word);
                        convertedWord = convertedWord + secondPartWord.trim() + " " + alphabet;
                    } else {
                        convertedWord = convertedWord + secondPartWord.trim() + " ";
                    }
                    //console.log(convertedWord);
                    //replace(convertedWord, this.index);
                    break;
                case "fraction":
                    var byIndex = this.word.indexOf("/");
                    var firstPartNumber2 = this.word.substring(0, byIndex);
                    var firstPartWord2 = w2n.doNumberToEnglish(firstPartNumber2);
                    var secondPartNumber2 = this.word.substring(byIndex + 1);
                    var secondPartWord2 = w2n.doNumberToEnglish(secondPartNumber2);
                    convertedWord = firstPartWord2 + " by " + secondPartWord2;
                    //console.log(convertedWord);
                    //replace(convertedWord, this.index);
                    break;
                case "time":
                case "date":
                case "other":
                    var sentenceArray = this.word.split(/\d+/g);
                    var digitArray = this.word.match(/\d+/g);
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
                case "phno":
                    var digitArray2 = this.word.match(/\d+/g);
                    convertedWord = "plus ";
                    var temp = "";
                    for (var _i = 0; _i < digitArray2[0].toString().length; _i++) {
                        temp = temp + " " + w2n.doNumberToEnglish(digitArray2[0].toString().charAt(_i));
                    }
                    convertedWord = convertedWord + temp + " ";
                    temp = "";
                    for (var _i2 = 0; _i2 < digitArray2[1].toString().length; _i2++) {
                        temp = temp + " " + w2n.doNumberToEnglish(digitArray2[1].toString().charAt(_i2));
                    }

                    convertedWord = convertedWord + "dash " + temp;
                    //console.log(convertedWord);
                    //replace(convertedWord, this.index);
                    break;

            }
            return convertedWord;
        }
    }]);

    return SpecialMiddle;
}();

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SuffixPrefix = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _digit_to_english = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SuffixPrefix = exports.SuffixPrefix = function () {
    function SuffixPrefix(word) {
        _classCallCheck(this, SuffixPrefix);

        this.word = word;
        this.select = "none";
    }

    _createClass(SuffixPrefix, [{
        key: "isSuffixPrefix",
        value: function isSuffixPrefix() {
            if (/^[+][0-9]{2}[-][0-9]{10}$/.test(this.word)) {
                this.select = "none";
            } else if (/^[@#`~$%^&*()_\-+={}\\|:;"'?.>,<]+\d+$/.test(this.word)) {
                this.select = "prefix";
            } else if (/\d+[r][d]|\d+[t][h]|\d+[n][d]|\d+[s][t]|\d+[s#`~$%^&*()_\-+={}\\|;"'?>,<]/.test(this.word)) {
                this.select = "suffix";
            }
            return this.select == "none" ? false : true;
        }
    }, {
        key: "doSuffixPrefixWord",
        value: function doSuffixPrefixWord() {
            var w2n = new _digit_to_english.NumberToEnglish(this.word);
            var convertedWord = "";
            var sentenceArray = this.word.split(/\d+/g);
            var digitArray = this.word.match(/\d+/g);
            switch (this.select) {
                case "suffix":
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
                    convertedWord = convertedWord.replace("threerd", "third");
                    convertedWord = convertedWord.replace("onest", "first");
                    convertedWord = convertedWord.replace("twond", "second");
                    convertedWord = convertedWord.replace("fiveth", "fifth");
                    convertedWord = convertedWord.replace("eightth", "eighth");
                    convertedWord = convertedWord.replace("nineth", "ninth");
                    //console.log(convertedWord);
                    //replace(convertedWord, this.index);
                    break;
                case "prefix":
                    if (digitArray != null) {
                        var leng1 = sentenceArray.length;
                        var leng2 = digitArray.length;
                        var leng = leng1 > leng2 ? leng1 : leng2;
                        var xg = 0;
                        //console.log(sentenceArray[x]);
                        while (xg < leng) {
                            convertedWord = convertedWord + (sentenceArray[xg] ? sentenceArray[xg] : "");
                            digitArray[xg] ? convertedWord = convertedWord + w2n.doNumberToEnglish(digitArray[xg]) : convertedWord = convertedWord + "";
                            xg++;
                        }
                    }
                    //console.log(convertedWord);
                    //replace(convertedWord, this.index);
                    break;
            }
            return convertedWord;
        }
    }]);

    return SuffixPrefix;
}();

/***/ })
/******/ ]);
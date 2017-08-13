import { Identifier } from "../src/js/identifier.js";

beforeAll(function() {
    var temp = '<body> <div id="container"> <div><textarea id="textBox" rows="30" cols="200"></textarea></div><div><button id="convert">Convert</button></div><div><textarea id="resultBox" rows="30" cols="200"></textarea></div></div><script type="text/javascript" src="bundle.js"></script></body>';
    document.body.insertAdjacentHTML('afterbegin', temp);
});

jest.useFakeTimers();
test("identifyNumberAndStore()", () => {
    const identifierObj = new Identifier("two 2 12th", "two 2 12th".split(/\s/));
    identifierObj.identifyNumberAndStore();
    expect(setTimeout.mock.calls.length).toBe(2);
    expect(setTimeout.mock.calls[0][1]).toBe(0);
});

test("identifyNumberAndStore()", () => {
    const identifierObj = new Identifier("two 2 12th", "two 2 12th".split(/\s/));
    identifierObj.identifyNumberAndStore();
    identifierObj.displayArray = jest.fn();
    expect(identifierObj.displayArray).not.toBeCalled();
    jest.runAllTimers();
    expect(identifierObj.displayArray).toBeCalled();
});

test("identifyNumberAndStore()", () => {
    const identifierObj = new Identifier("two", "two".split(/\s/));
    identifierObj.displayArray = jest.fn();
    identifierObj.identifyNumberAndStore();
    expect(identifierObj.displayArray).toBeCalled();
});
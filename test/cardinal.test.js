import { Cardinal } from "../src/js/cardinal.js";

test("isCrdinal()", () => {
    const cardinalObj = new Cardinal("2");
    expect(cardinalObj.isCardinal()).toBe(true);
});

test("isCrdinal()", () => {
    const cardinalObj = new Cardinal("two");
    expect(cardinalObj.isCardinal()).toBe(false);
});


test("doCrdinalWord()", () => {
    const cardinalObj = new Cardinal("2");
    expect(cardinalObj.doCardinalWord()).toBe("two");
});


test("doCrdinalWord()", () => {
    const cardinalObj = new Cardinal("2222");
    expect(cardinalObj.doCardinalWord()).toBe("two thousand two hundred twenty two");
});
import { SpecialMiddle } from "../src/js/special_middle.js";

test("isSpecialMiddle()", () => {
    const specialMiddleObj = new SpecialMiddle("+91-9046688464");
    expect(specialMiddleObj.isSpecialMiddle()).toBe(true);
    expect(specialMiddleObj.select).toBe("phno");
});

test("isSpecialMiddle()", () => {
    const specialMiddleObj = new SpecialMiddle("1.1");
    expect(specialMiddleObj.isSpecialMiddle()).toBe(true);
    expect(specialMiddleObj.select).toBe("decimal");
});

test("isSpecialMiddle()", () => {
    const specialMiddleObj = new SpecialMiddle("1/3");
    expect(specialMiddleObj.isSpecialMiddle()).toBe(true);
    expect(specialMiddleObj.select).toBe("fraction");
});

test("isSpecialMiddle()", () => {
    const specialMiddleObj = new SpecialMiddle("10:10");
    expect(specialMiddleObj.isSpecialMiddle()).toBe(true);
    expect(specialMiddleObj.select).toBe("time");
});


test("isSpecialMiddle()", () => {
    const specialMiddleObj = new SpecialMiddle("12.12.2014");
    expect(specialMiddleObj.isSpecialMiddle()).toBe(true);
    expect(specialMiddleObj.select).toBe("date");
});


test("isSpecialMiddle()", () => {
    const specialMiddleObj = new SpecialMiddle("1--1");
    expect(specialMiddleObj.isSpecialMiddle()).toBe(true);
    expect(specialMiddleObj.select).toBe("other");
});


test("isSpecialMiddle()", () => {
    const specialMiddleObj = new SpecialMiddle("A1");
    expect(specialMiddleObj.isSpecialMiddle()).toBe(false);
    expect(specialMiddleObj.select).toBe("none");
});

test("isSpecialMiddle()", () => {
    const specialMiddleObj = new SpecialMiddle("1.1");
    specialMiddleObj.isSpecialMiddle();
    expect(specialMiddleObj.doSpecialMiddleWord()).toBe("one point one ");
});

test("isSpecialMiddle()", () => {
    const specialMiddleObj = new SpecialMiddle("1.11kg");
    specialMiddleObj.isSpecialMiddle();
    expect(specialMiddleObj.doSpecialMiddleWord()).toBe("one point one one kg");
});

test("isSpecialMiddle()", () => {
    const specialMiddleObj = new SpecialMiddle("1/2");
    specialMiddleObj.isSpecialMiddle();
    expect(specialMiddleObj.doSpecialMiddleWord()).toBe("one by two");
});


test("isSpecialMiddle()", () => {
    const specialMiddleObj = new SpecialMiddle("1:2");
    specialMiddleObj.isSpecialMiddle();
    expect(specialMiddleObj.doSpecialMiddleWord()).toBe("one:two");
});

test("isSpecialMiddle()", () => {
    const specialMiddleObj = new SpecialMiddle("+91-1111111111");
    specialMiddleObj.isSpecialMiddle();
    expect(specialMiddleObj.doSpecialMiddleWord()).toBe("plus  nine one dash  one one one one one one one one one one");
});
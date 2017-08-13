import { Decider } from "../src/js/decider.js";

test("decide()", () => {
    const deciderObj = new Decider("2");
    expect(deciderObj.decide()).toBe("two");
});

test("decide()", () => {
    const deciderObj = new Decider("2.2");
    expect(deciderObj.decide()).toBe("two point two ");
});

test("decide()", () => {
    const deciderObj = new Decider("2nd");
    expect(deciderObj.decide()).toBe("second");
});


test("decide()", () => {
    const deciderObj = new Decider("aa2aa");
    expect(deciderObj.decide()).toBe("aa2aa");
});
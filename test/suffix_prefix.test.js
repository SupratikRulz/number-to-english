import { SuffixPrefix } from "../src/js/suffix_prefix.js";
test("isSuffixPrefix()", () => {
    const suffixPrefixObj = new SuffixPrefix("+91-9046688464");
    expect(suffixPrefixObj.isSuffixPrefix()).toBe(false);
});

test("isSuffixPrefix()", () => {
    const suffixPrefixObj = new SuffixPrefix("@12");
    expect(suffixPrefixObj.isSuffixPrefix()).toBe(true);
});

test("isSuffixPrefix()", () => {
    const suffixPrefixObj = new SuffixPrefix("1st");
    expect(suffixPrefixObj.isSuffixPrefix()).toBe(true);
});

test("doSuffixPrefixWord()", () => {
    const suffixPrefixObj = new SuffixPrefix("11th");
    suffixPrefixObj.isSuffixPrefix();
    expect(suffixPrefixObj.doSuffixPrefixWord()).toBe("eleventh");
});

test("doSuffixPrefixWord()", () => {
    const suffixPrefixObj = new SuffixPrefix("@11");
    suffixPrefixObj.isSuffixPrefix();
    expect(suffixPrefixObj.doSuffixPrefixWord()).toBe("@eleven");
});
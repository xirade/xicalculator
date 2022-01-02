import numeral from "numeral";
export default function fixedNumber(num) {
    const toNumber = Number(num);
    if (toNumber >= 10000000000) {
        return numeral(toNumber).format("0,0e+0");
    }
    return num;
}

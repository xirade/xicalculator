export default function getRoundNumber(operator, num1, num2) {
    const calculateResult = {
        "+": () =>
            `${
                Math.round(`${(parseFloat(num1) + parseFloat(num2)) * 1000}`) /
                1000
            }`,
        "-": () =>
            `${
                Math.round(`${(parseFloat(num1) - parseFloat(num2)) * 1000}`) /
                1000
            }`,
        "/": () =>
            `${
                Math.round(`${(parseFloat(num1) / parseFloat(num2)) * 1000}`) /
                1000
            }`,
        "*": () =>
            `${
                Math.round(`${parseFloat(num1) * parseFloat(num2) * 1000}`) /
                1000
            }`,
        "": () => num2
    };

    return calculateResult[operator]();
}

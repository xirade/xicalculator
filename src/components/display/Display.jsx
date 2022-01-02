import React, { useContext } from "react";
import { AppContext } from "src/context/AppProvider";
import fixedNumber from "src/utils/getFixedNumber";

// styles
import "./Display.css";

export default function Display() {
    const { number, storedNumber, error, operator } = useContext(AppContext);

    return (
        <>
            <div className="input">
                <span className="calculate-value">
                    {!error
                        ? !storedNumber
                            ? "Enter number"
                            : `${fixedNumber(storedNumber)} ${operator} ${
                                number ? fixedNumber(number) : ""
                            }`
                        : error}
                </span>
                <span>
                    {!number.length && !storedNumber
                        ? "0"
                        : fixedNumber(number) || fixedNumber(storedNumber)}
                </span>
            </div>
        </>
    );
}

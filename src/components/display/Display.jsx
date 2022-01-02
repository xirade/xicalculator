import React, { useContext } from "react";
import { AppContext } from "../../context/AppProvider";
import getFixedNumber from "../../utils/getFixedNumber";

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
                            : `${getFixedNumber(storedNumber)} ${operator} ${
                                number ? getFixedNumber(number) : ""
                            }`
                        : error}
                </span>
                <span>
                    {!number.length && !storedNumber
                        ? "0"
                        : getFixedNumber(number) || getFixedNumber(storedNumber)}
                </span>
            </div>
        </>
    );
}

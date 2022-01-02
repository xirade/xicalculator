import React from "react";
import PropTypes from "prop-types";

// utils
import fixedNumber from "src/utils/getFixedNumber";

// styles
import "./HistoryList.css";

export default function HistoryList({
    expressions,
    onSetValue,
    onExpressionFromHistory
}) {
    return (
        <ul className="history-list">
            {expressions.map((exp) => (
                <li key={exp.id}>
                    <p>
                        <span
                            onClick={() =>
                                onExpressionFromHistory(
                                    exp.operator,
                                    exp.number,
                                    exp.storedNumber
                                )
                            }
                            className="expression"
                        >{`${fixedNumber(exp.storedNumber)} ${
                                exp.operator
                            } ${fixedNumber(exp.number)}`}</span>
                        <span
                            onClick={() => onSetValue(exp.result)}
                            className="result"
                        >{`= ${fixedNumber(exp.result)}`}</span>
                    </p>
                </li>
            ))}
        </ul>
    );
}

HistoryList.propTypes = {
    expressions: PropTypes.array.isRequired,
    onSetValue: PropTypes.func.isRequired,
    onExpressionFromHistory: PropTypes.func.isRequired
};

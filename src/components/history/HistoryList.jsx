import React from "react";
import PropTypes from "prop-types";

// utils
import getFixedNumber from "../../utils/getFixedNumber";

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
                        >{`${getFixedNumber(exp.storedNumber)} ${
                                exp.operator
                            } ${getFixedNumber(exp.number)}`}</span>
                        <span
                            onClick={() => onSetValue(exp.result)}
                            className="result"
                        >{`= ${getFixedNumber(exp.result)}`}</span>
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

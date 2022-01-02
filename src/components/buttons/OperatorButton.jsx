import React from "react";
import PropTypes from "prop-types";

// styles
import "./OperatorButton.css";

export default function OperatorButton({ reducer }) {
    const operators = ["+", "-", "*", "/"].reduce(reducer, [[]])[0];

    return (
        <div className="operators">
            {operators.map((operator) => operator.component(operator.name))}
        </div>
    );
}

OperatorButton.propTypes = {
    reducer: PropTypes.func.isRequired
};

import React from "react";
import PropTypes from "prop-types";

// styles
import "./EqualButton.css";

export default function EqualButton({ onCalculate }) {
    return (
        <div onClick={() => onCalculate()} className="equal">
            <div>=</div>
        </div>
    );
}

EqualButton.propTypes = {
    onCalculate: PropTypes.func.isRequired
};

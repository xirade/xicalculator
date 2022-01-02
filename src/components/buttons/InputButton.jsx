import React from "react";
import PropTypes from "prop-types";

// styles
import "./InputButton.css";

export default function NumberButton({ reducer }) {
    const buttons = [
        "7",
        "4",
        "1",
        "0",
        "8",
        "5",
        "2",
        ".",
        "9",
        "6",
        "3",
        "AC"
    ].reduce(reducer, [[]]);

    return (
        <>
            {buttons.map((btn, index) => (
                <div key={`btn-${index}`} className="numbers">
                    {btn.map((item) => item.component(item.name))}
                </div>
            ))}
        </>
    );
}

NumberButton.propTypes = {
    reducer: PropTypes.func.isRequired
};

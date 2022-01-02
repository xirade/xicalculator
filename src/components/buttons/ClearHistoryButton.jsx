import React from "react";
import PropTypes from "prop-types";

// styles
import "./ClearHistoryButton.css";

export default function ClearHistoryButton({ onClearExpressions }) {
    return (
        <button
            onClick={() => onClearExpressions()}
            className="history__clear-button"
        >
            Clear history
        </button>
    );
}

ClearHistoryButton.propTypes = {
    onClearExpressions: PropTypes.func.isRequired
};

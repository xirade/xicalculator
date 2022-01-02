import React from "react";
import PropTypes from "prop-types";

// styles
import "./BackButton.css";
import backSpace from "../../assets/backspace.svg";

export default function BackButton({ onBackButton }) {
    return (
        <div className="back-button" onClick={() => onBackButton()}>
            <img src={backSpace} alt="backspace" />
        </div>
    );
}

BackButton.propTypes = {
    onBackButton: PropTypes.func.isRequired
};

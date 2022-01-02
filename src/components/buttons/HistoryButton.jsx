import React, { useContext } from "react";
import { AppContext } from "../../context/AppProvider";

// styles
import "./HistoryButton.css";

export default function HistoryButton() {
    const { expressions, handleOpenHistory, isOpen } = useContext(AppContext);
    return (
        <div className="history-tab">
            <button
                disabled={!expressions.length}
                style={{
                    cursor: !expressions.length ? "not-allowed" : "pointer"
                }}
                onClick={() => handleOpenHistory()}
                className={!isOpen ? "history-button" : "number-button"}
            >
                {!isOpen ? "History" : "Numbers"}
            </button>
        </div>
    );
}

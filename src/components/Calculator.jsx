import React, { useContext } from "react";
import { AppContext } from "src/context/AppProvider";
import MainPanel from "./panels/MainPanel";
import Display from "./display/Display";

// styles
import "./Calculator.css";
import BackButton from "./buttons/BackButton";

export default function Calculator() {
    const { handleBackButton } = useContext(AppContext);
    return (
        <div className="calculator">
            <div className="display-wrapper">
                <Display />
                <BackButton onBackButton={handleBackButton} />
            </div>
            <MainPanel />
        </div>
    );
}

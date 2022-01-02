import React, { useContext, useRef } from "react";
import { AppContext } from "../../context/AppProvider";

// components
import EqualButton from "../buttons/EqualButton";
import OperatorButton from "../buttons/OperatorButton";
import InputButton from "../buttons/InputButton";

// styles
import "./MainPanel.css";
import HistoryList from "../history/HistoryList";
import ClearHistoryButton from "../buttons/ClearHistoryButton";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default function MainPanel() {
    const {
        handleSetValue,
        reducer,
        handleClearExpressions,
        handleCalculatedResult,
        handleExpressionFromHistory,
        expressions,
        isOpen
    } = useContext(AppContext);

    const nodeRef = useRef(null);

    return (
        <div className="buttons">
            <OperatorButton reducer={reducer} />
            <TransitionGroup component="div" className="panel">
                {isOpen
                    ? (
                        <CSSTransition
                            nodeRef={nodeRef}
                            timeout={200}
                            classNames="item-panel"
                        >
                            <div ref={nodeRef} className="history-wrapper">
                                <HistoryList
                                    expressions={expressions}
                                    onSetValue={handleSetValue}
                                    onExpressionFromHistory={
                                        handleExpressionFromHistory
                                    }
                                />
                                <ClearHistoryButton
                                    onClearExpressions={handleClearExpressions}
                                />
                            </div>
                        </CSSTransition>
                    )
                    : (
                        <InputButton reducer={reducer} />
                    )}
                <EqualButton onCalculate={handleCalculatedResult} />
            </TransitionGroup>
        </div>
    );
}

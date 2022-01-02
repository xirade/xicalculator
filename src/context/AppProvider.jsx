import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import getRandomNumber from "../utils/getRandomNumber";
import getRoundNumber from "../utils/getRoundNumber";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const INIT_VALUE = "0";
    const [number, setNumber] = useState(INIT_VALUE);
    const [dotFlag, setDotFlag] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const [storedNumber, setStoredNumber] = useState("");
    const [operator, setOperator] = useState("");
    const [error, setError] = useState("");

    const [expressions, setExpressions] = useState([]);

    useEffect(() => {
        const checkExpressionData = () => {
            const initExpressions = JSON.parse(
                localStorage.getItem("expressions")
            );
            if (initExpressions) setExpressions(initExpressions);
        };
        checkExpressionData();
        window.addEventListener("storage", checkExpressionData);

        return () => {
            window.removeEventListener("storage", checkExpressionData);
        };
    }, []);

    const addToExpressions = (item) => {
        // looking for the index of the current object
        const objIndex = expressions.findIndex((obj) => obj.id === item.id);
        // check if it exist
        if (objIndex >= 0) return;
        // in case if it doesn't exist
        setExpressions((prevState) => {
            const newArray = [...prevState, item];
            localStorage.setItem("expressions", JSON.stringify(newArray));
            return newArray;
        });
    };

    const handleSetValue = (input) => {
        if (number.length < 10) {
            if (input === ".") {
                if (!dotFlag) {
                    number === ""
                        ? setNumber(0 + input)
                        : setNumber((prevState) => prevState + input);
                    setDotFlag(true);
                }
            } else {
                !dotFlag && number[0] === INIT_VALUE
                    ? setNumber(input)
                    : setNumber((prevState) => prevState + input);
            }
        }
    };

    const handleSetStoredValue = () => {
        setStoredNumber(number);
        setNumber("");
        setDotFlag(false);
        setError("");
    };

    const handleClearValue = () => {
        setNumber(INIT_VALUE);
        setStoredNumber("");
        setOperator("");
        setDotFlag(false);
        setError("");
    };

    const handleBackButton = () => {
        if (number !== "") {
            const deletedNumber = number.slice(0, number.length - 1);
            setNumber(deletedNumber);
        } else if (number === "" && storedNumber !== "") {
            const deletedStoredNumber = storedNumber.slice(
                0,
                storedNumber.length - 1
            );
            setStoredNumber(deletedStoredNumber);
        } else {
            handleClearValue();
        }
    };

    const handleSetCalcOperator = (type) => {
        if (number) {
            setOperator(type);
            handleSetStoredValue();
        }
        if (storedNumber) {
            setOperator(type);
        }
        setError("");
    };

    const handleClearExpressions = () => {
        setExpressions([]);
        setIsOpen(false);
        localStorage.setItem("expressions", JSON.stringify([]));
    };

    const handleOpenHistory = () => {
        setIsOpen((prevState) => !prevState);
    };

    const handleCalculatedResult = () => {
        if (number && storedNumber) {
            try {
                if (Number(number) === 0 && operator === "/") {
                    throw new Error("You can't divide by zero!");
                }
                const result = getRoundNumber(operator, storedNumber, number);
                setStoredNumber(result);
                addToExpressions({
                    id: getRandomNumber(1, 1000),
                    storedNumber,
                    number,
                    operator,
                    result
                });
            } catch (err) {
                setError(err.message);
            }
        }
        setNumber("");
        setDotFlag(false);
    };

    const reducer = (prev, curr) => {
        let actionType;
        switch (curr) {
        case "+":
        case "-":
        case "*":
        case "/":
            actionType = handleSetCalcOperator;
            break;
        case "AC":
            actionType = handleClearValue;
            break;
        default:
            actionType = handleSetValue;
            break;
        }
        const newObj = {
            name: curr,
            component: (itemName) => (
                <div key={itemName} onClick={() => actionType(itemName)}>
                    {itemName}
                </div>
            )
        };
        if (prev[prev.length - 1].length !== 4) {
            prev[prev.length - 1].push(newObj);
        } else {
            prev.push([newObj]);
        }
        return prev;
    };

    return (
        <AppContext.Provider
            value={{
                number,
                operator,
                storedNumber,
                error,
                expressions,
                isOpen,
                reducer,
                handleSetValue,
                handleBackButton,
                handleCalculatedResult,
                handleClearExpressions,
                handleOpenHistory
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

AppProvider.propTypes = {
    children: PropTypes.element.isRequired
};

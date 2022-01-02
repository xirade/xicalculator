import React from "react";

// components
import Calculator from "./components/Calculator";

// styles
import "./App.css";
import { AppProvider } from "./context/AppProvider";
import HistoryButton from "./components/buttons/HistoryButton";

function App() {
    return (
        <AppProvider>
            <Calculator />
            <HistoryButton />
        </AppProvider>
    );
}

export default App;

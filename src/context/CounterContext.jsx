import { createContext, useState } from "react";

export const CounterContext = createContext(0);

export default function CounterContextProvider({ children }) {
    const [count, setCount] = useState(0);

    function increase() {
        setCount(count + 1);
    }

    return (
        <CounterContext.Provider value={{ count, increase }}>
            {children}
        </CounterContext.Provider>
    );
}

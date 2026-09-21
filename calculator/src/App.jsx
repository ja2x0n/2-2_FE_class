import { useReducer } from "react";
import "./App.css";
import Button from "./components/Button";

const initialState = {
    input: "",
    operand: null,
    operator: null,
};

const calculate = (a, operator, b) => {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            return b;
    }
};

const reducer = (state, action) => {
    switch (action.type) {
        case "INPUT_NUMBER":
            return { ...state, input: state.input + action.number };

        case "INPUT_OPERATOR": {
            const number = Number(state.input);
            const nextOperand =
                state.operand === null
                    ? number
                    : calculate(state.operand, state.operator, number);
            return {
                input: "",
                operand: nextOperand,
                operator: action.operator,
            };
        }

        case "CALCULATE": {
            if (state.operator === null) return state;
            const result = calculate(
                state.operand,
                state.operator,
                Number(state.input)
            );
            return { input: String(result), operand: null, operator: null };
        }

        case "RESET":
            return initialState;

        default:
            return state;
    }
};

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { input, operand, operator } = state;

    const getOperandValue = () =>
        operand === null ? "" : `${operand} ${operator}`;

    return (
        <div className="calculator">
            <div className="display">
                <h4>{getOperandValue()}</h4>
                <h2>{input}</h2>
            </div>
            <div className="buttons">
                <Button
                    text="7"
                    onClick={() =>
                        dispatch({ type: "INPUT_NUMBER", number: 7 })
                    }
                />
                <Button
                    text="8"
                    onClick={() =>
                        dispatch({ type: "INPUT_NUMBER", number: 8 })
                    }
                />
                <Button
                    text="9"
                    onClick={() =>
                        dispatch({ type: "INPUT_NUMBER", number: 9 })
                    }
                />
                <Button
                    text="AC"
                    type="action"
                    onClick={() => dispatch({ type: "RESET" })}
                />
                <Button
                    text="4"
                    onClick={() =>
                        dispatch({ type: "INPUT_NUMBER", number: 4 })
                    }
                />
                <Button
                    text="5"
                    onClick={() =>
                        dispatch({ type: "INPUT_NUMBER", number: 5 })
                    }
                />
                <Button
                    text="6"
                    onClick={() =>
                        dispatch({ type: "INPUT_NUMBER", number: 6 })
                    }
                />
                <Button
                    text="/"
                    type="operator"
                    onClick={() =>
                        dispatch({ type: "INPUT_OPERATOR", operator: "/" })
                    }
                />
                <Button
                    text="1"
                    onClick={() =>
                        dispatch({ type: "INPUT_NUMBER", number: 1 })
                    }
                />
                <Button
                    text="2"
                    onClick={() =>
                        dispatch({ type: "INPUT_NUMBER", number: 2 })
                    }
                />
                <Button
                    text="3"
                    onClick={() =>
                        dispatch({ type: "INPUT_NUMBER", number: 3 })
                    }
                />
                <Button
                    text="*"
                    type="operator"
                    onClick={() =>
                        dispatch({ type: "INPUT_OPERATOR", operator: "*" })
                    }
                />
                <Button
                    text="0"
                    onClick={() =>
                        dispatch({ type: "INPUT_NUMBER", number: 0 })
                    }
                />
                <Button
                    text="+"
                    type="operator"
                    onClick={() =>
                        dispatch({ type: "INPUT_OPERATOR", operator: "+" })
                    }
                />
                <Button
                    text="-"
                    type="operator"
                    onClick={() =>
                        dispatch({ type: "INPUT_OPERATOR", operator: "-" })
                    }
                />
                <Button
                    text="="
                    type="operator"
                    onClick={() => dispatch({ type: "CALCULATE" })}
                />
            </div>
        </div>
    );
};

export default App;

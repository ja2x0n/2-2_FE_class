import "./App.css";
import Header from "./components/Header";
// import TestComp from './components/TestComp'
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";

import { useRef, useReducer, useCallback } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "CREATE":
            return [action.newItem, ...state];
        case "UPDATE":
            return state.map((item) =>
                item.id === action.targetId
                    ? { ...item, isDone: !item.isDone }
                    : item
            );
        case "DELETE":
            return state.filter((item) => item.id !== action.targetId);
        default:
            return state;
    }
}

function App() {
    const [todo, dispatch] = useReducer(reducer, []);
    const idRef = useRef(0);

    const addTodo = useCallback((content) => {
        const item = {
            id: idRef.current,
            content: content,
            isDone: false,
            createdDate: new Date().getTime(),
        };

        idRef.current += 1;
        dispatch({ type: "CREATE", newItem: item });
    }, []);

    const onUpdate = useCallback((targetId) => {
        dispatch({ type: "UPDATE", targetId });
    }, []);
    const onDelete = useCallback((targetId) => {
        dispatch({ type: "DELETE", targetId });
    }, []);

    return (
        <div className="App">
            <Header />
            {/* <TestComp /> */}
            <TodoEditor onCreate={addTodo} />
            <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
        </div>
    );
}

export default App;

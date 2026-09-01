import "./App.css";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";

import { useRef, useReducer } from "react";

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
    function addTodo(content) {
        const item = {
            id: idRef.current,
            content: content,
            isDone: false,
            createDate: new Date().getTime(),
        };
        idRef.current += 1;
        dispatch({ type: "CREATE", newItem: item });
    }
    function onUpdate(id) {
        dispatch({ type: "UPDATE", targetId: id });
    }
    function onDelete(id) {
        dispatch({ type: "DELETE", targetId: id });
    }
    return (
        <div className="App">
            <Header />
            <TodoEditor onAdd={addTodo} />
            <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
        </div>
    );
}

export default App;

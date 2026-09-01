import "./App.css";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";
import { useState, useRef } from "react";

function App() {
    const idRef = useRef(0);
    const [todo, setTodo] = useState([]);
    // 할 일 추가 함수
    const onCreate = (content) => {
        const newItem = {
            id: idRef.current,
            content,
            isDone: false,
            createdDate: new Date().getTime(),
        };
        setTodo([newItem, ...todo]);
        idRef.current += 1;
    };
    const onUpdate = (targetId) => {
        setTodo(
            todo.map((it) => {
                if (it.id === targetId) return { ...it, isDone: !it.isDone };
                else return it;
            })
        );
    };
    const onDelete = (targetId) => {
        setTodo(todo.filter((it) => it.id !== targetId));
    };
    return (
        <div className="App">
            <Header />
            <TodoEditor onCreate={onCreate} />
            <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
        </div>
    );
}

export default App;

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
    return (
        <div className="App">
            <Header />
            <TodoEditor onCreate={onCreate} />
            <TodoList />
        </div>
    );
}

export default App;

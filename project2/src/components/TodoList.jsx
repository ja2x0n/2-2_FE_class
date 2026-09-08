import { useState, useMemo, useContext } from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem";
import { TodoDispatchContext } from "../contexts/TodoContext";

function TodoList() {
    const { todo } = useContext(TodoDispatchContext);
    const [search, setSearch] = useState("");
    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };
    const getSearchResult = () => {
        return search === ""
            ? todo
            : todo.filter((it) =>
                  it.content.toLowerCase().includes(search.toLowerCase())
              );
    };
    const analyzeTodo = useMemo(() => {
        console.log("Analyze");
        const totalCount = todo.length;
        const doneCount = todo.filter((it) => it.isDone).length;
        const notDoneCount = totalCount - doneCount;
        return { totalCount, doneCount, notDoneCount };
    }, [todo]);
    const { totalCount, doneCount, notDoneCount } = analyzeTodo;
    return (
        <div className="TodoList">
            <h4>Todo List</h4>
            <div>
                <p>
                    total:{totalCount}, done:{doneCount}, notDone:{notDoneCount}
                </p>
            </div>
            <input
                className="searchbar"
                placeholder="검색어를 입력하세요"
                onChange={onChangeSearch}
                value={search}
            />
            <div className="list_wrapper">
                {getSearchResult().map((it) => (
                    <TodoItem key={it.id} {...it} />
                ))}
            </div>
        </div>
    );
}

export default TodoList;

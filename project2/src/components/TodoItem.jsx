import "./TodoItem.css";
import React, { useContext } from "react";
import { TodoStateContext } from "../contexts/TodoContext";

function TodoItem({ id, content, isDone, createdDate }) {
    const { onUpdate, onDelete } = useContext(TodoStateContext);
    console.log(`item ${content} updated`);
    const onChangeCheckbox = () => {
        onUpdate(id);
    };
    const onClickDelete = () => {
        onDelete(id);
    };
    return (
        <div className="TodoItem">
            <div className="checkbox_col">
                <input
                    type="checkbox"
                    checked={isDone}
                    onChange={onChangeCheckbox}
                />
            </div>
            <div className="title_col">{content}</div>
            <div className="date_col">
                {new Date(createdDate).toLocaleDateString()}
            </div>
            <div className="btn_col">
                <button onClick={onClickDelete}>삭제</button>
            </div>
        </div>
    );
}

export default React.memo(TodoItem);

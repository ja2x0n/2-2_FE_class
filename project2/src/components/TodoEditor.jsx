import { useState, useRef, useContext } from "react";
import "./TodoEditor.css";
import React from "react";
import { TodoDispatchContext } from "../contexts/TodoContext";

function TodoEditor() {
    const [content, setContent] = useState("");
    const inputRef = useRef();
    const { onCreate } = useContext(TodoDispatchContext);
    const onChangeContent = (e) => {
        setContent(e.target.value);
    };
    const onSubmit = () => {
        if (!content) {
            inputRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    };
    const onKeyDown = (e) => {
        if (e.keyCode == 13) {
            onSubmit();
        }
    };
    return (
        <div className="TodoEditor">
            <h4>새로운 Todo 작성하기 ✏</h4>
            <div className="editor_wrapper">
                <input
                    placeholder="Todo..."
                    value={content}
                    onChange={onChangeContent}
                    ref={inputRef}
                    onKeyDown={onKeyDown}
                />
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    );
}

export default React.memo(TodoEditor);

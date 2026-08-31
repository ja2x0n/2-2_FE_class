import { useState } from "react";
import "./TodoEditor.css";

const TodoEditor = ({ onCreate }) => {
    const [content, setContent] = useState("");
    const onChangeContent = (e) => {
        setContent(e.target.value);
    };
    const onSubmit = () => {
        onCreate(content);
    };
    return (
        <>
            <div className="TodoEditor">
                <h4>새로운 Todo 작성하기 ✏️</h4>
                <div className="editor_wrapper">
                    <input
                        type="text"
                        placeholder="Todo..."
                        onChange={onChangeContent}
                    />
                    <button onClick={onSubmit}>추가</button>
                </div>
            </div>
        </>
    );
};

export default TodoEditor;

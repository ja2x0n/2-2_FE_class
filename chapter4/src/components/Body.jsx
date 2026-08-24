import { useState, useRef } from "react";

const Body = () => {
    const [text, setText] = useState("");
    const textRef = useRef();
    const handleOnChange = (e) => {
        setText(e.target.value);
    };
    const handleOnClick = () => {
        alert(text);
        setText("");
        textRef.current.focus();
    };
    return (
        <div>
            <input
                ref={textRef}
                type="text"
                value={text}
                onChange={handleOnChange}
            />
            <button onClick={handleOnClick}></button>
        </div>
    );
};

export default Body;

import { useReducer } from "react";
import "./App.css";

function reducer(state, action) {
    switch (action.type) {
        case "USERNAME":
            return { ...state, username: action.value };
        case "EMAIL":
            return state;
        case "AGE":
            return state;
        default:
            return state;
    }
}
function App() {
    const [user, dispatch] = useReducer(reducer, {
        username: "user",
        email: "user@mail.com",
        age: 10,
    });
    const handleChangeUsername = () => {
        const newName = prompt("새 username 을 입력하세요");
        if (newName) dispatch({ type: "USERNAME", value: newName });
    };
    const handleChangeEmail = () => {};
    const handleChangeAge = () => {};
    return (
        <>
            <h1>
                Username : {user.username}{" "}
                <button onClick={handleChangeUsername}>수정</button>
            </h1>
            <h2>
                Email : {user.email}{" "}
                <button onClick={handleChangeEmail}>수정</button>
            </h2>
            <h2>
                Age :{user.age} <button onClick={handleChangeAge}>수정</button>
            </h2>
        </>
    );
}

export default App;

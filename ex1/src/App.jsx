import Item from "./components/Item";

function App() {
    const arr = ["Hello", "World", "!"];

    return (
        <>
            <ul>
                {arr.map((i) => {
                    return (
                        <>
                            <li key={i}>
                                <Item title={i} />
                            </li>
                            {/* 지금은 이렇게 하지만 주로 서버에서 주는 Primary Key를 Key로 사용함 */}
                        </>
                    );
                })}
            </ul>
        </>
    );
}

export default App;

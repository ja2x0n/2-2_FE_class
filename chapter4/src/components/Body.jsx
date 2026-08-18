import "./Body.css";

const Body = (props) => {
    return (
        <>
            <h1>Body</h1>
            {props.children}
        </>
    );
};

export default Body;

// class가 아니라 className을 쓰는 이유 -> HTML이 아닌 리액트 엘리먼트 함수를 호출하는 객체이기 때문이다.
// for도 마찬가지이기에 htmlFor을 사용함. -> ex) <label htmlFor="test">이름</label>
// CSS Selector 외우기
// 구조분해할당을 이용한 Props 전달 및 사용 가능
// 객체 전달시 Spread 연산자를 활용하는 이유 -> 객체로 전달하면 새 객체가 생성되서 쓸데없는 렌더링이 발생한다 = 최적화 손해
// 기본 값을 설정하면 부모가 넘겨주지 않았을 때 사용 할 수 있다.

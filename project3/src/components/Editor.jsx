import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "./Editor.css";
import Button from "./Button.jsx";
import EmotionItem from "./EmotionItem.jsx";
import { getFormattedDate, emotionList } from "../util";

const Editor = ({ initData, onSubmit = () => {} }) => {
    const navigate = useNavigate();
    const [state, setState] = useState({
        date: getFormattedDate(new Date()),
        emotionId: 3,
        content: "",
    });
    useEffect(() => {
        if (initData) {
            // 초기 데이터를 받은 경우에만 편집용 상태로 동기화한다.
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setState({
                ...initData,
                date: getFormattedDate(new Date(parseInt(initData.date))),
            });
        }
    }, [initData]);
    const handleChangeDate = (e) => {
        setState({ ...state, date: e.target.value });
    };
    const handleChangeContent = (e) => {
        setState({ ...state, content: e.target.value });
    };
    const handleChangeEmotion = (emotionId) => {
        setState({ ...state, emotionId });
    };
    const handleGoBack = () => {
        navigate(-1);
    };
    const handleOnSubmit = () => {
        onSubmit(state);
    };
    return (
        <div className="Editor">
            <div className="editor_section">
                <h4>오늘의 날짜</h4>
                <div className="input_wrapper">
                    <input
                        type="date"
                        value={state.date}
                        onChange={handleChangeDate}
                    />
                </div>
            </div>
            <div className="editor_section">
                <h4>오늘의 감정</h4>
                <div className="input_wrapper emotion_list_wrapper">
                    {emotionList.map((it) => (
                        <EmotionItem
                            key={it.id}
                            {...it}
                            onClick={handleChangeEmotion}
                            isSelected={state.emotionId === it.id}
                        />
                    ))}
                </div>
            </div>
            <div className="editor_section">
                <h4>오늘의 일기</h4>
                <textarea
                    placeholder="오늘은 어땠나요?"
                    value={state.content}
                    onChange={handleChangeContent}
                />
            </div>
            <div className="editor_section bottom_section">
                <Button text={"취소하기"} onClick={handleGoBack} />
                <Button
                    type={"positive"}
                    text={"작성 완료"}
                    onClick={handleOnSubmit}
                />
            </div>
        </div>
    );
};
export default Editor;

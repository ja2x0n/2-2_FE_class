import { useParams } from "react-router";
import useDiary from "../hooks/useDiary";

const Diary = () => {
    const { id } = useParams();
    const data = useDiary(id);

    if (!data) {
        return <div>일기를 불러오고 있습니다...</div>;
    } else {
        return <div>Diary: {id}번 일기</div>;
    }
};
export default Diary;

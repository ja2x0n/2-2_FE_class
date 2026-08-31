import { useEffect } from "react";

export default function Even() {
    useEffect(() => {
        return () => {
            console.log("Even unmounted");
        };
    }, []);

    return <div>현재 카운트는 짝수입니다.</div>;
}

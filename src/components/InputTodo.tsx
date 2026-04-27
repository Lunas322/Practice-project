import React from "react";
import { TodoInputProps } from "../types/todo";

function TodoInput({text, setText, onEnter}:TodoInputProps) {
        //string | (prev: string) => string dispatch는 setState의 타입이 string이 될 수도 있고
        //  이전 상태를 받아서 새로운 상태를 반환하는 함수가 될 수도 있기 때문에 이렇게 작성
        // 결국 dispatch는 받아서 쓴다는거고 그 뒤에 <React.SetStateAction<string>>는 setState의 타입이 string이 될 수도 
        // 있고 이전 상태를 받아서 새로운 상태를 반환하는 함수가 될 수도 있다는 것을 명시하는 것 나의 이해 법 = dispatch 실행기 React.SetStateAction<string>는 부연 설명
        // 결론! 값이 string이나 값복사의 형태로도 받아서 사용하는 경우 위의 형태로 쓰자.!
        // string일수도number일수도 boolean일수도 있고 아니면 객체일수도 있다면
        //  React.SetStateAction<string | number | boolean | object> 이런식으로 작성하면 되고 뭐 하나만 들어오면 저중에서 타입 맞춰서 쓰면 돼
    return (
        <>
                        <input className="w-4/5 h-full bg-transparent text-2xl font-bold p-2"
                 placeholder="할일을 입력해주세요" value={text}  onChange={(e)=>setText(e.target.value)} onKeyDown = {(e) => e.key === "Enter" && onEnter()}></input>
        </>
    )
}
export default TodoInput;
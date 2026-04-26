import React from "react";

function TodoInput({text, setText, onEnter}) {
    return (
        <>
                        <input className="w-4/5 h-full bg-transparent text-2xl font-bold p-2"
                 placeholder="할일을 입력해주세요" value={text}  onChange={(e)=>setText(e.target.value)} onKeyDown = {(e) => e.key === "Enter" && onEnter()}></input>
        </>
    )
}
export default TodoInput;
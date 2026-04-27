
function ButtonTodo({addlist}:{addlist:()=>void}) {
    return (
        <>
        <button className="w-2/12 h-full rounded-xl p-4 text-gray-500 font-bold bg-gray-800" onClick={addlist}>추가하기</button>
        </>
    )
}

export default ButtonTodo;
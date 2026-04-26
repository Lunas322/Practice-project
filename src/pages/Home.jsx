import React, { useState } from "react";
import Text from "../components/Text";
import { data } from "autoprefixer";

function Home() {
    const [text, setText] = useState(""); 
    const [list, setList] = useState([]);

    function addlist(){
        setList([...list, {id: Date.now(), text: text}])
        setText("");
    }

    function dellist(id) {
        setList(list.filter(item => item.id !== id))
    }
    console.log(list)
    return (
        <>
       <div className="bg-slate-200 w-full h-screen flex justify-center flex-col gap-8 items-center overflow-hidden">
            <div className="bg-gray-100 border-gray-400 gap-7 border-2 flex flex-col justify-center overflow-hidden items-center w-3/5 h-4/5 rounded-lg">
              {list.map((item)=><Text key={item.id} text={item.text} onDelete={()=>dellist(item.id)}/>)}
            </div>
            <div className="w-3/5 h-20 p-2 bg-gray-300 flex justify-between items-center border-2 border-gray-900 rounded-2xl">
                <input className="w-4/5 h-full bg-transparent text-2xl font-bold p-2"
                 placeholder="할일을 입력해주세요" value={text}  onChange={(e)=>setText(e.target.value)}></input>
                 <button className="w-2/12 h-full rounded-xl p-4 text-gray-500 font-bold bg-gray-800" onClick={addlist}>추가하기</button>
            </div>
        </div>
        </>
    )
}

export default Home;
import React, { useState } from "react";
import Text from "../components/Text";
import TodoInput from "../components/InputTodo";
import ButtonTodo from "../components/ButtonTodo";

function Home() {
    const [text, setText] = useState(""); 
    const [list, setList] = useState([]);

    function addlist(){
        if(text.length === 0) return;

        setList(prev => [...prev, {id: Date.now(), text: text, isDone: false}])
        setText("");
    }

    function dellist(id) {
        setList(prev => prev.filter(item => item.id !== id))
    }

    function donelist(id) {
        setList(prev => prev.map(item => item.id === id ? {...item, isDone: !item.isDone} : item))
        
    }
  return (
  <>
    <div className="bg-slate-200 w-full h-screen flex justify-center flex-col gap-8 items-center overflow-hidden">

      <div className="bg-gray-100 border-gray-400 gap-7 border-2 flex flex-col justify-center overflow-hidden items-center w-3/5 h-4/5 rounded-lg">
        {list.map((item) => (
          <Text
            key={item.id}
            text={item.text}
            isDone={item.isDone}
            onDelete={() => dellist(item.id)}
            onDone={() => donelist(item.id)}
          />
        ))}
      </div>    

      <div className="w-3/5 h-20 p-2 bg-gray-300 flex justify-between items-center border-2 border-gray-900 rounded-2xl">
        <TodoInput text={text} setText={setText} onEnter={addlist}/>
        <ButtonTodo addlist={addlist}/>
      </div>

    </div>
  </>
);
}   

export default Home;

import React from "react";  
import { TextProps } from "../types/todo";
function Text({todo,onDelete, onDone}:TextProps) {
    return (
        <>
       <div className="bg-slate-900 w-5/6 h-1/6 rounded-xl flex p-2">
                <div className="w-7 h-full flex flex-col gap-1">
                <div className="w-5 h-5 bg-gray-100 rounded-full"></div>
                <div className="w-5 h-5 bg-gray-100 rounded-full"></div>
                <div className="w-5 h-5 bg-gray-100 rounded-full"></div>
                <div className="w-5 h-5 bg-gray-100 rounded-full"></div>
                </div>
                <div id="main" onClick={onDone} className={`w-full h-full  rounded-lg p-2 text-xl font-bold flex items-center ${todo.isDone ? "bg-green-400":"bg-slate-100"}`}>{todo.text}</div>
                     <div className="bg-white w-5 h-5 ml-2 flex justify-center items-center rounded-full ">
                        <button className="w-full h-full font-bold flex justify-center items-center  hover:text-green-500" onClick={onDelete}>X</button>
                     </div>
                    </div>
                    
        </>
    )
}
export default Text;    
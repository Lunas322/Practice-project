import React from "react";

function Text({text,onDelete}) {
    return (
        <>
       <div className="bg-slate-900 w-5/6 h-1/6 rounded-xl flex p-2">
                <div className="w-7 h-full flex flex-col gap-1">
                <div className="w-5 h-5 bg-gray-100 rounded-full"></div>
                <div className="w-5 h-5 bg-gray-100 rounded-full"></div>
                <div className="w-5 h-5 bg-gray-100 rounded-full"></div>
                <div className="w-5 h-5 bg-gray-100 rounded-full"></div>
                </div>
                <div id="main" className="w-full h-full bg-slate-100 rounded-lg p-2 text-xl font-bold flex items-center">{text}</div>
                     <div className="bg-white w-5 h-5 ml-2 flex justify-center items-center rounded-full ">
                        <button className="w-full h-full font-bold flex justify-center items-center  hover:text-green-500" onClick={onDelete}>X</button>
                     </div>
                    </div>
                    
        </>
    )
}
export default Text;    
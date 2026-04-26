import React from "react";

function Home() {
    return (
        <>
        <div className="bg-slate-200 w-full h-screen flex justify-center items-center">
            <div className="bg-gray-100 border-gray-400 gap-7 border-2 flex flex-col justify-center items-center w-3/5 h-4/5 rounded-lg">
                <div className="bg-slate-300 w-5/6 h-1/6 rounded-xl flex p-2">
                <div className="w-7 h-full flex flex-col gap-1">
                <div className="w-5 h-5 bg-gray-100 rounded-full"></div>
                <div className="w-5 h-5 bg-gray-100 rounded-full"></div>
                <div className="w-5 h-5 bg-gray-100 rounded-full"></div>
                <div className="w-5 h-5 bg-gray-100 rounded-full"></div>
                </div>
                <div className="w-full h-full bg-slate-100 rounded-lg p-2 text-xl font-bold flex items-center"></div>
                    </div>
                  
            </div>
        </div>
        </>
    )
}

export default Home;
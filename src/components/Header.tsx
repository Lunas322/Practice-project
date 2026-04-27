import React from "react";

function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-center items-center">
        <h1 className="text-xl font-bold text-black">오늘의 할일</h1>
        </div>
        </header>
  );
}
// 넣을 타입이 없음 추후 props가 생긴다면 타입을 넣어주면 됨

export default Header;
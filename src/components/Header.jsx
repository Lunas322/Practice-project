import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-center items-center">
        <h1 className="text-xl font-bold text-black">오늘의 할일</h1>
        </div>
        </header>
  );
}

export default Header;
import { useEffect, useState } from "react";
import { ToDo } from "../types/todo";

export function useTodo() {
  const [text, setText] = useState<string>("");

  const [list, setList] = useState<ToDo[]>(() => {
    const savedlist = localStorage.getItem("TODO_LIST");
    return savedlist ? (JSON.parse(savedlist) as ToDo[]) : [];
  });

  function addList() {
    if (text.length === 0) return;

    setList(prev => [
      ...prev,
      { id: Date.now(), text, isDone: false }
    ]);

    setText("");
  }

  function delList(id: number) {
    setList(prev => prev.filter(item => item.id !== id));
  }

  function doneList(id: number) {
    setList(prev =>
      prev.map(item =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  }

  useEffect(() => {
    localStorage.setItem("TODO_LIST", JSON.stringify(list));
  }, [list]);

  return {
    text,
    setText,
    list,
    addList,
    delList,
    doneList,
  };
}
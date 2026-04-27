
import Text from "../components/Text";
import TodoInput from "../components/InputTodo";
import ButtonTodo from "../components/ButtonTodo";
import { useTodo } from "../hooks/useTodo";


function Home() {
    const {text, setText, list, addList, delList, doneList} = useTodo();
  return (
  <>
    <div className="bg-slate-200 w-full h-screen flex justify-center flex-col gap-8 items-center overflow-hidden">

      <div className="bg-gray-100 border-gray-400 gap-7 border-2 flex flex-col justify-center overflow-hidden items-center w-3/5 h-4/5 rounded-lg">
        {list.map((item) => (
          <Text 
            key={item.id}
            todo={item}
            onDelete={() => delList(item.id)}
            onDone={() => doneList(item.id)}
          />
        ))}
      </div>    

      <div className="w-3/5 h-20 p-2 bg-gray-300 flex justify-between items-center border-2 border-gray-900 rounded-2xl">
        <TodoInput text={text} setText={setText} onEnter={addList}/>
        <ButtonTodo addlist={addList}/>
      </div>

    </div>
  </>
);
}   

export default Home;
import { useState } from "react";

import "./App.css";
import SearchBox from "./components/SearchBox";
import ToDo from "./components/ToDo";

import NoTodo from "./components/NOTodo";

function App() {
  const todo = ["play", "pray", "eat", "sleep", "code"];

  return (
    <>
      {/* <TeachersComponent text={'klkll;'}/> */}
      <div className="justify-center"></div>
      <SearchBox />

      <div>
        <div className="flex  justify-between px-6 text-white font-semibold">
          <p>Total TODos:10</p>
          <p>Completed TODos:5</p>
        </div>

        <div className="px-10 pt-10 flex flex-col gap-5">
          {todo.map((item) => (
            <ToDo p={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

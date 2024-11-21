import React from "react";
import { FaTrash } from "react-icons/fa";
function ToDo({ p }) {
  return (
    <div
      className="rounded-lg p-2 flex align-middle content-center  bg-white shadow-sm justify-between 
        py-5 hover:scale-105 transition-all"
    >
      <input type="checkbox" />
      <p>{p}</p>
      <button className="text-red-500"><FaTrash/></button>
    </div>
  );
}

export default ToDo;

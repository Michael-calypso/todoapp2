import React from "react";
import { FaPlus } from "react-icons/fa";
function SearchBox() {
  return (
    <div className="py-[20px] ">
      <div className="flex  justify-center mx-auto  rounded-xl p-4 border-2 w-[300px] bg-white py-1 px-2 ">
        <input type="text" className="flex-1 outline-none" placeholder="add your todos" />
        <button className="rounded-full bg-blue-600  text-white text-lg p-2 font-bold">
          <FaPlus />
        </button>
      </div>
    </div>
  );
}

export default SearchBox;

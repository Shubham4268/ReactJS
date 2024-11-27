import React, { useState, useEffect,useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, saveUpdate } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const [updatedInput, setUpdatedInput] = useState("");
  const dispatch = useDispatch();
  const updateId = useSelector((state) => state.updateId);
  const todos = useSelector((state) => state.todos);
  const inputRef = useRef(null);

  useEffect(() => {
    if (updateId) {
      todos.map((todo) =>
        todo.id === updateId
          ? setUpdatedInput(todo.text)
          : setUpdatedInput(updatedInput)
      );
    }
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [updateId]);

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!updateId) {
      dispatch(addTodo(input));
      setInput("");
    } else {
      dispatch(saveUpdate(updatedInput));
      setInput("");
    }
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
       ref={inputRef} 
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
        placeholder="Enter a Todo..."
        value={updateId == null ? input : updatedInput}
        onChange={(e) =>
          updateId == null
            ? setInput(e.target.value)
            : setUpdatedInput(e.target.value)
        }
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {updateId == null ? "Add Todo" : "Update"}
      </button>
    </form>
  );
}

export default AddTodo;

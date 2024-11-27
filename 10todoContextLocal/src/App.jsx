import {TodoProvider} from "./contexts/index.js";
import "./App.css";
import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm.jsx";
import TodoItem from "./components/TodoItem.jsx";

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (todo) => {
    // setTodoList(todo)                         // If we write it like this then the new added todo will overwrite all the previous todos
    setTodoList((prev) => [{ id: Date.now(), ...todo }, ...prev]); // To avoid overwrite, we take all the previous values and add it in new array and add the new todo which is a object with id, todo & completed
  };

  const updateTodo = (id, todo) => {
    setTodoList((prev) =>
      prev.map((prevTodo) => 
        prevTodo.id === id ? todo : prevTodo
      )
    );
    /*
    grab all the previous todos from the array, then use a loop to traverse and match the id of todo, if 
    the id matches add a new todo in the array else keep the todo as it is.
    prev.map((prevTodo)=>{
      if (prevTodo.id===id) {
        setTodoList(todo)
      }else{
        setTodoList(prevTodo)
      }
    })
    */
  };

  const deleteTodo = (id) => {
    setTodoList((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
    /*
    Filter is an array method in JavaScript that creates a new array with all elements that pass the condition 
    implemented by the provided function. The new array resulting from the filtering operation becomes the new 
    state of todoList after the update.
    */
  };

  const toggleComplete = (id) => {
    setTodoList((prev) =>
      prev.map((prevTodo) => 
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  // Local Storage of browser

  useEffect(() => {
    /* As soon as the page is loaded, the todolist that is already present in the local storage is accessed and stored in 'todolist', which is an array of todos */
    const todolist = JSON.parse(localStorage.getItem("todolist"));

    if (todolist && todolist.length > 0) {
      setTodoList(todolist);
    }
  }, []);

  /*
  Similarily as soon as there is any change made in the todoList, the new list must be stored in localstorage.
  The name given to set an item in the localstorage must be same as the name given to get the item.
  */
  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <TodoProvider
      value={{ todoList, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todoList.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;

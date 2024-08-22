import { useState } from "react"
import { addTodo, deleteTodo } from "../api/api";

export const TodoForm: React.FC = ()=>{

    const [title, setTitle] = useState<string>('');
    const [userId, setUserId] = useState<string>('-1');

    const addTodoHandler = async ()=>{
      /*const addResult = await addTodo({
        title: 'Test TODO',
        userId: 3,
        completed: false
      });
      console.log(addResult);*/
      const deleteResult = await deleteTodo(105923);
      console.log(deleteResult);
      
    }

    return (
        <form className="bg-white shadow-md rounded w-64 px-8 pt-6 pb-8 mb-4 mt-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Todo title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 
      text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Todo title"
            value={title}
            onChange={(event)=> {setTitle(event.target.value)}}
          />
          <p className="text-red-500 mt-4 text-xs italic">
            Todo title is required!
          </p>
        </div>

        <div className="relative">
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 my-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            value={userId}
            onChange={(event)=>{setUserId(event.target.value)}}
          >
            <option value='-1'>Select user</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={addTodoHandler}
          >
            Add todo
          </button>
        </div>
      </form>
    )
}
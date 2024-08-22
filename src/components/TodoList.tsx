import { DeleteIcon } from "./icons/DeleteIcon";

type Props = {
    todos: string[];
}

export const TodoList: React.FC<Props> = ({todos})=>{
    return (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full">
        <ul>
            {todos.map((todo)=>(
              <li className="flex border-b border-gray-300">
                <span className="m-4">1</span>
                <span className="m-4 flex-1 text-left">{todo}</span>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold px-4 rounded focus:outline-none focus:shadow-outline"
                 type="button" ><DeleteIcon/></button>
              </li>
            ))}
          
        </ul>
      </div>
    )
}
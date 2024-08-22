import { Todo } from "../types";

type TodoForAdd = Omit<Todo, 'id'>; // Utility types

const BASE_URL = 'https://mate.academy/students-api';

async function get<T>(url: string): Promise<T> {
    const fullURL = BASE_URL + url;
    const response: Response = await fetch(fullURL);
    return response.json();
}

export const getTodos = ()=> get<Todo[]>('/todos?userId=3');

async function post<BodyType, ResponseType>(url: string, body: BodyType): Promise<ResponseType> {
    const fullURL = BASE_URL + url;
    const requestOptions = {
        method: "POST",
        body: JSON.stringify(body),
        headers:{'Content-Type': 'application/json; charset=UTF-8'},
      };
    const response: Response = await fetch(fullURL, requestOptions);  
    return response.json();
};

export const addTodo = (todo: TodoForAdd) => post<TodoForAdd, Todo>('/todos', todo);

async function deleteAPI<ResponseType>(url: string): Promise<ResponseType> {
    const fullURL = BASE_URL + url;
    const requestOptions = {
        method: "DELETE",
      };
    const response: Response = await fetch(fullURL, requestOptions);  
    return response.json();
}

export const deleteTodo = (todoId: number) => deleteAPI<number>(`/todos/${todoId}`);
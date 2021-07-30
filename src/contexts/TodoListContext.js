import React, { createContext, useReducer } from "react";
import { todosReducer } from "../reducers/todosReducer";

export const TodoListContext = createContext();

const TodoListContextProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todosReducer, [
    { text: "Plan the School Trip", id: 1 },
    { text: "Watch the Olympics", id: 2 },
    { text: "Feed my dogs", id: 3 },
  ]);

  return (
    <TodoListContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoListContext.Provider>
  );
};

export default TodoListContextProvider;

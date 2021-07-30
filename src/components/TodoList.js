import React, { useState, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { TodoListContext } from "../contexts/TodoListContext";

// class TodoList extends React.Component {
//   static contextType = ThemeContext;

//   render() {
//     const { isDarkTheme, lightTheme, darkTheme, changeTheme } = this.context;
//     const theme = isDarkTheme ? darkTheme : lightTheme;
//     return (
//       <div
//         style={{
//           background: theme.background,
//           color: theme.text,
//           height: "140px",
//           textAlign: "center",
//         }}
//       >
//         <p className="item"> Plan camping trip</p>
//         <p className="item"> Cooking dinner </p>
//         <p className="item"> Go to the gym</p>
//         <button className = "ui button primary" onClick = {changeTheme}>  Change the Theme  </button>
//       </div>
//     );
//   }
// }

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const { todos, dispatch } = useContext(TodoListContext);
  const { isDarkTheme, lightTheme, darkTheme, changeTheme } =
    useContext(ThemeContext);
  const theme = isDarkTheme ? darkTheme : lightTheme;

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", text: todo });
    setTodo("");
  };

  const handleRemoveTodo = (e) => {
    const id = e.target.id;
    dispatch({ type: "REMOVE_TODO", id });
  };

  return (
    <div
      style={{
        background: theme.background,
        color: theme.text,
        textAlign: "center",
      }}
    >
      {todos.length ? (
        todos.map((todo) => {
          return (
            <p
              id={todo.id}
              onClick={handleRemoveTodo}
              className="item"
              key={todo.id}
            >
              {todo.text}
            </p>
          );
        })
      ) : (
        <div> You have no todos </div>
      )}
      <form onSubmit={handleFormSubmit}>
        <label htmlFor=" todo ">Add todo</label>
        <input type="text" id="todo" onChange={handleChange} value={todo} />
        <input
          type="submit"
          className="ui button primary"
          value="Add new todo"
        />
      </form>
      <button className="ui button primary" onClick={changeTheme}>
        Change the Theme
      </button>
    </div>
  );
};
export default TodoList;

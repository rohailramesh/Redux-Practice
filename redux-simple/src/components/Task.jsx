import { useRef } from "react"; //referencing html elements
import { useDispatch } from "react-redux";
//how the action will be dispatched to reducer to carry it out
import { addTodo } from "../actions"; //actual action

const Task = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  function addTask() {
    const task = inputRef.current.value.trim();
    if (task !== "") {
      dispatch(addTodo(task));
      inputRef.current.value = "";
    }
  }
  return (
    <div className="task-component">
      <div className="add-task">
        <input
          type="text"
          placeholder="Add task here..."
          ref={inputRef}
          className="taskInput"
        />
        <button onClick={addNewTask}>Add task</button>
      </div>
    </div>
  );
};

export default Task;

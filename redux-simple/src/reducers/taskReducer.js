// individual reducers for specific applications

const initialState = {
  task: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      }; //if the action is to add task, then a newstate object is returned with new task added to the task array
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.task.filter((task) => task.id != action.payload),
      };
    default:
      return state;
  }
};

export default taskReducer;

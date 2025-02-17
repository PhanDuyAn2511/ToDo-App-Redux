import { combineReducers } from "redux"
import filterReducer from "../components/Filters/FilterSlice"
import todoListReducer from "../components/TodoList/TodosSlice"

// const rootReducer = (state = {}, action) => {
//   return {
//     filters: filterReducer(state.filters, action),
//     todoList: todoListReducer(state.todoList, action)
//   }

// }

const rootReducer = combineReducers({
  filters: filterReducer,
  todoList: todoListReducer
})
export default rootReducer
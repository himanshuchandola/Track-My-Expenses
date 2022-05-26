import { DefaultData } from "../../constants/expenses";
import {
  ADD_EXPENSE,
  DELETE_EXPENSE,
  EDIT_EXPENSE,
} from "../actionTypes/expenses";

const initialList = () => {
  const list = localStorage.getItem("expense-list");
  let expenses = DefaultData;
  localStorage.setItem("expense-list", JSON.stringify(expenses));
  if (list) {
    expenses = JSON.parse(list);
  }
  return expenses;
};

const initialState = {
  expenseList: initialList(),
};
export const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPENSE: {
      localStorage.setItem(
        "expense-list",
        JSON.stringify([...state.expenseList, action.data])
      );
      return {
        ...state,
        expenseList: [...state.expenseList, action.data],
      };
    }
    case DELETE_EXPENSE: {
      const { data } = action;
      const updatedList = state.expenseList.filter(
        (item) => item.createdAt !== data.createdAt
      );
      localStorage.setItem("expense-list", JSON.stringify(updatedList));
      return {
        ...state,
        expenseList: updatedList,
      };
    }
    case EDIT_EXPENSE: {
      const { data } = action;
      const updatedList = state.expenseList.filter(
        (item) => item.createdAt !== data.createdAt
      );
      updatedList.push(data);
      localStorage.setItem("expense-list", JSON.stringify(updatedList));
      return {
        ...state,
        expenseList: updatedList,
      };
    }
    default:
      return state;
  }
};

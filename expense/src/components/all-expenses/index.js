import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./all-expenses.css";
import Dropdown from "./dropdown";
import ExpenseTable from "./expense-table";

const getUniqueCategories = (list) => {
  let uniqueList = list.map((item) => item.category);
  uniqueList = ["All", ...new Set(uniqueList)];
  return uniqueList;
};

const AllExpenses = () => {
  let { expenseList: list } = useSelector((state) => state.expenses);
  const [listArr, setListArr] = useState(list);
  const [currentCategorySeached, setCurrentCategorySearched] = useState("All");
  let categoryList = getUniqueCategories(list);
  const dropdownCategories = [{ types: categoryList }];

  const filterByCategory = (category) => {
    setCurrentCategorySearched(category);
    if (category !== "All")
      list = list.filter((item) => item.category === category);
    setListArr(list);
  };

  useEffect(() => {
    setListArr(listArr);
  }, [listArr]);

  useEffect(() => {
    setListArr(list);
    if (currentCategorySeached !== "All")
      list = list.filter((item) => item.category === currentCategorySeached);
    setListArr(list);
  }, [list]);

  return (
    <div className="all-expenses">
      <div className="all-expenses-options">
        <div className="options-dropdown">
          <div className="dropdown-parent">
            <label className="dropdown-title-label">Choose Your Category</label>
            <Dropdown
              options={dropdownCategories}
              onSelect={filterByCategory}
              toShow={
                currentCategorySeached === "All"
                  ? "Choose Category"
                  : currentCategorySeached
              }
            />
          </div>
        </div>
        <div>
          <Link to="/add-expense">
            <button className="add-expense-btn">Add Expense</button>
          </Link>
        </div>
      </div>
      <div>
        <ExpenseTable list={listArr} />
      </div>
    </div>
  );
};

export default AllExpenses;

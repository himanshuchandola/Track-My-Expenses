import React, { useState } from "react";
import "./expense-analysis.css";
import { useSelector } from "react-redux";
import { Line } from "react-chartjs-2";
import Dropdown from "../all-expenses/dropdown";
import dateFormat from "dateformat";
import { MonthsArray, MonthsMapWithNumber } from "../../constants/expenses";

const dropdownMonths = [{ types: [...MonthsArray] }];

const getAllDatesInAMonth = (selectedMonth, list) => {
  // Filter all data of given month and add them into all dates and amount into an array
  const monthRank = MonthsMapWithNumber[selectedMonth];
  let dateArrayInMonth = [];
  let amountArrayInMonth = [];
  const expenseDatesInMonthArray = list.filter(
    (data) => new Date(data.dueDate).getMonth() + 1 === monthRank
  );
  for (let data of expenseDatesInMonthArray) {
    amountArrayInMonth.push(parseInt(data.amount));
    dateArrayInMonth.push(dateFormat(data.dueDate, "dd-mm-yyyy"));
  }
  return { expenseDatesInMonthArray, dateArrayInMonth, amountArrayInMonth };
};

const ExpenseAnalysis = () => {
  let { expenseList: list } = useSelector((state) => state.expenses);
  const [currentSelectedMonth, setCurrentSelectedMonth] = useState("January");
  const filterByMonth = (month) => {
    setCurrentSelectedMonth(month);
  };
  const { dateArrayInMonth, amountArrayInMonth } = getAllDatesInAMonth(
    currentSelectedMonth,
    list
  );

  const data = {
    labels: dateArrayInMonth,
    datasets: [
      {
        label: "Expense Amount (In INR)",
        data: amountArrayInMonth,
        fill: true,
        backgroundColor: "#00baff",
        borderColor: "#99e3fd",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
        },
      ],
      xAxes: [
        {
          type: "time",
          distribution: "series",
        },
      ],
    },
  };
  return (
    <div className="analytics-chart">
      <div>
        <label className="dropdown-title-label">Select Month</label>
        <Dropdown
          className="month-dropdown"
          options={dropdownMonths}
          onSelect={filterByMonth}
          toShow={currentSelectedMonth}
        />
      </div>
      <div className="chart">
        <Line id="expenseChart" data={data} options={options} />
      </div>
    </div>
  );
};

export default ExpenseAnalysis;

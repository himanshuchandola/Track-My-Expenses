import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./edit-expense-modal.css";
import { editExpense } from "../../../reduxstore/actions/expenses";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Modal = (prop) => {
  const { handleCloseBtn, details } = prop;
  const [description, setDescription] = useState(details.description);
  const [amount, setAmount] = useState(details.amount);
  const [category, setCategory] = useState(details.category);
  const [dueDate, setStartDate] = useState(new Date(details.dueDate));
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const updatedData = {
      dueDate,
      description,
      amount,
      category,
      createdAt: details.createdAt,
    };
    dispatch(editExpense(updatedData));
    toast("Data Updated SuccessFully !!!");
    handleCloseBtn();
  };

  return (
    <div className="modal">
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
      />
      <div className="modal-info">
        <div className="modal-info-card">
          <div className="details-heading">Edit Expense</div>
          <div className="due-date-container">
            <label className="date-label">Choose Due Date - </label>
            <DatePicker
              className="due-date"
              selected={dueDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <div className="form-item">
            <label>Description</label>
            <input
              placeholder="Add Expense description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="form-item">
            <label>Amount ₹</label>
            <input
              type="Number"
              placeholder="  Enter Expense Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="form-item">
            <label>Category</label>
            <input
              placeholder="   Enter Expense Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="form-add-button">
            <button className="add-expense-btn" onClick={handleSubmit}>
              Edit Expense
            </button>
            &nbsp;
            <button className="cancel-btn" onClick={handleCloseBtn}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

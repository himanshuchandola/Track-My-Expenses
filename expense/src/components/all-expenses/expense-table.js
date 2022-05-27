import React, { useState } from "react";
import "./expense-table.css";
import dateFormat from "dateformat";
import { useDispatch } from "react-redux";
import { deleteExpense } from "../../reduxstore/actions/expenses";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "./edit-expense-modal";

const ExpenseTable = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [editDetails, setEditDetails] = useState();
  const { list } = props;
  const dispatch = useDispatch();
  const handleDeleteExpense = (item) => {
    dispatch(deleteExpense(item));
    toast("Data Deleted SuccessFully !!!");
  };

  const openEditModal = (item) => {
    setShowModal(true);
    setEditDetails(item);
  };

  const hideModal = () => {
    setShowModal(false);
  };

  return (
    <div className="table">
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
      />
      <div className="table-container">
        <div className="table-header">
          <div className="table">
            <div className="table-row">
              <div className="table-column expense-id-head">
                <div className="">ID</div>
              </div>
              <div className="table-column date-head">
                <div className="">DATE</div>
              </div>
              <div className="table-column category-head">
                <div className="">CATEGORY</div>
              </div>
              <div className="table-column description-head">
                <div className="">DESCRIPTION</div>
              </div>
              <div className="table-column amount-head">
                <div className="">AMOUNT (INR)</div>
              </div>
              <div className="table-column action-head">
                <div className="">ACTIONS</div>
              </div>
            </div>
          </div>
        </div>
        <div className="table-body">
          <div className="table">
            {list.length ? (
              list.map((data, i) => {
                return (
                  <div className="table-row" key={i}>
                    <div className="table-column expense-id">
                      <div className="">{i + 1}</div>
                    </div>
                    <div className="table-column date">
                      <div className="">
                        {dateFormat(data.dueDate, "dd-mm-yyyy")}
                      </div>
                    </div>
                    <div className="table-column category">
                      <div className="">{data.category}</div>
                    </div>
                    <div className="table-column description">
                      <div className="">{data.description}</div>
                    </div>
                    <div className="table-column amount">
                      <div className="">{data.amount}</div>
                    </div>
                    <div className="table-column actions">
                      <button
                        className="action-button"
                        onClick={() => openEditModal(data)}
                      >
                        <i className="fi-sr-pencil edit-icon"></i>
                      </button>
                      <button
                        className="action-button"
                        onClick={() => {
                          handleDeleteExpense(data);
                        }}
                      >
                        <i className="fi-sr-trash  delete-icon"></i>
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="empty-table">
                <img
                  src="https://cdni.iconscout.com/illustration/premium/thumb/searching-in-box-3428236-2902705.png"
                  className="empty-image"
                  alt="Table Empty"
                />
                <p>
                  Uh Oh! Looks like the table is empty. Change your search
                  filters or maybe we don't have such an expense :(
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="expenses-modal">
        {showModal ? (
          <Modal
            show={showModal}
            handleCloseBtn={hideModal}
            details={editDetails}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ExpenseTable;

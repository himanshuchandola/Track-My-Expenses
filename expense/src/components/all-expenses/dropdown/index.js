import React from "react";
import { useState } from "react";
import "./dropdown.css";

const Dropdown = ({ options, onSelect, toShow }) => {
  const [open, setOpen] = useState(false);
  const changeHandler = () => {
    setOpen(!open);
  };
  const handleOptionClick = (item) => {
    setOpen(!open);
    onSelect(item);
  };
  return (
    <div className="topic-dropdown">
      <div className="current-topic">
        <div className="main-topic">{toShow}</div>
        <div className="down-arrow" onClick={changeHandler} role="presentation">
          {open ? (
            <i className="fi-rr-angle-up"></i>
          ) : (
            <i className="fi-rr-angle-down"></i>
          )}
        </div>
      </div>
      {open ? (
        <div className="topic-list">
          {options.map(({ types }) => {
            return (
              <div className="topic-list-item">
                <div className="sub-topic-list">
                  {types.map((item) => {
                    return (
                      <div
                        className="sub-topic-item"
                        onClick={() => handleOptionClick(item)}
                        role="presentation"
                      >
                        {item}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;

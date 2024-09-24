import React, { useState, useRef, useEffect } from "react";
import "./Header.css";


const Header = ({ onUserClick, onPriorityClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


// const Header = ({ grouping, sorting, onGroupingChange, onSortingChange }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const toggleDropdown = () => setIsOpen(!isOpen);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);


  return (
    <header className="header">
      <div className="button-container">
        <button onClick={onUserClick} className="header-button">
          User
        </button>
        <button onClick={onPriorityClick} className="header-button">
          Priority
        </button>
      </div>
      <div className="display-button" ref={dropdownRef}>
        <div className="display-button-content" onClick={toggleDropdown}>
          <span>Options</span>
          <img
            src="https://cdn.icon-icons.com/icons2/3257/PNG/96/arrow_drop_down_icon_206159.png"
            alt="Dropdown"
            className="display-icon"
            style={{ width: "14px", height: "14px" }}
          />
        </div>
        {isOpen && (
          <div className="dropdown">
            <div className="dropdown-item">
              <span>Grouping</span>
              <select>
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            <div className="dropdown-item">
              <span>Ordering</span>
              <select>
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
 
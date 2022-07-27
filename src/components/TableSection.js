import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../tableSection.scss";
import CheckBox from "./CheckBox";
import { usersChecked } from "../store/todoSlice";

const TableSection = () => {
  const data = useSelector((state) => state.todos.usersChoice);
  const dispatch = useDispatch();
  return (
    <div className="table">
      <ul className="table__header">
        <li className="table__header-item">#</li>
        <li className="table__header-item">alpha</li>
        <li className="table__header-item">country</li>
        <li className="table__header-item">domains</li>
        <li className="table__header-item">name</li>
        <li className="table__header-item">state-province</li>
        <li className="table__header-item">web_pages</li>
        <li className="table__header-item">choose</li>
      </ul>
      {data.map((item, index) => {
        return (
          <ul key={index} className="table__content">
            <li className="table__content-item">{index}</li>
            <li className="table__content-item">{item.alpha_two_code}</li>
            <li className="table__content-item">{item.country}</li>
            <li className="table__content-item">
              {item.domains.map((item, index) => item)}
            </li>
            <li className="table__content-item">{item.name}</li>
            <li className="table__content-item">{item["state-province"]}</li>
            <li className="table__content-item">
              {item.web_pages.map((item, index) => (
                <a key={index} href={item.web_pages} target="blank">
                  {item}
                </a>
              ))}
            </li>
            <li className="table__content-item">
              <CheckBox
                color="#376b8d"
                checked={item.checked}
                handleChange={() => dispatch(usersChecked(item.id))}
              />
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default TableSection;

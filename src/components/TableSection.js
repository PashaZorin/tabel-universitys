import React from "react";
import { useSelector } from "react-redux";
import "../tableSection.scss";

const TableSection = () => {
  const data = useSelector((state) => state.todos.usersChoice);
  console.log(data, "data");
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
        <li className="table__header-item">доб</li>
      </ul>
      {data.map((item, index) => {
        return (
          <ul key={index} className="table__content">
            <li className="table__content-item">{index}</li>
            <li className="table__content-item">{item.alpha_two_code}</li>
            <li className="table__content-item">{item.country}</li>
            <li className="table__content-item">{item.domains}</li>
            <li className="table__content-item">{item.name}</li>
            <li className="table__content-item">{item["state-province"]}</li>
            <li className="table__content-item">
              <a href={item.web_pages} target="blank">
                {item.web_pages}
              </a>
            </li>
            <li className="table__content-item">{item.доб}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default TableSection;

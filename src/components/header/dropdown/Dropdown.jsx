import React from "react";
import { Link } from "react-router-dom";
import { DropdownItems } from "./dropdownItem";
import "./dropdown.css";

export default function Dropdown() {
  return (
    <div>
      <ul className="categoriessub">
        {DropdownItems.map((item) => {
          return (
            <li key={item.id} className="catgitems">
              <Link to={item.path} className={item.cName}>
                <h5>{item.title}</h5>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

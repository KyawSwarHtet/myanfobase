import React from "react";
import Select from "react-select";
import "./language.css";

const options = [
  {
    label: <img src="./images/homeimgs/englang.jpg" />,
    english: "english",
    value: "english",
  },
  {
    label: <img src="./images/homeimgs/myanmarlang.jpg" />,
    english: "myanmar",
    value: "myanmar",
  },
];

export default function Language() {
  return (
    <div>
      <Select options={options} defaultValue={options[0]} />
    </div>
  );
}

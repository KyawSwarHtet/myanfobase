import React from "react";
import { useState } from "react";
import DropdownCate from "./DropdownCate";
import "./postform.css";

export default function Postform() {
  const [selected, setSelected] = useState("Choose One");
  return (
    <>
      <section className="postbg">
        <div className="container">
          <h2 className="capitalize">
            Let's share your experience and knowledge on our website!
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            corporis consequuntur harum ab minima et, necessitatibus sit
            blanditiis a at tempore unde eius minus veritatis odit aliquid
            consequatur accusantium eum.
          </p>
        </div>
      </section>
      <div className="container">
        <DropdownCate selected={selected} setSelected={setSelected} />
        <div className="formDiv">
          <form className="postForm">
            <textarea
              className="titleArea"
              placeholder="Type title here..."
            ></textarea>

            <textarea
              className="descArea"
              placeholder="Description here..."
              required
            ></textarea>
          </form>
        </div>
      </div>
    </>
  );
}

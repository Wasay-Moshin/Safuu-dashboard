import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
function Base(props) {
  return (
    <div>

      <Header />
      <div ps={["unset", "unset", "4"]} display="flex">
        <Sidebar />
        <div
          as="main"
          w={["full", "full", "cal(100%-250px"]}
          role="main"
          p={4}
          className="main"
        >
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Base;

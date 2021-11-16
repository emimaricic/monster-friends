import React from "react";

const Scroll = (props) => {
  return <div style={{ position: "sticky" }}>{props.children}</div>;
};

export default Scroll;

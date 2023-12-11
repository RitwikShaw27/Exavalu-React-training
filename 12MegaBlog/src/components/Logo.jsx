import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Logo({ width = "100px" }) {
  return (
    <div>
      {" "}
      <img src="/blog-solid.svg" alt="Logo" style={{ width: "35px" }} />
    </div>
  );
}

export default Logo;

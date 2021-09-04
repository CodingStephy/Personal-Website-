import React from "react";

const Loader = () => {
  return (
    <div
      style={{ height: `100vh` }}
      className="loader_wrapper position-relative"
    >
      <div class="loader">
        {`Welcome to my page`.split("").map((e, i) => (
          <span className="outer_welcome" style={{ "--i": i }}>
            <span className="inner_welcome">{e === " " ? <>&nbsp;</> : e}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Loader;

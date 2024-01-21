import React from "react";

const HamburgerMenu = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      style={{
        pointerEvents: "none",
        display: "block",
        width: "25px",
      }}
    >
      <path
        d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 L 0 7.5 z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 L 0 22.5 z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 L 0 37.5 z"
        fillRule="#000000"
      />
    </svg>
  );
};

export default HamburgerMenu;

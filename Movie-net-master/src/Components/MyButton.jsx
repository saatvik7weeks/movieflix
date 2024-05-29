import React from "react";

export default function MyButton({text , flag , handleClick}) {
  return (
    <button
      style={{
        borderBottom:
          flag == text ? `3px solid var(--glow-green)` : null,
        color: flag == text ? `var(--glow-green)` : "white",
      }}
      onClick={() => handleClick(text)}
    >
      <li>{text}</li>
    </button>
  );
}

import React from "react";

export default function NameAndPriceBlock() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        height: "60px",
        textAlign: "center",
        backgroundColor: "#d4af37",
        color: "white",
        paddingTop: "15px",
        borderRadius: "5px",
      }}
    >
      <h2>MONCLER DIVING WATCH</h2>
      <h2>£2000</h2>
    </div>
  );
}

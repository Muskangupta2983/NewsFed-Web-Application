import React from "react";

export default function Spinner() {
  return (
    <div align="center" className="my-2">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden"></span>
      </div>
    </div>
  );
}

import React from "react";

function Main() {
  console.log(window.location.href);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "40vh",
        }}
      >
        <div style={{ fontSize: "30px" }}>
          Добро пожаловать, для использованя войдите или зарегистрируйтесь
        </div>
      </div>
    </>
  );
}

export default Main;

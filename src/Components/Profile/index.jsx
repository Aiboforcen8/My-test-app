import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";

function Profile() {
  const navigate = useNavigate();
  const session = useSelector((state) => state.session.session);
  const { isAuth } = useContext(AuthContext);

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth, navigate]);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "40vh",
        }}
      >
        {isAuth && (
          <div style={{ fontSize: "30px" }}>
            Добро пожаловать, {session?.login}
          </div>
        )}
      </div>
    </>
  );
}

export default Profile;

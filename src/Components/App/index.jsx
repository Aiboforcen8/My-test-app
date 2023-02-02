import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";

import Navbar from "../Navbar";
import Profile from "../Profile";
import Registration from "../Registration";
import Login from "../Login";
import Main from "../Main";
import data from "../../users/users.json";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllUsersAc } from "../../redux/actionCreators/usersAC";
import { checkSessionAC } from "../../redux/actionCreators/sessionAC";

function App() {
  const dispatch = useDispatch();
  const [isAuth, setIsAuth] = useState(false);
  const login = localStorage.getItem("login");

  useEffect(() => {
    dispatch(getAllUsersAc(data));

    if (login) {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      dispatch(checkSessionAC(login));
    }
  }, [dispatch, isAuth, login]);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="registration" element={<Registration />}></Route>
          <Route path="login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../Navbar";
import Profile from "../Profile";
import Registration from "../Registration";
import Login from "../Login";
// import data from "../../users/users.json";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"></Route>
        <Route path="profile" element={<Profile />}></Route>
        <Route path="registration" element={<Registration />}></Route>
        <Route path="login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

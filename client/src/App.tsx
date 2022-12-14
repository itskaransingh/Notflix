import { useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Home from "./container/Home";
import Signin from "./container/Signin";
import Signup from "./container/Signup";

function App() {
  const navigate = useNavigate()
  const [loggedIn, setloggedIn] = useState(false);

useEffect(() => {
  console.log(localStorage.getItem('accesstoken') )
localStorage.getItem('accesstoken')?setloggedIn(true):setloggedIn(false)
}, [])


  return (
    <div className="App  box-border">
      <Routes>
        <Route
          path="/"
          element={loggedIn ? <Home /> :  navigate("/signup",{replace:true}) }
        ></Route>
        <Route path="/login" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;

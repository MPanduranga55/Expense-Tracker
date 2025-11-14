import React from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom"
import Login from "./pages/Auth/Login"
import SignUp from './pages/Auth/SignUp';
import Home from './pages/Dashboard/Home';
import Expense from './pages/Dashboard/Expense';
import Income from './pages/Dashboard/Income';
import UserProvider from './context/UserContext';
import {Toaster} from "react-hot-toast";
const App = () => {
  return (
    <UserProvider>
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Root/>}/>
          <Route path="/login" exact element={<Login />}/>
          <Route path="/signUp" exact element={<SignUp />}/>
          <Route path="/dashboard" exact element={<Home />}/>
          <Route path="/expense" exact element={<Expense/>}/>
          <Route path="/income" exact element={<Income />}/>
        </Routes>
      </Router>
      </div>
      <Toaster
        toastOptions={{
          className:"",
          style:{
            fontSize:'13px'
          },
        }}
      />
    </UserProvider>
  );
}


export default App;
const Root = ()=>{
  const isAuthicated = !!localStorage.getItem("token");
  return isAuthicated ? (<Navigate to="/dashboard"/>) : (<Navigate to="/login"/>)
}
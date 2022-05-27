import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Authentication/Login";
import RequireAuth from "./Components/Authentication/RequareAuth";
import Signup from "./Components/Authentication/Signup";
import AllTools from "./Components/Genarel/AllTools";
import Dashboard from "./Components/Genarel/Dashboard/Dashboard";
import Home from "./Components/Genarel/Home/Home";
import Chackout from "./Components/Genarel/Others/Chackout";
import Footer from "./Components/Genarel/Shared/Footer";
import Nav from "./Components/Genarel/Shared/Nav";

function App() {
  return (
    <div>
      <Nav></Nav>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/alltools" element={<AllTools></AllTools>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/checkout/:id" element={
          <RequireAuth>
            <Chackout></Chackout>
          </RequireAuth>
        }></Route>
        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

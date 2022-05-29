import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Authentication/Login";
import RequireAuth from "./Components/Authentication/RequareAuth";
import Signup from "./Components/Authentication/Signup";
import ForgotPass from "./Components/Authentication/ForgotPass";
import AllTools from "./Components/Genarel/AllTools";
import Dashboard from "./Components/Genarel/Dashboard/Dashboard";
import PostReview from "./Components/Genarel/Dashboard/PostReview";
import MyProfile from "./Components/Genarel/Dashboard/MyProfile";
import Home from "./Components/Genarel/Home/Home";
import Chackout from "./Components/Genarel/Others/Chackout";
import Footer from "./Components/Genarel/Shared/Footer";
import Nav from "./Components/Genarel/Shared/Nav";
import AllReview from "./Components/Genarel/AllReview";
import MyOrder from "./Components/Genarel/Dashboard/MyOrder";
import MakeAdmin from "./Components/Genarel/Dashboard/Admin/MakeAdmin";
import UpdateProfile from "./Components/Genarel/Dashboard/UpdateProfile";

function App() {
  return (
    <div>
      <Nav></Nav>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/alltools" element={<AllTools></AllTools>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/reviews" element={<AllReview></AllReview>}></Route>
        <Route path="/forgotpassword" element={<ForgotPass></ForgotPass>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route
          path="/checkout/:id"
          element={
            <RequireAuth>
              <Chackout></Chackout>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="makeadmin" element={<MakeAdmin></MakeAdmin>}></Route>
          <Route path="updateprofile" element={<UpdateProfile></UpdateProfile>}></Route>
          <Route path="postreview" element={<PostReview></PostReview>}></Route>
          <Route path="myorder" element={<MyOrder></MyOrder>}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

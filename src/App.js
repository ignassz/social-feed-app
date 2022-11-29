import logo from "./logo.svg";
import "./App.css";

import { Routes, Route, Outlet, Link } from "react-router-dom";

import NavBar from "./components/navbar/NavBar";
import SignIn from "./components/signin/SignIn";
import SignUp from "./components/signup/SignUp";
import PostCard from "./components/feed/PostCard";
import AddForm from "./components/addform/AddForm";
import FollowList from "./components/followlist/FollowList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<div />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="feed" element={<PostCard />} />
        <Route path="addform" element={<AddForm />} />
        <Route path="following" element={<FollowList />} />
      </Route>
    </Routes>
  );
}

export default App;

import React, { useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import App from "./App";
import About from "./about";
import Contact from "./contact";
import Demo from "./demo";
import Input from "./input/input";
import Todolist from "./todolist";
import Counter from "./counter";
import Button from "./button";
import Popup from "./components/popup";
import Gallery from "./gallery";
import Api from "./apiHandling";
import Tabs from "./tabs";
import Handleinput from "./inputCase";
import Test from "./test";
import ApiTest from "./apiTest";
import Local from "./local";
import PersonalInfo from "./personalInfo";
import Methods from "./methods";
import Task from "./task1";
import Todo from "./todo";
import Task3 from "./task3";
import Authentication from "./authentication/authentication";
import Page1 from "./authentication/page1";
import Page2 from "./authentication/page2";
import NotFound from "./authentication/notFound";
import Duplicates from "./duplicates";
import Forloop from "./forloop";
import ArrayMthod from "./arraymethod";

export default function RoutePath() {
  const role = localStorage.getItem("Role");
  const isLogedin = localStorage.getItem("UID");
  const location = useLocation();

  return (
    <Routes>
      <Route path="/" element={<App />} strict exact />
      <Route path="/about" element={<About />} strict exact />
      <Route path="/contact" element={<Contact />} strict exact />
      <Route path="/demo" element={<Demo />} strict exact />
      <Route path="/input" element={<Input />} strict exact />
      <Route path="/todolist" element={<Todolist />} strict exact />
      <Route path="/counter" element={<Counter />} strict exact />
      <Route path="/button" element={<Button />} strict exact />
      <Route path="/gallery" element={<Gallery />} strict exact />
      <Route path="/apihandling" element={<Api />} strict exact />
      <Route path="/tabs" element={<Tabs />} strict exact />
      <Route path="/newinput" element={<Handleinput />} strict exact />
      <Route path="/test" element={<Test />} strict exact />
      <Route path="/testapi" element={<ApiTest />} strict exact />
      <Route path="/local" element={<Local />} strict exact />
      <Route path="/personalinfo" element={<PersonalInfo />} strict exact />
      <Route path="/method" element={<Methods />} strict exact />
      <Route path="/task" element={<Task />} strict exact />
      <Route path="/todolist2" element={<Todo />} strict exact />
      <Route path="/task3" element={<Task3 />} strict exact />
      <Route path="/duplicates" element={<Duplicates />} strict exact />
      <Route path="/forloop" element={<Forloop />} strict exact />
      <Route path="/arraymethod" element={<ArrayMthod />} strict exact />

      {isLogedin && (
        <>
          {role === "user" ? (
            <Route
              path="/authentication/page1"
              element={<Page1 />}
              strict
              exact
            />
          ) : role === "admin" ? (
            <>
              <Route
                path="/authentication/page2"
                element={<Page2 />}
                strict
                exact
              />
              <Route
                path="/authentication/page1"
                element={<Page1 />}
                strict
                exact
              />
            </>
          ) : null}
        </>
      )}
      <Route path="/authentication" element={<Authentication />} strict exact />

      <Route path="*" element={<NotFound />} strict exact />
    </Routes>
  );
}

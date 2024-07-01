import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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

export default function RoutePath() {
  return (
    <BrowserRouter>
    
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

        
        
      </Routes>
    </BrowserRouter>
  );
}

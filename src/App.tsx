import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Menu} from "./Components";
import {Telo} from "./Components";
import {Noga} from "./Components";

function App() {
  return (
    <div>
      <Menu teamName={"MAJKA F.C."}/>
      <Telo/>
      <Noga izpis={"MIHAJLOOOOOOOOOOOOOOO!!!!! NOGA"}/>
    </div>
  );
}

export default App;

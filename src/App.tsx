import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import './style/App.scss';

function App() {
  return (
    <BrowserRouter>
        <NavBar/>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;

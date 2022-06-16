import React, {FC, useEffect, useState} from 'react';
import './App.css';
import ButtonTextProps from "./Buttons/ButtonTextProps";
import ButtonTextState from "./Buttons/ButtonTextState";
import Counter from "./Counter/Counter";
import {BrowserRouter} from "react-router-dom";
import AppRoutes from "./AppRoutes";
import NavBar from './NavBar';
import Context from './context/context';

const App: FC = () => {
  //const [text, setText] = useState('Hi! Click me');
    const[isAuth, setIsAuth] = useState(false);
    const token = localStorage.getItem('token');
    useEffect(() => {
        if (token) {
            setIsAuth(true);
        }
    },[]);

    return (
    // <div className="App container">
    //     <h1 className="mt-5">React APP</h1>
    //     <ButtonTextProps text={ text } setText = { setText } />
    //     <ButtonTextState/>
    //     <Counter />
    //     <UsersList />
    //
    // </div>
      <Context.Provider value={{isAuth, setIsAuth}}>
        <div className="App">
          <BrowserRouter>
              <NavBar />
              <AppRoutes />
          </BrowserRouter>
        </div>
      </Context.Provider>
  );
};

export default App;

import React, {FC} from 'react';
import './App.css';
import ButtonTextProps from "./Buttons/ButtonTextProps";
import ButtonTextState from "./Buttons/ButtonTextState";
import Counter from "./Counter/Counter";
import {BrowserRouter} from "react-router-dom";
import AppRoutes from "./AppRoutes";
import NavBar from './NavBar';

const App: FC = () => {
  //const [text, setText] = useState('Hi! Click me');
  return (
    // <div className="App container">
    //     <h1 className="mt-5">React APP</h1>
    //     <ButtonTextProps text={ text } setText = { setText } />
    //     <ButtonTextState/>
    //     <Counter />
    //     <UsersList />
    //
    // </div>
      <div className="App">
          <BrowserRouter>
              <NavBar />
              <AppRoutes />
          </BrowserRouter>
      </div>
  );
};

export default App;

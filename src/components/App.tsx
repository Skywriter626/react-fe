import React, { FC } from 'react';
import './App.css';
import ButtonTextProps from "./Buttons/ButtonTextProps";
import Counter from "./Counter/Counter";
import UsersList from "./Users/UsersList";


const App: FC = () => {
  return (
    <div className="App container">
        <h1 className="mt-5">React APP</h1>
        <ButtonTextProps text={'Hi! Click me'}/>
        <Counter />
        <UsersList />
    </div>
  );
}

export default App;

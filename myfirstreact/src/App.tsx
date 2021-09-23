import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ControlPanel } from './components/ControlPanel'

function App(): JSX.Element {
  return (
    <div className="App">
      IDEA: Functional components return JSX Elements
      import FILENAME from './address'
      json.stringify(FILENAME) allows you to view your json data as a string, is helpful for making sure that things loaded ok
      you can create types with `export type TypeName = 'value1' | 'value2' | etc.`
      With export enum, we can give each the possible values more specific info
      Functional components are (by convention) held in their own files that share the component's name 
      'Export' keyword is used for functions that must be used elsewhere
      React has a command to run in order to use bootstrap, bootstrap folder must have a stylesheet

      <ControlPanel></ControlPanel>
    
    </div>
  );
}

export default App;

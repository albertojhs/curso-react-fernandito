import React from 'react';
import ReactDOM from 'react-dom/client';

import './08-useReducer/intro-reducer';
import { MainApp } from './09-useContext/MainApp';
import { BrowserRouter } from 'react-router-dom';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MainApp />
  </BrowserRouter>
  //  <React.StrictMode>
  //   <HooksApp />
  //   <CounterConCustomHook />
  //   <SimpleForm />
  //   <FormWithCustomHook />
  //   <MultipleCustomHooks />
  //   <FocusScreen />
  //   <Layout />
  //   <Memorize />
  //   <MemoHook />
  //   <CallbackHook />
  //   <Padre />
  // </React.StrictMode>,
    // <TodoApp />
)

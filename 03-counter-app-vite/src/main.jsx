import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles.css';
import { CounterApp } from './CounterApp';


ReactDOM.createRoot( document.getElementById('root') ).render(
    <CounterApp value={27}/>
);
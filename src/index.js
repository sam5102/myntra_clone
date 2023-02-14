import React from 'react';
import ReactDOM from 'react-dom/client'
import Routing from './components/Routing';

//ReactDOM.render(<App />, document.getElementById('root'));
const container = document.getElementById('root')
const root = ReactDOM.createRoot(container);
root.render(<Routing />);
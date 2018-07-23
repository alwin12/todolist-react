import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div className='center '><div className='startDiv'><App className/></div></div>, document.getElementById('root'));
registerServiceWorker();

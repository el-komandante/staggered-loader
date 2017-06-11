import React from 'react';
import ReactDOM from 'react-dom';
import StaggeredLoader from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<StaggeredLoader numBars={ 10 } />, document.getElementById('root'));
registerServiceWorker();

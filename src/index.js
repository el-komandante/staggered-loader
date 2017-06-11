import React from 'react';
import ReactDOM from 'react-dom';
import StaggeredLoader from './StaggeredLoader';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<StaggeredLoader color={ 'red' } numBars={ 16 } />, document.getElementById('root'));
registerServiceWorker();

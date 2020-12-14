import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Context API
import { StateProvider } from './contextAPI/StateProvider';
import reducer, { initialState } from './contextAPI/reducer';

ReactDOM.render(
    <React.StrictMode>
        <StateProvider initialState={initialState} reducer={reducer}>
            <App />
            <ToastContainer />
        </StateProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

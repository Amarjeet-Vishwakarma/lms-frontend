import './index.css';

// import { createRoot } from 'react-dom/client'
import ReactDom from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import {BrouserRouter} from 'react-router-dom';

import App from './App.jsx';
import store from './Redux/store';

ReactDom.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrouserRouter>
            <App />
            <Toaster />
        </BrouserRouter>
    </Provider>
);



import './index.css';

// import { createRoot } from 'react-dom/client'
import ReactDom from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import {BrouserRouter} from 'react-router-dom';

import App from './App.jsx';

ReactDom.createRoot(document.getElementById('root')).render(
    <BrouserRouter>
        <App />
        <Toaster />
    </BrouserRouter>
)



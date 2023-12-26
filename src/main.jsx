import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import MassageContext from "./contextStorage/MassageContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(

    <MassageContext>
        <App />
    </MassageContext>

)

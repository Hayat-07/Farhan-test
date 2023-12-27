import React, {useContext} from 'react';
import "./App.scss";
import Projector from "./components/Projector.jsx";
import {mContext} from "./contextStorage/MassageContext.jsx";


const App = () => {
    const {handleView,archivedMassages, setArchivedMassages, massages , modal,setMassages , setModal  }=useContext( mContext);

    return (
        <div id="body">
            <div id="firstColumn">
                <div ><h3 onClick={(e)=>{handleView(true)}}>Inbox <span>{massages.length}</span></h3></div>
                <div><h3 onClick={(e)=>{handleView(false)}}>Archive <span>{archivedMassages.length}</span></h3></div>
            </div>
            <div id="secondColumn">
                
                <Projector></Projector>

            </div>

        </div>
    )
};

export default App;
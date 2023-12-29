import React, {useContext} from 'react';
import './modalPage.scss';
import {mContext} from "../contextStorage/MassageContext.jsx";


const ModalPage = ({modalData}) =>{
    const {modal, setModal,seenMassage,markAsRead, sendToArchive,checkAll,count }= useContext( mContext);

    let m={...modalData};
    console.log(m);







    return (
        <div id="modalPage">


                <div id="actionBar">
                    <div>
                        <h3 >X Close (ESC) </h3>
                    </div>
                    <div id="actionBtn">
                        
                        <h3  onClick={(e)=>{markAsRead()}}>Mark as read (R) <span><h3>{seenMassage}</h3></span></h3>
                        <h3  onClick={(e)=>{sendToArchive(e)}}>Archive (A)</h3>
                
                    </div>
                </div>



           <div>
           <h4>ID: {m.Id}</h4>
            <h4>status: {JSON.stringify(m.status)}</h4>
            <h4>Checked: {JSON.stringify(m.checked)}</h4>
            <h3>{m.body}</h3>
            <h5>{m.massage}</h5>

           </div>
        </div>
    );
};

export default ModalPage;
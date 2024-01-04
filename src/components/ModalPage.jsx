import {useContext} from 'react';
import './modalPage.scss';
import {mContext} from "../contextStorage/MassageContext.jsx";
import {LuMailOpen} from "react-icons/lu";


const ModalPage = () =>{
    const {markAsRead,setModal,sendToArchive,modalData}= useContext( mContext);
    let m={...modalData};


    
    return (
        <div id="modalPage">
            <div id="blackPage" onClick={()=>{setModal(false)}}>
            </div>
            <div id='modalDiv'>
                <div id="actionBar">
                    <div>
                        <h3>X Close (ESC) </h3>
                    </div>
                    <div id="actionBtn">

                        <h3 onClick={markAsRead}><span><LuMailOpen /></span><span>Mark as read (R)</span> </h3>
                        <h3 onClick={(e) => { sendToArchive(e)}}>Archive (A)</h3>

                    </div>
                </div>


                <div>
                    <h4>ID: {m.Id}</h4>
                    <h3>{m.body}</h3>
                    <h5>{m.massage}</h5>
                </div>
            </div>


        </div>
    );
};

export default ModalPage;
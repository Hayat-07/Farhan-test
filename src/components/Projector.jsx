import React, {useContext, useEffect, useRef, useState} from 'react';
import './projector.scss';

import ModalPage from "./ModalPage.jsx";
import {mContext} from "../contextStorage/MassageContext.jsx";
import { LuMailOpen } from "react-icons/lu";


const Projector = () => {

    const {seenMassage,markAsRead,view, sendToArchive,checkAll,checkedAll,setChange,change,count, archivedMassages,massages , modal,setMassages , setModal,modalData, setModalData  }= useContext( mContext);
    const Mbox= useRef();


    const handleCheck =(e,m,i)=>{
       let newMassages =[...massages]
        let ob = newMassages[i];
        ob.checked= !(ob.checked);
        newMassages[i]= ob
        setMassages(newMassages);

    }



    
    const handleMassage =(e,m,i,modalData)=> {
      let ob = massages[i];
        ob.status = true;
        let copyArrayOfObject = [...massages];
        copyArrayOfObject[i]=ob;
        setMassages(copyArrayOfObject);
        setModal(!modal);
        setModalData(m);

    }






        console.log(massages);




    return (
        <div id="projector">
            <div id="actionBar">
                <div>
                    <input type="checkbox" onClick={checkAll}/>
                    <h3>Email selected </h3><span><h3>{count.length}</h3></span>
                </div>
                <div id="actionBtn">
                    <h3 onClick={(e)=>{markAsRead()}}> <span><LuMailOpen /></span>Mark as read (r) <span>{seenMassage}</span></h3>
                    <h3 onClick={(e)=>{sendToArchive(e)}}>Archive (a)</h3>
                </div>
            </div>


                <div id="mDiv">
                    {
                            (view?massages:archivedMassages).map((m,i)=>{
                                const newM =m.body.substring(0,15);
                                let bgColor = "white";
                                const markAsRead= (m.status === true);
                                markAsRead && (bgColor= "#F3F6FB");
                                return (

                                    <div id="mBox" key={i} ref={Mbox} style={{backgroundColor:bgColor}} >
                                        <input name="allSelectBox" type="checkbox" checked={checkedAll ?checkedAll:(m.checked)} onChange={(e)=> {handleCheck(e,m,i)}} />
                                        
                                        <div onClick={(e)=> {
                                            
                                            handleMassage(e,m,i,modalData);
                                            setChange(!change);
                                            }}>
                                            <h3>{m.Id}</h3>
                                            <h3>{newM}.....</h3>
                                       
                                        </div>
                                    </div>

                                )
                            })
                        
                        }

                </div>



               

             </div>
             
             )


            }                   

export default Projector;
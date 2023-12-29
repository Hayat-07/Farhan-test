import React, {useContext, useEffect, useRef, useState} from 'react';
import './projector.scss';

import ModalPage from "./ModalPage.jsx";
import {mContext} from "../contextStorage/MassageContext.jsx";


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
                    <h3 onClick={(e)=>{markAsRead()}}>Mark as read <span><h3>{seenMassage}</h3></span></h3>
                    <h3 onClick={(e)=>{sendToArchive(e)}}>Archive</h3>
                </div>
            </div>


                <div id="mDiv">
                    {
                            (view?massages:archivedMassages).map((m,i)=>{
                                const newM =m.body.substring(0,10);
                                let bgColor = "white";
                                const markAsRead= (m.status === true);
                                markAsRead && {
                                    
                                };
                                return (

                                    <div id="mBox" key={i} ref={Mbox} style={{backgroundColor:bgColor}} >
                                        <input type="checkbox" checked={checkedAll ?checkedAll:(m.checked)} onChange={(e)=> {handleCheck(e,m,i)}}/>
                                        
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



               
                       {
                        modal && <ModalPage modalData={modalData}></ModalPage>
                       }
             </div>
             
             )


            }                   

export default Projector;
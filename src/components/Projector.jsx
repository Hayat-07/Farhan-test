import React, {useContext, useState} from 'react';
import './projector.scss';
import {mContext} from "../contextStorage/MassageContext.jsx";
import ModalPage from "./ModalPage.jsx";

const Projector = () => {
    const [ checkedAll,setCheckedAll]=useState(false);
    const {count,setCount, archivedMassages, setArchivedMassages,massages , modal,setMassages , setModal  }=useContext( mContext);
   // console.log(massages);





    const handleCheck =(e,m,i)=>{
        // e.preventDefault();
        // console.log(e.target.checked);
        const ob = massages[i];

        ob.checked = !(ob.checked);
        const copyArrayOfObject = [...massages];
        copyArrayOfObject[i]=ob
        console.log(copyArrayOfObject);
        setMassages(copyArrayOfObject);

    }



    const handleMassage =(e,m,i)=> {
        console.log(e.target.checked);
        const ob = massages[i];
        ob.status = true;
        const copyArrayOfObject = [...massages];
        console.log(copyArrayOfObject);
        setMassages(copyArrayOfObject);
        setModal(!modal);
        // console.log(newArrayOfObject);
    }



        const checkedCount= ()=>{
        };
        checkedCount();

    const arrayOfChecked= massages.map((x)=>{
        if((x.checked) === true){ setCount(count+1);}
    });
    let checkAll=(e)=>{
        ( e.target.checked === true)?setCheckedAll(true):setCheckedAll(false);

    }
        console.log(count);


    return (
        <div id="projector">
            <div id="actionBar">
                <div>
                    <input type="checkbox" onClick={checkAll}/>
                    <h3>Email selected </h3><span><h3>{count}</h3></span>
                </div>
                <div id="actionBtn">
                    <h4>Mark as read</h4>
                    <h4>Archive</h4>
                </div>
            </div>

               <div id="mDiv">
                   {
                       massages.map((m,i)=>{
                           const newM =m.body.substring(0,10);
                           let bgColor = "white";
                           const markAsRead= (m.status === true);
                           markAsRead && (bgColor= "slateblue")
                           return (

                               <div id="mBox" key={i} style={{backgroundColor: bgColor}} >
                                   <input type="checkbox" checked={checkedAll ?checkedAll:(m.checked)} onChange={(e)=> {handleCheck(e,m,i)}}/>
                                   <h3>{m.Id}</h3>
                                   <h6>{m.status}</h6>
                                 <div onClick={(e)=> {handleMassage(e,m,i)}}>
                                     <h3  >{newM}.....</h3>
                                 </div>
                               </div>
                           )
                       })
                   }
               </div>


        </div>
    );
};

export default Projector;
import  {useContext,useEffect, useRef} from 'react';
import './projector.scss';
import {mContext} from "../contextStorage/MassageContext.jsx";
import { LuMailOpen } from "react-icons/lu";


const Projector = () => {

    const {allSelectedMassages, setAllSelectedMassages,setArchivedMassages,setCount,markAsRead,view,checkAll,checkedAll,setChange,change,count, archivedMassages,massages , modal,setMassages , setModal,modalData, setModalData  }= useContext( mContext);
    const Mbox= useRef();

    const handleCheckBox =(e,m,i)=>{

        let ind =massages.indexOf(m);
       let newMassages =[...massages];
        let ob = newMassages[i];
        ob.checked= !(ob.checked);
        console.log(ob);
        newMassages[ind]= ob;
        setMassages(newMassages);
    let x=[...allSelectedMassages];
    x.push(ob);
       setAllSelectedMassages(x);
    }



    //--------------------make status true of massage-------------------------------
    const handleSeen =(e,m,i,)=> {
      let ob = massages[i];
        ob.status = true;
        let copyArrayOfObject = [...massages];
        copyArrayOfObject[i]=ob;
        setMassages(copyArrayOfObject);
        setModalData(m);
        setModal(!modal);


    }

    let newArchivedMassages= [];
    //------------------sendToArchive handler -----------------------------------------------------------
    const sendToArchive=()=>{


      const checkedMassages=massages.filter((x)=>(x.checked === true));
      console.log(checkedMassages);
       if(checkedMassages.length>=1){
           setArchivedMassages([...archivedMassages,...checkedMassages]);
       }else {
           alert("No massage is selected!!!")
       }
        let m = [...massages];
        for(let x of checkedMassages) {
            m.splice((m.indexOf(x)),1);
        }
        setMassages(m);
        setCount([]);

    };

//------------------all keyboards button events handler are here--------------
useEffect(() => {
     document.addEventListener('keydown', detectKeyDown, true)
},[]);


const  detectKeyDown=(e)=>{

    if(e.key==="Escape"){
        setModal(false);
        console.log(e.key,"Esc consoled");
    }
    else if(e.key==="r"){
        markAsRead();
        console.log(e.key,"Marked successful");
    }
    else if(e.key==="a"){

        sendToArchive();

    }
}





    return (
        <div id="projector">
            <div id="actionBar">
                <div>
                    <input type="checkbox" onClick={checkAll}/>
                    <h3>Email selected </h3><span><h3>{count.length}</h3></span>
                </div>
                <div id="actionBtn">
                    <h3 onClick={()=>{markAsRead()}}> <span style={{margin:"10px"}}><LuMailOpen/></span>Mark as read (r) </h3>
                    <h3 onClick={()=>{sendToArchive()}}>Archive (a)</h3>
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
                                        <input name="allSelectBox" type="checkbox" checked={checkedAll ?checkedAll:(m.checked)} onChange={(e)=> {handleCheckBox(e,m,i)}} />
                                        
                                        <div onClick={(e)=> {
                                            setModalData(m);
                                            handleSeen(e,m,i,modalData);
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
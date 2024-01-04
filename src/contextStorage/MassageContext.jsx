import {createContext, useEffect, useState} from 'react';
export const mContext= createContext("");
import defaultMassage from "../assets/DataOfMassage.jsx";

const MassageContext = ({children}) => {

    const [massages, setMassages]= useState(defaultMassage);
    console.log(massages);
    const [archivedMassages, setArchivedMassages]= useState([]);
    const [allSelectedMassages, setAllSelectedMassages]= useState([]);
    const [ allSeenMassage,setAllSeenMassage]=useState([]);
    


    const [view, setView]= useState(true);
    const [change , setChange]=useState(true);
    const [modal, setModal]= useState(false);
    const [ checkedAll,setCheckedAll]=useState(false);



    const [modalData, setModalData]= useState({});
    const [count, setCount]= useState([]);
    const [ seenMassage,setSeenMassage]=useState(0);






//------------------check handler button --------------
    let checkAll=(e)=>{
        if( e.target.checked === true){
            setCheckedAll(true);
            setCount([...massages]);
           let newMassage=massages.map((x)=>{
            x.checked=true;
            return x;
           });
           console.log("newMassage",newMassage);
           setMassages(newMassage);
        }
        else{
            setCheckedAll(false)

            let newMassage=massages.map((x)=>{
                x.checked=false;
                return x;
               });
               console.log(newMassage);
               setMassages(newMassage);
            setChange(!change);
        }

    }


    
//------------------mark As Read handler on projector page--------------
        const markAsRead=()=>{
            const allCheckedMassage= massages.map((x)=>{
                (x.checked=== true) && (x.status=true );
                return x;
            });
            setMassages(allCheckedMassage);
            console.log(allCheckedMassage);
        };

    const handleView=(x)=>{
setView(x);
    };



//------------------automatic update Email selected count on projector page--------------
useEffect(() => {
    let newArr= [];
    massages.map((x)=> {
        (x.checked === true)&&(newArr.push(x));
        return newArr;
    });
        setCount(newArr);
}, [massages,change]);


    return (

         <mContext.Provider value={ {allSelectedMassages, setAllSelectedMassages,seenMassage,setSeenMassage,markAsRead,view, setView,handleView,checkAll, checkedAll,setCheckedAll, setChange,count,setCount,archivedMassages, setArchivedMassages,massages,setMassages , modal,setModal,modalData, setModalData } }>
             {children}
         </mContext.Provider>

    );
};

export default MassageContext;
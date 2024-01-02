import {createContext, useEffect, useState} from 'react';
export const mContext= createContext("");
import defaultMassage from "../assets/DataOfMassage.jsx";

const MassageContext = ({children}) => {

    const [massages, setMassages]= useState(defaultMassage);
    const [archivedMassages, setArchivedMassages]= useState([]);
    const [allSelectedMassages, setAllSelectedMassages]= useState([]);
    const [ allSeenMassage,setAllSeenMassage]=useState([]);
    


    const [view, setView]= useState(true);
    const [modal, setModal]= useState(false);
    const [modalData, setModalData]= useState({});
    const [count, setCount]= useState([]);
    const [change , setChange]=useState(true);
    const [ checkedAll,setCheckedAll]=useState(false);
    const [ seenMassage,setSeenMassage]=useState(0);



    useEffect(()=>{
        let allCheckedMassage= massages.filter((x)=>x.checked === true);
        setAllSelectedMassages(allCheckedMassage);
        let allSelectedMassages= massages.filter((x)=>x.status === true);
        setAllSeenMassage(allSelectedMassages);
  
    },[massages,change])




 




//------------------check handler battun --------------
    let checkAll=(e)=>{
        if( e.target.checked === true){
            setCheckedAll(true);
            setCount([...massages]);
           let newMassage=massages.map((x)=>{
            x.checked=true;
            return x;
           });
           console.log(newMassage);
           setMassages(newMassage);
        }
        else{
            setCheckedAll(false)
            setChange(!change);
            let newMassage=massages.map((x)=>{
                x.checked=false;
                return x;
               });
               console.log(newMassage);
               setMassages(newMassage);
        }
    }

//------------------msendToArchive handler --------------
    const sendToArchive=()=>{
        
     
     for(let x of allSelectedMassages) {
        console.log(massages.indexOf(x)); 
        massages.splice((massages.indexOf(x)),1);
         
     }
        setCount([]);
     setArchivedMassages([...archivedMassages,...allSelectedMassages]);

    };



    
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

         <mContext.Provider value={ {seenMassage,setSeenMassage,markAsRead,view, setView,handleView,sendToArchive,checkAll, checkedAll,setCheckedAll, setChange,count,setCount,archivedMassages, setArchivedMassages,massages,setMassages , modal,setModal,modalData, setModalData } }>
             {children}
         </mContext.Provider>

    );
};

export default MassageContext;
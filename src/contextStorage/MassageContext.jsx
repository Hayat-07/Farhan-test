import React, {createContext, useEffect, useState} from 'react';
export const mContext= createContext("");
import defaultMassage from "../assets/DataOfMassage.jsx";

const MassageContext = ({children}) => {

    const [massages, setMassages]= useState(defaultMassage);
    const [archivedMassages, setArchivedMassages]= useState([]);
    const [view, setView]= useState(true);
    const [modal, setModal]= useState(false);
    const [modalData, setModalData]= useState({});
    const [count, setCount]= useState([]);
    const [change , setChange]=useState(true);
    const [ checkedAll,setCheckedAll]=useState(false);
    const [ seenMassage,setSeenMassage]=useState(0);



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


    const sendToArchive=()=>{
     const allCheckedMassage= massages.filter((x)=>x.checked=== true);
     setArchivedMassages([...archivedMassages,...allCheckedMassage]);
     for(let x of allCheckedMassage) {
         console.log(massages.indexOf(x));
         massages.splice(massages.indexOf(x),1);
     }

    };

        const markAsRead=(e)=>{
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




    let m=0;
    useEffect(() => {
        for(let x of massages){
            if(x.status===true){m =m+1;}
        }
        setSeenMassage(m);
    }, [massages]);


    useEffect(() => {
        const stringOfArray=JSON.stringify(defaultMassage);
       localStorage.setItem("arrayOfMassage",stringOfArray);
    }, []);


    useEffect(() => {
        let newArr= [];
        const arrayOfCheckedMassages= massages.map((x)=> {
            (x.checked === true)&&(newArr.push(x));
            return newArr;
        });
            setCount(newArr);
    }, [massages,change]);

    useEffect(() => {
        document.addEventListener("keydown",detectKeyDown,true);
    }, []);
    const  detectKeyDown=(e)=>{

        if(e.key==="Escape"){
            setModal(false);
            console.log("Esc consoled");
        }
        else if(e.key==="r"){
            markAsRead();
            console.log("Marked successful");
        }
        else if(e.key==="a"){
            sendToArchive();
            setMassages([...massages]);

            console.log("Archived successful");
        }
    }

    return (

         <mContext.Provider value={ {seenMassage,setSeenMassage,markAsRead,view, setView,handleView,sendToArchive,checkAll, checkedAll,setCheckedAll, setChange,count,setCount,archivedMassages, setArchivedMassages,massages,setMassages , modal,setModal,modalData, setModalData } }>
             {children}
         </mContext.Provider>

    );
};

export default MassageContext;
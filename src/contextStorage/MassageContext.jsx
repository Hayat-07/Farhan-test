import React, {createContext, useEffect, useState} from 'react';
export const mContext= createContext("")
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

        }
        else{
            setCheckedAll(false)
            setChange(!change);
        }
    }

    const sendToArchive=(e)=>{
     const allCheckedMassage= massages.filter((x)=>x.checked=== true);
     setArchivedMassages([...archivedMassages,...allCheckedMassage]);
     for(let x of allCheckedMassage) {
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
        // console.log(arrayOfCheckedMassages);

            setCount(newArr);
        // console.log(massages);

    }, [massages,change]);



    return (

         <mContext.Provider value={ {seenMassage,setSeenMassage,markAsRead,view, setView,handleView,sendToArchive,checkAll, checkedAll,setCheckedAll, setChange,count,setCount,archivedMassages, setArchivedMassages,massages,setMassages , modal,setModal,modalData, setModalData } }>
             {children}
         </mContext.Provider>

    );
};

export default MassageContext;
import React, {createContext, useEffect, useState} from 'react';
export const mContext= createContext("")
const defaultMassage = [
    {
        Id:0,
        checked:false,
        status:false,
        body: " I got the massage1111"
    },{
        Id:1,
        checked:false,
        status:false,
        body: " I got the massage2222"
    },{
        Id:2,
        checked:false,
        status:false,
        body: " I got the massage33333"
    },{
        Id:3,
        checked:false,
        status:false,
        body: " I got the massage33333"
    },{
        Id:4,
        checked:false,
        status:false,
        body: " I got the massage33333"
    },{
        Id:5,
        checked:false,
        status:false,
        body: " I got the massage33333"
    },{
        Id:6,
        checked:false,
        status:false,
        body: " I got the massage33333"
    }
];

const MassageContext = ({children}) => {
    useEffect(() => {
        const stringOfArray=JSON.stringify(defaultMassage);
       localStorage.setItem("arrayOfMassage",stringOfArray);
    }, []);


    const [massages, setMassages]= useState(defaultMassage);
    const [archivedMassages, setArchivedMassages]= useState([]);
    const [modal, setModal]= useState(false);
    const [count, setCount]= useState(0);

    return (

         <mContext.Provider value={ { count,setCount,archivedMassages, setArchivedMassages,massages,setMassages , modal,setModal } }>
             {children}
         </mContext.Provider>

    );
};

export default MassageContext;
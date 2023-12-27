import React, {createContext, useEffect, useState} from 'react';
export const mContext= createContext("")
const defaultMassage = [
    {
        Id:0,
        checked:false,
        status:false,
        body: " I got the massage00000000000000000000000000000000000000"
    },{
        Id:1,
        checked:false,
        status:false,
        body: " I got the massage1111111111111111111111111111111111111"
    },{
        Id:2,
        checked:false,
        status:false,
        body: " I got the massage22222222222222222222222222222222222222"
    },{
        Id:3,
        checked:false,
        status:false,
        body: " I got the massage3333333333333333333333333333333333333333"
    },{
        Id:4,
        checked:false,
        status:false,
        body: " I got the massage4444444444444444444444444444444444444444"
    }
];

const MassageContext = ({children}) => {

    const [massages, setMassages]= useState(defaultMassage);
    const [archivedMassages, setArchivedMassages]= useState([]);
    const [modal, setModal]= useState(false);
    const [modalData, setModalData]= useState({});
    const [count, setCount]= useState([]);
    const [change , setChange]=useState(true);
    const [ checkedAll,setCheckedAll]=useState(false);


    let checkAll=(e)=>{
        if( e.target.checked === true){
            setCheckedAll(true)
            setCount([...massages]);}
        else{
            setCheckedAll(false)

            setChange(!change);

        }

    }

    const sendToArchive=(e)=>{

    };

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

         <mContext.Provider value={ {sendToArchive,checkAll, checkedAll,setCheckedAll, setChange,count,setCount,archivedMassages, setArchivedMassages,massages,setMassages , modal,setModal,modalData, setModalData } }>
             {children}
         </mContext.Provider>

    );
};

export default MassageContext;
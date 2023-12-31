import React, {useContext} from 'react';
import "./App.scss";
import Projector from "./components/Projector.jsx";
import {mContext} from "./contextStorage/MassageContext.jsx";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { FiInbox } from "react-icons/fi";
import { BsArchive } from "react-icons/bs";
import logo  from "./assets/Logo.svg";
import ModalPage from "./components/ModalPage.jsx";


const App = () => {
    const {modal,setModal,modalData,handleView,archivedMassages, massages,view }=useContext( mContext);



    let bgColorMain;
    let bgColorMain2;
    const bgColorChange=(e)=>{
        // console.log(e.target.innerText.includes("Inbox"));
        // console.log(e.target.innerText.includes("Archive"));
      if(e.target.innerText.includes("Inbox")){
          bgColorMain="#D6E2FB";
          // bgColorMain2="#808080";
          console.log("Inbox");
      }
     else if(e.target.innerText.includes("Archive")){
          // bgColorMain="#808080";
          bgColorMain2="#D6E2FB";
          console.log("Archive");
     }
    }
    
    return (
        <div id="body">

            <div id="firstColumn">
            
                <div id="firstDiv">
                    <div>
                        <div style={{
                            height: "54px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}><img src={logo} alt="Logo"/>
                        </div>

                        <div>


                            <div onClick={(e) => {
                                handleView(true);
                                // bgColorChange();
                            }} style={{backgroundColor: bgColorMain2, display: "flex"}} className='mainActionBtn'>
                                <h3><span><FiInbox/></span>Inbox</h3><h3>{massages.length}</h3>
                            </div>
                            <div onClick={(e) => {
                                handleView(false);
                                // bgColorChange();
                            }} style={{backgroundColor: bgColorMain2, display: "flex"}} className='mainActionBtn'>
                                <h3><span><BsArchive/></span>Archive</h3><h3>{archivedMassages.length}</h3>
                            </div>


                        </div>
                    </div>
                    {
                modal && <ModalPage modalData={modalData}></ModalPage>
            }
                </div>
                <div id="secondDiv">
                    <button id="LogOutBtn" style={{display: "flex", margin: "auto", marginBottom: "10vh"}}><h2>
                        <RiLogoutCircleRLine size={"1rem"}/></h2><h2 style={{marginLeft: "10px"}}>Logout</h2>
                    </button>
                </div>
            </div>


            <div id="secondColumn">

                <Projector></Projector>

            </div>
            
        </div>

    )
}

export default App;
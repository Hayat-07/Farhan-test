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
    const {view,setView,modal,modalData,archivedMassages, massages}=useContext( mContext);



  //------------------mainBtn Color-------------------
    let bgColorMainBtn="#F8FAFC";
    let bgColorMainBtn2="#F8FAFC";
    view?bgColorMainBtn="#D6E2FB":bgColorMainBtn2="#D6E2FB"
    

      
    
    
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

                        


                            <div onClick={() => { setView(true) }}  className='mainActionBtn' style={{backgroundColor: bgColorMainBtn, display: "flex"}}>
                                <h3><span style={{margin:"10px"}}><FiInbox/></span>Inbox</h3><h3>{massages.length}</h3>
                            </div>

                            
                            <div onClick={() => {setView(false) }} className='mainActionBtn'style={{backgroundColor: bgColorMainBtn2, display: "flex"}} >
                                <h3><span style={{margin:"10px"}}><BsArchive/></span>Archive</h3><h3>{archivedMassages.length}</h3>
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
        };

export default App;
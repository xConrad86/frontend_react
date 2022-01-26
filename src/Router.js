import React from "react"
import { Route, Routes } from "react-router-dom"
import CreateUser from "./pages/CreateUser"
import NewPass from "./pages/NewPass"
import ResetPass from "./pages/ResetPass"

const Router = () => {
    return (
        <React.Fragment> 
            <Routes>
                <Route path ='/' element={<CreateUser/>}></Route>                
                <Route path ='/CreateUser' element={<CreateUser/>}></Route>                                
                <Route path ='/ResetPass' element={<ResetPass/>}></Route>              
                <Route path ='/NewPass/:token' element={<NewPass/>}></Route>              
            </Routes>
        </React.Fragment>
    )
}

export default Router;
import { useState } from 'react'
import './App.css'
import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import { Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
      <Toaster position="top-right"/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
         <Route 
          path="*"
          element={
            <Navigate to="/login" />
          }
        />
      </Routes>
    </>
  )
}

export default App

import React from 'react'
import { Routes, Route, redirect, Navigate } from 'react-router-dom'
import Home from '@/pages/home';
import Login from '@/pages/login';
import SubPage1 from '@/pages/subPage1';
import SubPage2 from '@/pages/subPage2';
import Welcome from '@/pages/Welcome';
import NotFound from '@/pages/404';
// import { redirect } from 'react-router-dom';
function RootRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} >
        <Route path="admin/sub-page1" element={<SubPage1 />} />
        <Route path="admin/sub-page2" element={<SubPage2 />} />
        <Route path="welcome" element={<Welcome />} />
      </Route>
      <Route path='/' element={<Navigate to='home'></Navigate>}></Route>
      <Route path='*' element={<NotFound />}></Route>
    </Routes >
  )
}

export default RootRoutes
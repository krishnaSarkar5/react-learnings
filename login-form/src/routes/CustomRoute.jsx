import React from 'react'
import { Route, Routes } from "react-router-dom"
import SignupPage from '../pages/SignupPage'
import LoginPage from '../pages/LoginPage'
import { frontEndPaths } from './RoutePath'

const CustomRoute = () => {
  return (
    <Routes>
      <Route path={frontEndPaths.signup} element={<SignupPage />} />
      <Route path={frontEndPaths.login} element={<LoginPage />} />
    </Routes>
  )
}

export default CustomRoute
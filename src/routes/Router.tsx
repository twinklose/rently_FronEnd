import { APP_ROUTES } from './routes.ts'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home.tsx'
import Login from '../pages/Login/Login.tsx'
import Register from '../pages/Register/Register.tsx'
import ValidateAccount from '../pages/ValidateAccount/ValidateAccount.tsx'
import ForgetPassword from '../pages/ForgetPassword/ForgetPassword.tsx'
import Properties from '../pages/Properties/Properties.tsx'

export default function RouterElement(): JSX.Element {
  return (
    <Routes>
      <Route path={APP_ROUTES.HOME} element={<Home />} />
      <Route path={APP_ROUTES.LOGIN} element={<Login />} />
      <Route path={APP_ROUTES.REGISTER} element={<Register />} />
      <Route path={APP_ROUTES.VALIDATE_ACCOUNT} element={<ValidateAccount />} />
      <Route path={APP_ROUTES.FORGOT_PASSWORD} element={<ForgetPassword />} />
      <Route path={APP_ROUTES.PROPERTIES} element={<Properties />} />
    </Routes>
  )
}

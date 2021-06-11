import React from 'react'

const LoginPage = React.lazy(() => import('../components/Login'))
const SignUpPage = React.lazy(() => import('../components/SignUp'))
const ForgotPasswordPage = React.lazy(
  () => import('../components/ForgotPassword')
)

const routes = [
  {
    path: '/login',
    component: LoginPage,
    exact: true,
  },
  {
    path: '/signup',
    component: SignUpPage,
    exact: true,
  },
  {
    path: '/forgotpassword',
    component: ForgotPasswordPage,
    exact: true,
  },
]

export default routes

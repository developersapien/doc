import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../layout/Layout'
import { Input, Logo, Checkbox } from '../shared-ui'
import '../styles.css'
export const Login: FunctionComponent<any> = () => {
  return (
    <Layout>
      <div className="lgn-w-full">
        <section className="lgn-mt-10">
          <form action="" className="lgn-flex lgn-flex-col">
            <div className="lgn-mb-6 lgn-pt-3">
              <Logo subtext="Welcome back! Please login to your account." />
              <div>
                <Input type="text" placeholderText="Username" name="username" />
              </div>
              <div>
                <Input
                  type="password"
                  placeholderText="Password"
                  name="password"
                />
              </div>
              <div className="lgn-flex lgn-justify-between lgn-items-center lgn-mb-12 lgn-mt-6">
                <Checkbox checkboxText="Remember me" />
                <Link
                  to="/forgotpassword"
                  className="lgn-transition lgn-duration-500 lgn-ease-in-out lgn-grid lgn-text-gray-500 hover:lgn-text-udoc"
                >
                  Forgot password
                </Link>
              </div>
              <div className="lgn-grid lgn-grid-cols-2 lgn-gap-4 ">
                <button className="lgn-bg-udoc focus:lgn-outline-none focus:lgn-ring-2 active:lgn-bg-udoc lgn-py-4 lgn-px-4 lgn-text-white lgn-font-light lgn-rounded-sm lgn-shadow-sm focus:lgn-outline-none focus:lgn-ring-udoc focus:lgn-ring-opacity-50">
                  Login
                </button>
                <Link to="/signup" className="lgn-grid">
                  <button className="lgn-bg-white focus:lgn-outline-none lgn-border-2 lgn-border-udoc  lgn-py-4 lgn-px-4 lgn-text-gray-700 lgn-font-light lgn-rounded-sm lgn-shadow-sm focus:lgn-outline-none">
                    Sign up
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </section>
      </div>
    </Layout>
  )
}

export default Login

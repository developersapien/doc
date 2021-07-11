import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../layout/Layout'
import '../styles.css'
import { Input, Logo, Checkbox } from '../shared-ui'
export const SignUp = () => {
  return (
    <Layout bgName="signUp">
      <div className="lgn-w-full">
        <section className="lgn-mt-10">
          <form action="" className="lgn-flex lgn-flex-col">
            <div className="lgn-mb-6 lgn-pt-3">
              <Logo subtext="Please complete to create your account." />
              <div className="lgn-flex lgn-flex-row">
                <div className="lgn-flex lgn-flex-grow lgn-mr-4">
                  <Input
                    type="text"
                    placeholderText="Firstname"
                    name="firstname"
                  />
                </div>
                <div className="lgn-flex lgn-flex-grow lgn-ml-4">
                  <Input
                    type="text"
                    placeholderText="Lastname"
                    name="lastname"
                  />
                </div>
              </div>
              <div className="lgn-flex lgn-flex-row">
                <Input type="text" placeholderText="Username" name="username" />
              </div>
              <div className="lgn-flex lgn-flex-row">
                <Input type="email" placeholderText="Email" name="email" />
              </div>
              <div className="lgn-flex lgn-flex-row">
                <Input
                  type="password"
                  placeholderText="Password"
                  name="password"
                />
              </div>
              <div className="lgn-flex lgn-flex-row">
                <Input
                  type="password"
                  placeholderText="Confirm Password"
                  name="confirmpassword"
                />
              </div>
              <div className="lgn-flex lgn-items-center lgn-mb-12 lgn-mt-6">
                <Checkbox checkboxText="I agree with terms and conditions" />
              </div>
              <div className="lgn-flex lgn-justify-center">
                <button className="lgn-bg-udoc lgn-w-1/3 focus:lgn-outline-none focus:lgn-ring-2 active:lgn-bg-udoc lgn-py-4 lgn-px-4 lgn-text-white lgn-font-light lgn-rounded-sm lgn-shadow-sm focus:lgn-outline-none focus:lgn-ring-udoc focus:lgn-ring-opacity-50">
                  Sign up
                </button>
              </div>
              <div className="lgn-flex lgn-justify-center lgn-text-gray-500 lgn-mt-8">
                Already have an account?
                <Link
                  to="/login"
                  className="lgn-transition lgn-duration-500 lgn-ease-in-out lgn-grid  hover:lgn-text-udoc hover:lgn-underline hover:lgn-cursor-pointer"
                >
                  Sign in.
                </Link>
              </div>
            </div>
          </form>
        </section>
      </div>
    </Layout>
  )
}

export default SignUp

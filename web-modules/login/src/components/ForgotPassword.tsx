import { Logo, Input } from '../shared-ui'
import React from 'react'
import Layout from '../layout/Layout'
export const ForgotPassword = () => {
  return (
    <Layout>
      <div className="lgn-w-full">
        <section className="lgn-mt-10">
          <form action="" className="lgn-flex lgn-flex-col">
            <div className="lgn-mb-6 lgn-pt-3">
              <Logo subtext="Enter your email and we send you a password reset link." />
              <div className="lgn-flex lgn-flex-row">
                <Input type="email" placeholderText="Email" name="email" />
              </div>
              <div className="lgn-flex lgn-justify-center">
                <button className="lgn-bg-udoc lgn-w-1/3 focus:lgn-outline-none focus:lgn-ring-2 active:lgn-bg-udoc lgn-py-4 lgn-px-4 lgn-text-white lgn-font-light lgn-rounded-sm lgn-shadow-sm focus:lgn-outline-none focus:lgn-ring-udoc focus:lgn-ring-opacity-50">
                  Send Request
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </Layout>
  )
}

export default ForgotPassword

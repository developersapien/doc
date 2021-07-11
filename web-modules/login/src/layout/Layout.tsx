import React, { FC } from 'react'

const Layout: FC<any> = ({ children }) => {
  return (
    <div className="lgn-grid sm:lgn-grid-cols-1 lg:lgn-grid-cols-2 lgn-min-h-screen">
      <div className="lg:lgn-bg-no-repeat lg:lgn-bg-cover ph:lgn-hidden lg:lgn-bg-signup lg:lgn-block"></div>

      <div className="lgn-bg-white lgn-max-w-screen lgn-flex lgn-items-center lgn-flex-col lgn-justify-center ph:lgn-px-8 lg:lgn-px-32">
        {children}
      </div>
    </div>
  )
}

export default Layout

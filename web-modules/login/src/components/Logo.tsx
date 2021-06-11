import React, { FC } from 'react'

export const Logo: FC<any> = ({ subtext }) => {
  return (
    <section>
      <div className="lgn-font-bold lgn-text-2xl lgn-justify-center lgn-flex lgn-items-center">
        <img
          src="https://storage.googleapis.com/doctor-x-s.appspot.com/assets/images/logo.png"
          alt=""
        />
      </div>
      <p className="lgn-text-gray-600 lgn-text-center lgn-text-gray-300 lgn-font-light lgn-text-sm lgn-p-5">
        {subtext}
      </p>
    </section>
  )
}

export default Logo

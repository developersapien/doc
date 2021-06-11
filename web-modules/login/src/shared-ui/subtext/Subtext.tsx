import React, { FC } from 'react'

export const Subtext: FC<any> = ({ subtext }) => {
  return (
    <p className="lgn-text-gray-600 lgn-text-center lgn-text-gray-300 lgn-font-light lgn-text-sm lgn-p-5">
      {subtext}
    </p>
  )
}

export default Subtext

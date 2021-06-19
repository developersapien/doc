import React, { FC } from 'react'
import '../../styles.css'

export const Checkbox: FC<any> = ({ checkboxText }) => {
  return (
    <div>
      <label className="lgn-inline-flex lgn-items-center">
        <input
          type="checkbox"
          className="lgn-rounded lgn-border-gray-300 lgn-text-udoc lgn-shadow-sm focus:lgn-border-udoc focus:lgn-ring focus:lgn-ring-offset-0 focus:lgn-ring-udoc focus:lgn-ring-opacity-50"
        />
        <span className="lgn-ml-2 lgn-text-gray-500">{checkboxText}</span>
      </label>
    </div>
  )
}

export default Checkbox

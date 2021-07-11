import React, { FC } from 'react'
import '../../styles.css'
export const Input: FC<any> = ({ placeholderText, name, type }: any) => {
  return (
    <label className="lgn-block lgn-w-full">
      <input
        type={type}
        className="lgn-w-full lgn-p-2 lgn-mb-6 lgn-mt-0 block lgn-w-full lgn-px-0.5 lgn-border-0 lgn-border-b-2 lgn-placeholder-opacity-40 lgn-placeholder-gray-600 lgn-border-gray-200 focus:lgn-ring-0 focus:lgn-border-udoc"
        name={name}
        placeholder={placeholderText}
      />
    </label>
  )
}

export default Input

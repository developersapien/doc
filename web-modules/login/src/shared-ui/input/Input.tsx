import React, { FC } from 'react'
import '../../styles.css'
export const Input: FC<any> = ({ placeholderText, name, type }: any) => {
  return (
    <input
      className="lgn-w-full lgn-p-2 lgn-mb-6 lgn-text-gray-700 lgn-border-b-2 lgn-outline-none lgn-focus:bg-gray-300 lgn-placeholder-gray-600 lgn-placeholder-opacity-40"
      type={type}
      name={name}
      placeholder={placeholderText}
    />
  )
}

export default Input

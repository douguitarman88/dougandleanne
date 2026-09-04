import React from 'react'

interface InputProps {
    type: string,
    labelText: string,
    name: string,
    id: string,
    //value: string
    //maxlength: number
}

const Index = ({ type, labelText, name, id }: InputProps) => {
  return (
    <div>
        <label htmlFor={name} className="block text-gray-700 text-sm font-bold mb-2">{labelText}</label>
        <input type={type} name={name} id={id} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
    </div>
  )
}

export default Index
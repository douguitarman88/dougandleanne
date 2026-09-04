import React from 'react'

// 1. Define the prop type
interface MyButtonProps {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>; // Or () => void
}

const Index = ({ label, onClick }: MyButtonProps) => {
  return (
    <button type="submit" onClick={onClick} className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">{label}</button>
  )
}

export default Index
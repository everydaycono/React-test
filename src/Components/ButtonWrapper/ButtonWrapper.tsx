import React from "react"

// Event Handler Test
// onClick={onClick} will be Passed 
// onClick Type <React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const ButtonWrapper: React.FC<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & { title: string }> = (
  { title, ...props }
) => {
  return (
    <button {...props}>{title} </button >
  )
}

export default ButtonWrapper
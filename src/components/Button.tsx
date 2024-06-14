import React, { ReactNode } from 'react'

interface ButtonProps{
    className?: string,
    children?: ReactNode,
    href?: string,
    onClick?: () => void
}
const Button = (prop:ButtonProps) => {
  return (
    <button onClick={prop.onClick}>{prop.children}</button>
  )
}

export default Button
import React from 'react'

export default function Button({
    children,
    type = "button",
    bgcolor = "bg-blue-600",
    textColor = 'text-white', 
    disabled = false,
    className = '',
    ...props
}) {
  return (
    <button disabled={disabled} className={`px-4 py-2 rounded-lg ${!disabled ? 'hover:font-bold hover:bg-blue-700' : undefined}  ${bgcolor} ${textColor} ${className}`} {...props}>
        {children}
    </button>
  )
}

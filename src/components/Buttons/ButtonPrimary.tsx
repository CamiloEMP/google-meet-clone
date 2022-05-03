import React from 'react'

interface Props {
  text: string
  otherClass?: string
  type: 'button' | 'submit'
  action?: () => void | undefined
}

export const Button = ({
  text,
  action,
  otherClass,
  type
}: Props): JSX.Element => {
  return (
    <button
      type={type}
      onClick={action}
      className={`font-normal rounded-md text-sm md:text-base px-8 py-2 bg-blue-600 text-white  hover:bg-opacity-90 ${
        otherClass || ''
      } `}
    >
      {text}
    </button>
  )
}

import React from 'react'
import "./Button.css"
import { Variant } from '../../types/Variant';

interface ButtonProps  {
  label: string;
  variant?: Variant
}
const Button:React.FC<ButtonProps> = ({ label, variant='primary'}) => {
  return (
    <button className={`${variant}`}>{label}</button>
  )
}

export default Button
'use client';

import { CustomButtonProps } from '@/Types';
import React from 'react'


const CustomButton = ({title,containerStyles,handleClick,btnType}:CustomButtonProps) => {
  return (
    <div>
      <button 
      disabled={false}
      type= {btnType || 'button'}
      className={`custom-button${containerStyles}`}
      onClick={()=>{handleClick}}
      >
      <span className={`flex-1`}>{title}</span>
      </button>
      
    </div>
  )
}

export default CustomButton

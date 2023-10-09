'use client';

import { CustomButtonProps } from '@/Types';
import React from 'react'


const CustomButton = ({title,containerStyles,handleClick}:CustomButtonProps) => {
  return (
    <div>
      <button 
      disabled={false}
      type= {'button'}
      className={`custom-button${containerStyles}`}
      onClick={()=>{handleClick}}
      >
      <span className={`flex-1`}>{title}</span>
      </button>
      
    </div>
  )
}

export default CustomButton

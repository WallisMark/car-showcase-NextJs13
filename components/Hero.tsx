'use client'

import React from 'react'
import { CustomButton } from '.'
import Image from 'next/image'

const handleScroll = () =>{}

const Hero = () => {

  const handleScroll = () =>{}

  return (
    <div className='hero'>
      <div className='flex-1 pt-6 padding-x'>
        <h1 className='hero__title'>
            Find, book or rent a car!
        </h1>
        <p className='hero__subtitle'>
            Streamline your car rental experience without our efforless booking
        </p>
        <CustomButton
        title = "Explore cars"
        containerStyles = " bg-primary-blue text-white rounded-full mt-10 p-3"
        handleClick = {handleScroll}
        />
      </div>
      <div className='hero__image-container'>
        <div className='hero__image'>
            <Image 
            src={'/hero.png'}
            alt='this is a hero car image' fill className='object-contain'

            /> 
            <div className='hero__image-overlay'/>
        </div>

      </div>
    </div>
  )
}

export default Hero

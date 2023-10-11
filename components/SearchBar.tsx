'use client'
import React, { useState } from 'react'
import { SearchManufacture } from '.'

const SearchBar = () => {
    const handleSearch = () =>{

    }
    const [manufacturer, setManufacturer] = useState ("")
  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <SearchManufacture
        manufacturer={manufacturer}
        setManufacturer={setManufacturer}
        />
    </form>
  )
}

export default SearchBar



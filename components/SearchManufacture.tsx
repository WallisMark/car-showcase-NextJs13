'use client'
import { SearchManufactureProps } from '@/Types'
import { manufacturers } from '@/constants'
import { Combobox, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'

const SearchManufacture = ({manufacturer,setManufacturer}:SearchManufactureProps) => {
    const [query, setQuery] = useState('')
    const filteredManufactures =
    // query === ''
    //   ? manufacturers
    //   : 
     manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )
  return (
    <div>
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className='relative w-full cursor-default overflow-hidden rounded-lg bg-red text-left shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-red focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm mt-11' >
            <Combobox.Input
            className='w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0'
            placeholder='search car make here'
            displayValue={(manufacturer:string) => manufacturer}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredManufactures.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredManufactures.map((item) => (
                  <Combobox.Option
                    key={item}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-teal-600 text-white' : 'text-gray-900'
                      }`
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {item}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                            
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>

        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacture

import { MouseEventHandler } from "react"

export interface CustomButtonProps{
    title:string
    containerStyles?:string
    handleClick?: MouseEventHandler<HTMLButtonElement>
    btnType?: 'submit' | 'button'
}

export interface SearchManufactureProps{
    manufacturer:string
    setManufacturer: (manufacture:string) => void
}
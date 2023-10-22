import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export const cn = (...inputs) => {
  return twMerge(clsx(inputs))
}

export const isObjectEmpty = (objectName) => {
  return (
    objectName &&
    Object.keys(objectName).length === 0 &&
    objectName.constructor === Object
  )
}

export const capitalize = (string) => {
  return string.toString().charAt(0).toUpperCase() + string.slice(1)
}

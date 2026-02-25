import React from'react'
import reactSvg from '../assets/react.svg'

const Ana = () => {
    //Datos personales
    const name:string = 'Ana'
    const age:number = 28
    const job:string = 'Full Stack Developer'

  return (
    <>
    <div> {name} tiene {age} años y trabaja como {job} </div>
    </>
    
  )
}

export default Ana
import anaImage from '../assets/10757395.png'

const Ana = () => {
    //Datos personales
    const name:string = 'Ana'
    const age:number = 28
    const job:string[] = ['Production designer', 'Full Stack Developer']

  return (
    <>
    <div> {name} tiene {age} años y trabaja como {job[0]} y {job[1]} </div>
    <img src={anaImage} alt="Ana" />
    </>
    
  )
}

export default Ana
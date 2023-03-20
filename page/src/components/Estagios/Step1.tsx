import './Step1.css'
import Formulario from '../Formulario'

export default function Step1(){
    return(
        <div className='divP_setp1'>
            <h1 className='Step_1h1'>Personal info</h1>
            <p className='Setp_1p'>Please Provide your name , email address , and phone number</p>
            <Formulario/>
        </div>
        
    )
}
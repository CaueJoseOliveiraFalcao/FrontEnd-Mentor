import './Step.css'
import {useState} from 'react'
import Email from './Estagios/Email';
import Plano from './Estagios/Plano'
export default function Step(){

    interface MyComponentProps {
        // Add any props needed for your component here
      }
      
      const MyComponent: React.FC<MyComponentProps> = (props: MyComponentProps) => {
        const [showEmail, setEmail] = useState(true);
      
        const handleComponentToggle = () => {
          setEmail(!showEmail);
        }
      
    return(
        <div className="step-container">
            <div className='containerSteps'>
                <div className='steps'>
                    <p className='stepnum SelectNumber'>1</p>
                    <div className='steps-if'>
                        <p className='if1'>STEP 1</p>
                        <p className='if2'>YOUR INFO</p>
                    </div>
                </div>
                <div className='steps'>
                    <p className='stepnum '>2</p>
                    <div className='steps-if'>
                    <p className='if1'>STEP 2</p>
                        <p className='if2'>SELECT PLAN</p>
                    </div>
                </div>
                <div className='steps'>
                    <p className='stepnum '>3</p>
                    <div className='steps-if'>
                    <p className='if1'>STEP 3</p>
                        <p className='if2'>ADD-ONS</p>
                    </div>
                </div>
                <div className='steps'>
                    <p className='stepnum '>4</p>
                    <div className='steps-if'>
                    <p className='if1'>STEP 4</p>
                        <p className='if2'>SUMMARY</p>
                    </div>
                </div>
            </div>
            <div className='containerInf'>
                <div>
                    <button onClick={handleComponentToggle}>
                        Toggle Component
                    </button>
                    {showEmail ? <Email /> : <Plano />}
                </div>
            </div>
        </div>
    )
}}
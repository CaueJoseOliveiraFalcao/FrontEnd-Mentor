import './Step.css'
export default function Step(){
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
                 email cada
            </div>
        </div>
    )
}
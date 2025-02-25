import React, { useContext } from 'react'
import { FormContext, FormProvider } from './context/FormContext'
import Step1 from './Components/Step1'
import Step2 from './Components/Step2'
import Step3 from './Components/Step3'

const FormSteps = () => {
  
  const {step} = useContext(FormContext);
  return (
    <div>
      {step === 1 ? <Step1 /> : step === 2 ? <Step2 /> : step === 3 ? <Step3 /> : null}
  </div>
  )
}

function App() {
  return (
    <FormProvider>
      <div className='bg-zinc-400 h-screen flex justify-center items-center'>
        <div className='text-center border p-12 bg-slate-300 rounded-2xl shadow-gray-600 shadow-lg'>
          <h1 className='text-4xl font-bold'>Multi-Page Form</h1>
          <FormSteps />
        </div>
      </div>
    </FormProvider>    
  )
}

export default App
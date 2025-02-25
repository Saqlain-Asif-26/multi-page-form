import { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({children}) => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [step, setStep] = useState(1);
    
    return <FormContext.Provider value={{formData, setFormData, step, setStep}}>{children}</FormContext.Provider>
}
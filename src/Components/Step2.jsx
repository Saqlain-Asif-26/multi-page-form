import React, { useContext, useEffect } from 'react'
import { FormContext } from '../context/FormContext'
import { useForm } from 'react-hook-form';

function Step2() {

    const { register, handleSubmit, watch, setValue, setError, formState: { errors } } = useForm();
    const { formData, setFormData, setStep } = useContext(FormContext);

    useEffect(() => {
        setValue("email", formData.email);
    }, [formData.email, setValue]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => {
            const updatedData = { ...prev, [name]: value };
            console.clear();
            console.log(updatedData);
            return updatedData
        });
        setValue(name, value);
    }

    const onSubmit = (data) => {
        if (!data.email.includes("@") || !data.email.includes(".com")) {
            setError("email", { type: "manual", message: "Please enter valid Email." });
            return;
        }else{
            setStep(3);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='text-start my-10'>
                    <label htmlFor="email" className='text-xl font-semibold'>Email:</label>
                    <input 
                        id='email' 
                        type="text"
                        name="email"
                        className='block text-xl p-2 outline-none my-4 w-80 rounded-md'
                        placeholder='Enter Your Email'
                        {...register("email", { 
                            required: "Email is required.", 
                        })} 
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className='text-red-600 text-sm'>{errors.email.message}</p>}
                </div>
                <div className='flex gap-4'>
                    <button onClick={() => setStep(1)} className='border bg-green-500 text-xl font-bold px-4 py-2 w-full rounded-md'>Back</button>
                    <button type='submit' className='border bg-green-500 text-xl font-bold px-4 py-2 w-full rounded-md'>Next</button>
                </div>
            </form>
        </div>
    )
}

export default Step2;

import React, { useContext, useEffect } from 'react'
import { FormContext } from '../context/FormContext'
import { useForm } from 'react-hook-form';

function Step1() {

    const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm();
    const { formData, setFormData, setStep } = useContext(FormContext);

    useEffect(() => {
        setValue("name", formData.name);
    }, [formData.name, setValue]);

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

    const onSubmit = () => {
        setStep(2);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='text-start my-10'>
                    <label htmlFor="name" className='text-xl font-semibold'>Name:</label>
                    <input 
                        id='name' 
                        type="text"
                        name="name"
                        className='block text-xl p-2 outline-none my-4 w-80 rounded-md'
                        placeholder='Enter Your Name'
                        {...register("name", { 
                            required: "Name is a required field.", 
                            minLength: { value: 3, message: "Name must be at least 3 characters long." } 
                        })} 
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <p className='text-red-600 text-sm'>{errors.name.message}</p>}
                </div>
                <button type='submit' className='border bg-green-500 text-xl font-bold px-4 py-2 w-full rounded-md'>Next</button>
            </form>
        </div>
    )
}

export default Step1;

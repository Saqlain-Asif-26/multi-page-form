import React, { useContext, useEffect } from 'react'
import { FormContext } from '../context/FormContext'
import { useForm } from 'react-hook-form';

function Step3() {

    const { register, handleSubmit, watch, setValue, setError, formState: { errors } } = useForm();
    const { formData, setFormData, setStep } = useContext(FormContext);

    useEffect(() => {
        setValue("password", formData.password);
    }, [formData.password, setValue]);

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
        if (data.password.length <= 5) {
            setError("password", { type: "manual", message: "Password should at least 6 character long.." });
            return;
        }else{

            setFormData({name: "", email: "", password: ""});
            setStep(1);
            alert("Form submitted successfully..!");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='text-start my-10'>
                    <label htmlFor="password" className='text-xl font-semibold'>Password:</label>
                    <input 
                        id='password' 
                        type="password"
                        name="password"
                        className='block text-xl p-2 outline-none my-4 w-80 rounded-md'
                        placeholder='Enter Your Password'
                        {...register("password", { 
                            required: "Password is required.", 
                        })} 
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p className='text-red-600 text-sm'>{errors.password.message}</p>}
                </div>
                <div className='flex gap-4'>
                    <button onClick={() => setStep(2)} className='border bg-green-500 text-xl font-bold px-4 py-2 w-full rounded-md'>Back</button>
                    <button type='submit' className='border bg-green-500 text-xl font-bold px-4 py-2 w-full rounded-md'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Step3;

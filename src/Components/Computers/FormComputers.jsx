import React, {useContext, useEffect, useState} from 'react';
import {get, useForm} from "react-hook-form";
import {ComputersContext} from "../Context/ComputersContext.jsx";

const FormComputers = () => {
    const { computers, setComputers } = useContext(ComputersContext);
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const onSubmit = data => setComputers([...computers, data]);


    // useEffect(() => {
    //     const subscription = watch((value, { name, type }) => {
    //         console.log(value, name, type );
    //         // setComputers([...computers, {
    //         //     name: data.name,
    //         //     description: data.description,
    //         //     brand: data.brand
    //         // }])
    //     })
    //
    //     return () => subscription.unsubscribe();
    // }, [watch]);
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="name" type="text" {...register("name", {required : true, maxLength: 30})}/>
                {
                    errors.name &&
                    <p style={{fontSize: '12px', color: "red"}}>
                        {
                            errors.name.type === 'required' && "Ce champs est requis"
                        }
                        {
                            errors.name.type === 'maxLength' && "30 caractères maximum"
                        }
                    </p>
                }
                <textarea placeholder="description" type="textarea" {...register("description")}/> <br/>
                <select {...register("brand", {required: true})}>
                    <option value="Dell">Dell</option>
                    <option value="IBM">IBM</option>
                    <option value="Apple">Apple</option>
                </select>
                {
                    errors.brand &&
                    <p style={{fontSize: '12px', color: "red"}}>
                        {
                            errors.brand.type === 'required' && "Ce champs est requis"
                        }
                        {
                            errors.brand.type === 'maxLength' && "30 caractères maximum"
                        }
                    </p>
                }
                <button type="submit">Ajouter</button>
            </form>
            <div>
                {
                    computers.map((computer, index) => (
                        <div key={index}>
                            {computer.name} - {computer.brand} <br/>
                            {computer.description}
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default FormComputers;
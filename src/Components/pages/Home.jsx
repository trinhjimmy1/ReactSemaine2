import React from 'react';
import {set, useForm} from "react-hook-form";

const Home = () => {
    const { register, handleSubmit, formState: { errors }, setValue} = useForm();

    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div>
            <h1 onClick={() => setValue('like', 'oui')}>Home</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="language" type="text" {...register("language", {required : true, minLength: 3})}/>
                {
                    errors.language &&
                    <p style={{fontSize: '12px', color: "red"}}>
                        {
                            errors.language.type === 'required' && "Ce champs est requis"
                        }
                        {
                            errors.language.type === 'minLength' && "3 caractères minimum"
                        }
                    </p>
                }

                <input placeholder="like" type="text" {...register("like")}/> <br/>
                <button type="submit">Ajouter</button>
            </form>
        </div>
    );
};

export default Home;
import React from 'react'
import { useForm } from 'react-hook-form'
import { Send } from '@material-ui/icons'

const SubscribeForm = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => console.log(data);

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Your email address" {...register("email")} />
            <button className="btn btn-primary btn-submit"><Send /></button>
        </form>
    )
}

export default SubscribeForm

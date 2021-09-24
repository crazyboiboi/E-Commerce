import React from 'react'

import { useFormContext, Controller } from 'react-hook-form'

const CustomTextField = ({ name, label, span }) => {
    const { control } = useFormContext();

    return (
        <Controller
            render={({ field: { onChange, value } }) => (
                <div className={`${span}`}>
                    <label htmlFor={name} className="section__paragraph">{label}</label><br />
                    <input type="text" id={name} className="field" value={value} onChange={onChange} />
                </div>
            )}
            control={control}
            name={name}
            defaultValue=""
        />
    )
}

CustomTextField.defaultProps = {
    span: '',
}

export default CustomTextField

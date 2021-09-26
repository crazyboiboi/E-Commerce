import React from 'react'

import { useFormContext, Controller } from 'react-hook-form'

const CustomDropDownField = ({ name, label, options, handleChange }) => {
    const { control } = useFormContext();
    return (
        <Controller
            render={() => (
                <div>
                    <label htmlFor={name} className="section__paragraph">{label}</label><br />
                    <select name={name} defaultValue={'DEFAULT'} className="field"  onChange={e => handleChange(e.target.value)}>
                        <option disabled value={"DEFAULT"}>-- Select an option --</option>
                        {options.map((option) => (
                            <option value={option.id} key={option.id}>{option.label}</option>
                        ))}
                    </select>
                </div>
            )}
            control={control}
            name={name}
            defaultValue=""
        />
    )
}

export default CustomDropDownField

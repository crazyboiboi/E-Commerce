import React from 'react'

import { useFormContext, Controller } from 'react-hook-form'

const CustomDropDownField = ({ name, label }) => {
    const { control } = useFormContext();

    return (
        <Controller
            render={() => (
                <div>
                    <label htmlFor={name} className="section__paragraph">{label}</label><br />
                    <select name={name} defaultValue={'DEFAULT'} className="field">
                        <option disabled value={"DEFAULT"}>-- Select an option --</option>
                        <option value="asc">Ascending</option>
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

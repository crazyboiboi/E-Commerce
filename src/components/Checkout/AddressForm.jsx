import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'

import CustomDropDownField from './CustomDropDownField'
import CustomTextField from './CustomTextField';

const AddressForm = () => {
    const methods = useForm();

    return (
        <div className="checkout__section billing">
            <h1 className="section__title">Billing Details</h1>
            <FormProvider {...methods}>
                <form className="form" onSubmit="">
                    <CustomTextField name='fname' label='First Name' />
                    <CustomTextField name='lname' label='Last Name' />
                    <CustomTextField name='email' label='Email' />
                    <div/>
                    <CustomTextField name='address' label='Address' span="span"/>
                    <CustomTextField name='city' label='City' />
                    <CustomTextField name='zipcode' label='Zip / Postal Code' />
                    <CustomDropDownField name='scountry' label='Shipping Country' />
                    <CustomDropDownField name='sdivision' label='Shipping Subdivision' />
                    <CustomDropDownField name='soption' label='Shipping Option' />
                </form>
            </FormProvider>
        </div>
    )
}

export default AddressForm

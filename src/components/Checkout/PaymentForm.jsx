import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'

import CustomDropDownField from './CustomDropDownField'
import CustomTextField from './CustomTextField';

const PaymentForm = () => {
    const methods = useForm();

    return (
        <div className="checkout__section payment">
            <h1 className="section__title">Payment Details</h1>
            <FormProvider {...methods}>
                <form className="form" onSubmit="">
                    <CustomTextField name='cardnumber' label='Card Number' span="span"/>
                    <CustomTextField name='month' label='Month' />
                    <CustomTextField name='year' label='Year' />
                    <CustomTextField name='cvc' label='CVC' />
                </form>
            </FormProvider>
        </div>
    )
}

export default PaymentForm

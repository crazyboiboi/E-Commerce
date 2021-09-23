import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'

import CustomDropDownField from './Checkout/CustomDropDownField';
import CustomTextField from './Checkout/CustomTextField'



const Checkout = () => {
    return (
        <div className="checkout">
            <AddressForm />
        </div>
    )
}

export default Checkout

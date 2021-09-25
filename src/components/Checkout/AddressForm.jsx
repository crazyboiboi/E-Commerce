import React, { useState, useEffect } from 'react'
import { useForm, FormProvider } from 'react-hook-form'

import { commerce } from '../../lib/commerce'

import CustomDropDownField from './CustomDropDownField'
import CustomTextField from './CustomTextField';

const AddressForm = ({ checkoutToken, save }) => {
    const methods = useForm({mode: 'onChange'});
    const {isValid, isDirty} = methods.formState;

    const [isShippingFieldEmpty, setIsShippingFieldEmpty] = useState(true);
    const [shippingCountries, setShippingCountries] = useState([])
    const [shippingCountry, setShippingCountry] = useState('')
    const [shippingSubdivisions, setShippingSubdivisions] = useState([])
    const [shippingSubdivision, setShippingSubdivision] = useState('')
    const [shippingOptions, setShippingOptions] = useState([])
    const [shippingOption, setShippingOption] = useState('')

    // Retrieves and format entries into a readable array
    const countries = Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name }));
    const subdivisions = Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name }))
    const options = shippingOptions.map((so) => ({ id: so.id, label: `${so.description} - ${so.price.formatted_with_symbol}` }))

    // Fetch shipping countries and set to first on the list on page load
    const fetchShippingCountries = async (checkoutTokenId) => {
        const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);
        setShippingCountries(countries);
    }

    useEffect(() => {
        fetchShippingCountries(checkoutToken.id)
    }, [checkoutToken.id]);


    // Fetch shipping subdivisions 
    const fetchShippingSubdivisions = async (countryCode) => {
        const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);
        setShippingSubdivisions(subdivisions);
    };

    useEffect(() => {
        if (shippingCountry)
            fetchShippingSubdivisions(shippingCountry);
    }, [shippingCountry]);


    // Fetch shipping options
    const fetchShippingOptions = async (checkoutTokenID, country, region = null) => {
        const options = await commerce.checkout.getShippingOptions(checkoutTokenID, { country, region });
        setShippingOptions(options);
        // setShippingOption(options[0].id);
    };

    useEffect(() => {
        if (shippingSubdivision)
            fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);
    }, [checkoutToken.id, shippingCountry, shippingSubdivision]);


    // Validation for shipping field
    useEffect(() => {
        const empty = (shippingCountry === '' || shippingSubdivision === '' || shippingOption === '')
        setIsShippingFieldEmpty(empty);
    }, [shippingCountry, shippingSubdivision, shippingOption])

    
    return (
        <div className="checkout__section billing">
            <h1 className="section__title">Billing Details</h1>
            <FormProvider {...methods}>
                <form className="form" onSubmit={() => { }}>
                    <CustomTextField name='fname' label='First Name' />
                    <CustomTextField name='lname' label='Last Name' />
                    <CustomTextField name='email' label='Email' />
                    <div />
                    <CustomTextField name='address' label='Address' span="span" />
                    <CustomTextField name='city' label='City' />
                    <CustomTextField name='zipcode' label='Zip / Postal Code' />
                    <CustomDropDownField name='shippingCountry' label='Shipping Country' options={countries} handleChange={setShippingCountry} />
                    <CustomDropDownField name='shippingSubdivision' label='Shipping Subdivision' options={subdivisions} handleChange={setShippingSubdivision} />
                    <CustomDropDownField name='shippingOption' label='Shipping Option' options={options} handleChange={setShippingOption} />
                    <div />
                    <button
                        onClick={methods.handleSubmit((data) => save({ ...data, shippingCountry, shippingSubdivision, shippingOption }))}
                        className={`btn btn-submit blue span ${isShippingFieldEmpty || !isValid || !isDirty ? 'btn-disabled' : ''}`}> Save
                    </button>
                </form>
            </FormProvider>


        </div>
    )
}

export default AddressForm


// 
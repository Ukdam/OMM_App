import React, { Component } from 'react';
import Postcode from '@actbase/react-daum-postcode';

function SearchAddress({ navigation }) {

    getAddressData = (data) => {

        let defaultAddress = "";

        if (data.buildingName === '') {
            defaultAddress = '';
        }
        else if (data.buildingName === 'N') {
            defaultAddress = "(" + data.apartment + ")";
        }
        else {
            defaultAddress = "(" + data.buildingName + ")";
        }
        navigation.navigate({
            name: 'Resister2',
            params: { zonecode: data.zonecode, address: data.address, defaultAddress: defaultAddress },
            merge: true,
        });
    }
    return (
        <Postcode
            style={{ width: '100%', height: '100%' }}
            jsOptions={{ animation: true }}
            onSelected={(data) => getAddressData(data)}
        />
    )
};


export default SearchAddress;
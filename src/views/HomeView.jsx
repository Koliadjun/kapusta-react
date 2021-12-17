import React from 'react';
import RegistrationForm from '../components/RegistrationForm';
import queryString from 'query-string';


function HomeView() {

    console.log(Object.values(queryString.parse(window.location.href))[0])

    return (
        <div>
            <h1>HomeView</h1>
            <RegistrationForm />
        </div>
    )
}

export default HomeView

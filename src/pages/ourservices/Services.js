import React from 'react'
import Headerbg from '../../img/header-bg-1.png'
import ServiceShowcase from '../../components/showcase/ServiceShowcase'
import Navigation from '../../components/navigation/Navigation'

const Services = () => {
    return (
        <div>
            <img src={Headerbg} className="absolute top-0 w-full z-0 object-cover" alt="background img" />
            <Navigation />
            <div className="lg:flex relative container lg:mt-32 px-4 mx-auto">
                <h1 className="text-4xl text-white">Services</h1>
            </div>
            <div>
                <ServiceShowcase />
            </div>
        </div>
    )
}

export default Services

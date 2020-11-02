import React from 'react'
import ShowcaseFeature from '../../img/showcase-img-2.png'
import FeatureCards from '../cards/FeatureCards'

const ShowcaseFeatures = () => {
    return (
        <div className="container mt-4 md:px-18 px-2 mx-auto">
            <div className="lg:flex items-end">
                <div className="lg:w-1/3">
                    <img className="lg:w-full lg:h-full lg:pb-0 pb-8 w-3/4 h-3/4" src={ShowcaseFeature} alt="showcase feature img" />
                </div>
                <div className="lg:w-2/3 lg:ml-16">
                    <h1 className="font-bold uppercase text-3xl"><span className="text-blue-500">Free</span> for 30 days</h1>
                    <p>$0 for the first 30 days on any plan you choose to go for, If you don't like the website, you can cancel anytime between those 30 days, no hassle, no fees.<br /><br />
                    After 30 days, you will be charged a fixed price per month or a one time fixed price based on your budget and the amount of work needed.
                    You own your domain, content, listing, and profiles. Cancel anytime, free of charge, no hassle.</p>
                </div>
            </div>
            <div className="mt-8">
                <FeatureCards />
            </div>
        </div>
    )
}

export default ShowcaseFeatures

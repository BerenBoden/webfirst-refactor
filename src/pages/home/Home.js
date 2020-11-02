import React from 'react'
import Banner from '../../img/banner-bg.png'
import Navigation from '../../components/navigation/Navigation'
import Showcase from '../../components/showcase/Showcase';
import ShowcaseDescription from '../../components/showcase/ShowcaseDescription';
import ShowcaseFeatures from '../../components/showcase/ShowcaseFeatures';
import ShowcasePortfolio from '../../components/showcase/ShowcasePortfolio';
import ShowcasePricing from '../../components/showcase/ShowcasePricing';
import ShowcaseContact from '../../components/showcase/ShowcaseContact';
import FooterBg from '../../img/footer-bg.png';
import Footer from '../../components/footer/Footer';

const Home = () => {
    return (
        <div>
            <img src={Banner} className="absolute top-0 w-full z-0 h-screen80 object-cover" alt="background img" />
            <Navigation />
            <div className="lg:mt-48 mt-24">
                <Showcase />
            </div>
            <div className="mt-24 z-10">
                <ShowcaseDescription />
            </div>
            <div className="">
                <ShowcaseFeatures />
            </div>
            <div className="">
                <ShowcasePortfolio />
            </div>
            <div className="">
                <ShowcasePricing />
            </div>
            <div>
            <div className="">
                <div className="lg:absolute z-40 relative w-full h-full">
                    <ShowcaseContact/>
                </div>

                <footer className="relative z-30">
                    <div className="absolute z-0 w-full h-full lg:mt-64 lg:pt-64">
                        <img src={FooterBg} className="absolute z-0 object-cover h-screen80 object-cover" alt="background img" />
                    </div>
                    <div className="">
                        <Footer />
                    </div>
                </footer>
            </div>
            </div>
        </div>
    )
}

export default Home
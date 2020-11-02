import React from 'react'
import ShowcaseImg from '../../img/showcase-img-1.png'
import Tilt from 'react-parallax-tilt';

const Showcase = () => {
    return (
        <div className="lg:flex relative container lg:mt-32 px-4 mx-auto">
            <div className="lg:w-1/2 lg:my-0 my-16">
                <h1 className="text-white text-4xl font-bold leading-8">Small Business Web Development & Design</h1>
                <p className="text-white mt-4">Stunning modern websites developed and designed by hand
                free for the first 30 days, cancel anytime. Get in touch and
                I'll see what I can do.</p>
            </div>
            <div className="lg:w-1/2 flex lg:justify-end justify-center">
            <Tilt
                perspective={900}
                glareEnable={false}
                glareMaxOpacity={0}
                transitionSpeed={4000}
                trackOnWindow={true}
                tiltMaxAngleX={13}
                tiltMaxAngleY={13}
                >
                <img className="lg:w-3/4 sm:w-1/2 w-3/4" src={ShowcaseImg} alt="showcase img" />
            </Tilt>
            </div>
        </div>

    )
}

export default Showcase

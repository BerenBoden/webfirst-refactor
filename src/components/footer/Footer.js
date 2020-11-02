import React from 'react';

import Logo from '../../img/logo.png'

const Footer = () => {
    return (
        <div className="container lg:mt-64">
            <div className="lg:mt-184 absolute lg:pt-64 md:flex flex-wrap w-full justify-between mx-auto text-white">
                <div className="lg:w-1/4 w-1/2 lg:justify-center flex">
                    <div >
                        <img className="w-48" src={Logo} alt="logo" />
                        <p>New Zealand, Taranaki</p>
                        <p>Email: beren.boden@gmail.com</p>
                        <p>Phone: 64+ 212089217</p>
                    </div>
                </div>
                <div className="lg:w-1/4 pr-12 md:w-1/2">
                    <div >
                        <h1 className="font-bold">Navigation</h1>
                        <hr classname="w-full"/>
                        <ul>
                            <li>Home</li>
                            <li>Services</li>
                            <li>Portfolio</li>
                            <li>Blog</li>
                            <li>About</li>
                        </ul>
                    </div>
                </div>
                <div className="lg:w-1/4 pr-12 md:w-1/2">
                    <h1 className="font-bold">Follow me on</h1>
                    <hr classname="w-full"/>
                    <ul>
                        <li>Github</li>
                        <li>Youtube</li>
                        <li>LinkedIn</li>
                        <li>StackOverflow</li>
                    </ul>
                </div>
                <div className="lg:w-1/4 pr-12 md:w-1/2">
                    <h1 className="font-bold">Services</h1>
                    <hr classname="w-full"/>
                    <ul>
                        <li>Web Develpoment</li>
                        <li>Web Design</li>
                        <li>Website Maintenenence</li>
                        <li>SEO Services</li>
                        <li>Content Creation</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer

import React from 'react'

const Headers = props => {
    return (
        <div className="flex justify-center pb-4">
            <div>
                <h1 className="font-bold uppercase text-3xl">{props.title}</h1>
                <p className="text-center text-xl"><span className="text-xs">-----</span> {props.icons} <span className="text-xs">-----</span></p>
            </div>
        </div>
    )
}

export default Headers

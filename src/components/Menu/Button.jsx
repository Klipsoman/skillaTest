import React from 'react'

export default function Button({children, icon, alt,}) {
    return (
        <button className="btn" >
            <span>{children}</span> <img src={icon} alt={alt} />
            </button>
    )
}

import React from 'react'
import  './HeaderOptions.css'

function HeaderOptions({Avatar,Icon,title}) {
    return (
        <div className="headerOption">
           {Icon&&<Icon className="headerOtion__icon" />}
           {Avatar &&<Avatar className="headerOption__icon" src={Avatar}/>}
           <h3 className="headerOption__title">{title}</h3>
        </div>
    )
}

export default HeaderOptions

import React from 'react'

const Header=(props)=>{
    const {syle,text,component}=props
    
    return <>
    <div style={syle} >
        <p>{text}</p>
        {props.children && props.children}
    </div>
    </>
}
export default Header
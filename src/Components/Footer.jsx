import React from 'react'

const Footer=(props)=>{
    const {syle,text,component}=props
    
    return <>
    <div style={syle} >
        <p>FOOTER</p>
        {props.children && props.children}
    </div>
    </>
}
export default Footer
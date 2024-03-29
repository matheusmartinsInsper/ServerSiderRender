import React from 'react'
import {faAmbulance,faFile} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header=(props)=>{
    const {syle,text,component}=props
    
    return <>
    <div style={syle} >
        
        {text&&<p>{text}</p>}
        {props.children && props.children}
    </div>
    </>
}
export default Header
import React from 'react'
import {faAmbulance,faFile} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MappingIcons={
    'fafile':faFile,
    'faambulance':faAmbulance
}

const Icons=(props)=>{
    const {syle,text,component,iconName}=props
    
    return <>
    <div style={syle} >
        <FontAwesomeIcon icon={MappingIcons[iconName]}/>
        <p>{text}</p>
        {props.children && props.children}
    </div>
    </>
}
export default Icons
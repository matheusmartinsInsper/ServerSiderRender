import Header from '../Components/Header'
import Footer from '../Components/Footer';
import SwitchComponents from './SwitchComponents';
import SwitchComponetsChildren from './SwitchComponentsChildren'

export default function RenderChildrens(childrens){
    
   return childrens.map((componentCurrent,index)=>{
        if(componentCurrent.children!==undefined){
           return  SwitchComponetsChildren(componentCurrent)
        }else{
           return  SwitchComponents(componentCurrent)
        }
    })
}
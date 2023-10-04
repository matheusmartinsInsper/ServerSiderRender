import RenderChildrens from "./RenderChildrens";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Icons from '../Components/Icons'

export default function switchComponents(Component){
    console.log(Component)
    const {component,text,style}=Component;
    switch(component){
        case 'container-header': 
        return <Header syle={style} text={text} component={component}>
         {RenderChildrens(Component.children)}
        </Header>;
        break;
        case 'container-logo': 
        return <Header syle={style} text={text} component={component}>
         {RenderChildrens(Component.children)}
        </Header>;
        break;
        case 'container-body': 
        return <Header syle={style} text={text} component={component}>
         {RenderChildrens(Component.children)}
        </Header>;
        break;
        case 'container-news-notices': 
        return <Header syle={style} text={text} component={component}>
         {RenderChildrens(Component.children)}
        </Header>;
        break;
        case 'container-basic': 
        return <Header syle={style} text={text} component={component}>
         {RenderChildrens(Component.children)}
        </Header>;
        break;
        case 'container-action': 
        return <Icons syle={style} text={text} component={component} iconName={Component?.icon}>
         {RenderChildrens(Component.children)}
        </Icons>;
        break;
        case 'container-footer-default': 
        return <Footer syle={style} text={text} component={component}>
         {RenderChildrens(Component.children)}
        </Footer>;
        break;
     }
}
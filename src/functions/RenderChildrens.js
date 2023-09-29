import Header from '../Components/Header'
import Footer from '../Components/Footer';

export default function RenderChildrens(childrens){
    
   return childrens.map((componentCurrent,index)=>{
        const {component,text,style}=componentCurrent;

        if(componentCurrent.children!==undefined){
            switch(component){
                case 'container-header': 
                return <Header syle={style} text={text} component={component}>
                 {RenderChildrens(componentCurrent.children)}
                </Header>;
                break;
                case 'container-logo': 
                return <Header syle={style} text={text} component={component}>
                 {RenderChildrens(componentCurrent.children)}
                </Header>;
                break;
                case 'container-body': 
                return <Header syle={style} text={text} component={component}>
                 {RenderChildrens(componentCurrent.children)}
                </Header>;
                break;
                case 'container-news-notices': 
                return <Header syle={style} text={text} component={component}>
                 {RenderChildrens(componentCurrent.children)}
                </Header>;
                break;
                case 'container-basic': 
                return <Header syle={style} text={text} component={component}>
                 {RenderChildrens(componentCurrent.children)}
                </Header>;
                break;
                case 'container-action': 
                return <Header syle={style} text={text} component={component}>
                 {RenderChildrens(componentCurrent.children)}
                </Header>;
                break;
                case 'container-footer-default': 
                return <Footer syle={style} text={text} component={component}>
                 {RenderChildrens(componentCurrent.children)}
                </Footer>;
                break;
             }
        }else{
            switch(component){
                case 'container-header': 
                return <Header syle={style} text={text} component={component} />
                break;
                case 'container-logo': 
                return <Header syle={style} text={text} component={component} />
                break;
                case 'container-news-notices': 
                return <Header syle={style} text={text} component={component} />
                break;
                case 'container-basic': 
                return <Header syle={style} text={text} component={component} />
                break;
                case 'container-body': 
                return <Header syle={style} text={text} component={component} />
                break;
                case 'container-action': 
                return <Header syle={style} text={text} component={component} />
                break;
                case 'container-footer-default': 
                return <Footer syle={style} text={text} component={component} />
                break;
             }
        }
    })
}
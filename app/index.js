import { select , useComponent } from '@vampirejs/vampirejs/hooks'
import { Home } from './components/Home'


export const App = {
    state:{},
    ui(){
        return(
            select("app").innerHTML = `
            ${useComponent(Home)}
            `
        )
    },
    logic:()=>{

    },
    
}
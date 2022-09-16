import { select } from '@vampirejs/vampirejs/hooks'
import { initializeState } from '@vampirejs/vampirejs/state-management'


export const Home = {
    state:{
        count:0
    },
    ui(){
        return(
            select("app").innerHTML = `
            <div><div class="counter" style="font-size:130px;">${HomeState.count}</div>
            <button id="btn" style="margin-top:80px;">ADD</button>
            </div>
            `
        )
    },
    logic:()=>{
        select("btn").onclick = () => HomeState.count++
    },
    
}

const HomeState = initializeState(Home.state, Home.ui, Home.logic);

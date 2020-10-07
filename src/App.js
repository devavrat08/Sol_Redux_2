import React,{Component} from 'react';
import Posts from './component/post'


class App extends Component{
render(){
    return(<React.Fragment>
            <div className="container">
                <Posts/>
            </div>
        </React.Fragment>
    )
}
}

export default App;
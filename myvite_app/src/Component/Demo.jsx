import { Component} from "react";



class Demo_class extends Component{
    constructor(){
        super()
        this.state={color:'red',width:'200px'}
    }
    render(){
        return(
            <h2>HAllo Hai{this.state.color}{this.state.width}</h2>
        )
        
    }
}
export default Demo_class

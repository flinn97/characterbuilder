import { Component } from "react";

class AddCharacter extends Component{
render(){
    return(
        <div onClick={()=>{
            debugger
           this.props.app.dispatch({popupSwitch:"addCharacter"})
           this.props.app.state.barracks.addCharacter({name:"jared"})
        }}>
            add character
        </div>
    )
}
}
export default AddCharacter
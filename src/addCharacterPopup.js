import { Component } from "react";
import InputComponent from "./InputComponent";

class AddCharacterPopup extends Component{
render(){
    return(
       <div>
        hi
        <InputComponent attribute={this.props.app.state.barracks.getJson().name}/>
        </div>
    )
}
}
export default AddCharacterPopup

import { Component } from 'react';
class InputComponent extends Component {
  render(){
  return (
    <input value={this.props.attribute} onChange={(e)=>{
      let newVal = e.target.value
      this.props.app.state.currentCharacter.updateJson({[this.props.attribute]:newVal})
      this.props.app.dispatch({})
    }}></input>
  )
}
}

export default InputComponent;

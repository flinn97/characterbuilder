
import { Component } from 'react';
import { barracksInterface } from './myComponents';
import CharacterList from './characterList';
import AddCharacter from './addCharacter';
import AddCharacterPopup from './addCharacterPopup';
class App extends Component {
  constructor(){
    super()
    let barracks = barracksInterface.createBarracks()
    this.dispatch = this.dispatch.bind(this)
    this.state={
      barracks:barracks,
      popupSwitch: "",
      currentCharacter:undefined,
    }
  }
   
  dispatch(json){
      this.setState({json})
  }
  render(){
    let app={ state:this.state, dispatch:this.dispatch}

    
  return (
    <div >
    hi
    <CharacterList app={app}/>
    <AddCharacter app={app}/>
    {this.state.popupSwitch === "addCharacter" && <AddCharacterPopup app={app}/>}
    </div>
  );
}
}

export default App;


import { Component } from 'react';
class CharacterList extends Component {
  render(){
  return (
    this.props.app.state.barracks.getJson().characterList.map((char)=>{
    <div>
    character list
    {char.getJson().name}
    </div>
    })
  );
}
}

export default CharacterList;

class BaseClass{
  constructor(json){
    this.updateJson(json)
  }
  factory
  json={
    name:"",
    hp:"",
    ac:"",
    speed:"",
    strength:"",
    dex:"",
    con:"",
    intelligence:"",
    wisdom:"",
    charisma:"",
    race:"",
    class:"",
    subclass:"",
    _id: "",
  }
  getJson(attribute){
    let jsonVal = this.json
    if(attribute){
      jsonVal = this.json[attribute]
    }
    return jsonVal
  }
  updateJson(json){
   this.json = {...this.json, ...json}
  }
}
class Character extends BaseClass{
  json={
    ...this.json,
    type:"character"
  }
}
class Barracks extends BaseClass{
  factory
  json={
    ...this.json,
    characterList:[],
    type:"barracks"
    
  }
  
  addCharacter(json){
    let character = this.factory.createObj("character",json)
    this.props.json.characterList.push(character)
    this.dispatch({currentCharacter:character})
    return character
  }
}
class Factory{
  factory={character:Character,barracks:Barracks}

  createObj(type,json){
    let obj = new this.factory[type](json)
    return obj
  }
}
class BarracksInterface{
  factory
  constructor(){
    this.getFactory()
  }
  getFactory(){
    if(!this.factory){
      this.factory = new Factory()
    }
    return this.factory
  }
  createBarracks(){
    let barracks = this.factory.createObj("barracks")
    return barracks
  }
}
const barracksInterface = new BarracksInterface();
export {barracksInterface}
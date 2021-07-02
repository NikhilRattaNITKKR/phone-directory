import React,{Component} from 'react'

class App extends Component{
  render(){
  let a=1;
  let b=2;
  return (
    <div >
     {/*<h1> HEllo world </h1>*/}
     <label>Name:</label>
     <input id="name" placeholder={a+b}/>
    </div>
  );
}
}
export default App;

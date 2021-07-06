import React , {Component} from 'react';
import AddSubscriber from './AddSubscriber'
import App from './App'
import {BrowserRouter as Router,Route} from 'react-router-dom'
class PhoneDirectory extends Component{

constructor(){
  super();
  this.state={
    SubscriberList:[]
  }
}

addSubscriberHandler=(newSubscriber)=>{
  const SubscriberList=this.state.SubscriberList;
  if(SubscriberList.length>0){
    newSubscriber.id=SubscriberList[SubscriberList.length-1].id+1;
  }else{
    newSubscriber.id=1;
  }
  SubscriberList.push(newSubscriber);
  this.setState({SubscriberList:SubscriberList});
  console.log(this.state);
}
  render(){
    return(
      <Router>
      <div>
      <Route exact path='/' render={(props)=><App {...props} SubscriberList={this.state.SubscriberList}/> }/>
      <Route exact path='/Add' render={(props)=><AddSubscriber {...props} addSubscriber={this.addSubscriberHandler}/> }/>
      </div>
      </Router>
    )
  }
};

export default PhoneDirectory;

import React , {Component} from 'react';
import AddSubscriber from './AddSubscriber'
import App from './App'

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
      <AddSubscriber addSubscriber={this.addSubscriberHandler}/>
      <App SubscriberList={this.state.SubscriberList}/>
    )
  }
};

export default PhoneDirectory;

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
}SubscriberList.push(newSubscriber);
  this.setState({SubscriberList});
}

deleteSubcribersHandler=(subscriberId)=>{
    const SubscriberList=this.state.SubscriberList;
    let index=1;
    SubscriberList.forEach((item,i) => {
      if(item.id===subscriberId){
        index=i;
      }
    },this);
    SubscriberList.splice(index,1);
    this.setState({SubscriberList});
}

  render(){
    return(
      <Router>
      <div>
      <Route exact path='/' render={(props)=><App {...props} SubscriberList={this.state.SubscriberList} deleteHandler={this.deleteSubcribersHandler}  /> }/>
      <Route exact path='/Add' render={({history},props)=><AddSubscriber {...props} history={history} addSubscriber={this.addSubscriberHandler}/> }/>
      </div>
      </Router>
    )
  }
};

export default PhoneDirectory;

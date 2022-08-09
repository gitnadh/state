import React, { Component } from 'react'
export class Counter extends Component {
state={
  
  counter:0,
}


componentDidMount(){
  setInterval(() => {
  this.setState({
    counter:this.state.counter+1
  })
  }, 1000);
 
}
componentDidUpdate(){
  
}
componentWillUnmount(){
    console.log('unmoutcounter');
   } 
  
  render() {
   
    return (
      <div>
       {this.state.counter}
   
      </div>
    )
  }
}

export default Counter




  
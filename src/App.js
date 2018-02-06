import React, { Component } from 'react';
import './App.css';
// import HBHead from "./component/head"
// import HBBody from "./component/body"
// import HBButton from "./component/button"

class App extends Component {
    constructor(props){
        super(props);
            this.state = {
                number:"",
                money:""
            }
    }
    buttonClick(){

                }
     onChange(e){
        this.setState(
            {
                number:e.target.number,
                money:e.target.money
            }
        )
         alert(this.state.number)
     }
  render() {
    return (
      <div className="HBApp">
          <div className="HBHead">
              <p>发红包</p>
          </div>
          <div className="HBBody">
              <form>
                  <span>请输入人数</span>
                  <input value={this.state.number} onChange={(e)=>this.onChange(e)} ref="spanNumber" />
                  <span>请输入金额</span>
                  <input value={this.state.money} onChange={(e)=>this.onChange(e)} ref="spanMoney"/>
              </form>
          </div>
          <div className="HBButton">
              <button onClick = {this.buttonClick.bind(this)} >发红包</button>
          </div>
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export class App extends React.Component {
  constructor(props) 
  {
    super(props);
    this.state =  {fullName:"hafedh", bio:"my_bio",
     imgSrc:"my_img", date: new Date(), profession:"my_profession", abs:true} ;
     this.timer=null;
  }
  componentDidMount (){
    this.timer= window.setInterval(() => {
      this.setState({
        date:new Date()
      })
    })
  }
  componentWillUnmount(){
    window.clearInterval(this.timer)
  }
  changeabs = () => {
   if(this.state.abs==false)
      { {this.state.abs=false};}
      else
      {{this.state.abs=true};}
  }
  
  render() {
    return (
      <div style={{margin:"20%"}}>
          {this.state.date.toLocaleString()}
          if ({this.state.abs})
              {<h1>my profile {this.state.bio}</h1>}
              
        <button
          type="button"
          onClick={this.changeabs}
        >affiche {this.changeabs}</button>
      
      </div>
    );
  }

}

export default App;

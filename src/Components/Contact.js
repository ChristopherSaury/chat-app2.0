import React from 'react'
import './Contact.css';

class Contact extends React.Component {
        constructor(props){
            super(props)
            this.state={
                
                online : this.props.online
            };
        }


    render(){
    return (
  <div className="Contact">
      <div >
          <img className="avatar"src={this.props.avatar}></img>
      </div>
      <div className="name">
            {this.props.name}
      </div>
      <div 
      onClick = {(event)=> {
        const isOnline = !this.state.online 
        this.setState({online : isOnline})
    }}
      
      className="status">
          <div className ={this.state.online ? "status-online" : "status-offline" } ></div>
          <div className="status-text"> {this.state.online ? "Online" : "Offline"}
          </div>
      </div>
  </div>
        )
    }
}
export default Contact;
//This application is using app-create-react boilerplate code.


import React, { Component } from 'react';
import './App.css';
import Header from './component/Header';
import MainForm from './component/Form';
import TicketList from './component/ticket_list';

//Main container of the application
class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      tickets:[], //an array of all the tickets - each ticket is an object.
    };
    console.log("Inside app constructor: ",this.state.tickets);//Debugging

  }

  AddTicket =(ticket)=>{ //calling upon the addbtn on the form component.
    var tickets = this.state.tickets.concat(ticket);
    this.setState({tickets});
    console.log('Iside AddTicket function:',this.state.tickets);//Debugging
  }

  DeleteTicket =(removedticket)=>{
    var index = this.state.tickets.indexOf(removedticket);
    console.log('insidedelete',removedticket,index,this.state.tickets);
    var newtickets = this.state.tickets.splice(index,1);
    this.setState({tickets:newtickets});
    console.log('insidedelete-tickets',newtickets);

  }
  render() {
    console.log(this.state.tickets);
        return (
            <div style={{padding: '30px 30px'}}>
            <Header />
            <MainForm AddBtnHandler={ticket => this.AddTicket(ticket)}/>
            <br />
            <div>
            <TicketList tickets={this.state.tickets} onDeleteIssue={removedticket => this.DeleteTicket(removedticket)} />
            </div>
            <br/>
            </div>
        );
    }
}


export default App;

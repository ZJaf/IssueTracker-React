import React, { Component } from 'react';

//Voila the skin of the ticket - which will be filled with the data coming from form submit

class TicketTemplate  extends Component { //defined as class, as the state will change with each user entry.
  constructor(props)
  {
    super(props);
    this.state={
      status: 'open'
      }
  }
changeStatus =() =>{
  this.setState({status:'closed'});
}

render(){
  console.log("inside detail", this.props.ticket.issueId);//Debugging
  return(
    <section className="ticket">
    <div>
        <p>Issue ID:{this.props.ticket.issueId}</p>
        <label className="btn btn-primary btn-sm" id="label"> {this.state.status} </label>
        <h3>{this.props.ticket.issueText}</h3>
        <p><i className="fa fa-clock-o" aria-hidden="true"></i>{this.props.ticket.issuePrio}</p>
        <p><i className="fa fa-user-circle" aria-hidden="true"></i>{this.props.ticket.issueAssignee}</p>
        <br />
        <button className="btn btn-primary" onClick={this.changeStatus}> close </button>
        <button className="btn btn-primary" onClick = {() => this.props.onDeleteIssue(this.props.ticket) }> delete </button>
    </div>
    </section>
  );


}
}

//
// const TicketTemplate =(props)=>{
//   console.log("inside detail", props.issueId);//Debugging
//   var status = 'open';
//   changeStatus=()=>{
//     status = "closed"
//   }
//     return(
//       <section className="ticket">
//       <div>
//           <p>Issue ID:{props.issueId}</p>
//           <label className="btn btn-primary btn-sm" id="label"> {status} </label>
//           <h3>{props.issueText}</h3>
//           <p><i className="fa fa-clock-o" aria-hidden="true"></i>{props.issuePrio}</p>
//           <p><i className="fa fa-user-circle" aria-hidden="true"></i>{props.issueAssignee}</p>
//           <br />
//           <button className="btn btn-primary" onClick={()=>this.status="closed"}> close </button>
//           <button className="btn btn-primary" > delete </button>
//       </div>
//       </section>
//     );
//   }


export default TicketTemplate;

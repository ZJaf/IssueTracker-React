import React from 'react';
import TicketDetail from './ticket_detail';

const TicketList = (props) => {
  console.log("inside ticketlist", props.tickets);//Debugging
    return (
        <div>
        {props.tickets.map((ticket)=>{ //This is awesome mapping function <3
               return (
               <TicketDetail
               key = {ticket.issueId}
               ticket = {ticket}
               onDeleteIssue = {props.onDeleteIssue}
               />
              )
              })
            }
        </div>
          );
  }

export default TicketList;
//
// issueId = {ticket.issueId}
// issueText={ticket.issueText}
// issuePrio={ticket.issuePrio}
// issueAssignee={ticket.issueAssignee} />

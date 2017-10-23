import React, { Component } from 'react';
import uuid from 'uuid';

class MainForm  extends Component { //defined as class, as the state will change with each user entry.
  constructor(props)
    {
      super(props);
      this.state={ // one object with data entry values - will be updated with user entry
            issueId:uuid.v4(),
            issueText:'',
            issuePrio:'low',
            issueAssignee:''};
    }


    SubmitHandler =(event)=>
    {
        event.preventDefault();
        this.props.AddBtnHandler(this.state);
        this.setState({issueId:uuid.v4()});
        console.log(this.state,'Ticket is ready! Ding'); //Debugging
    }


  render(){
    return(
          <form onSubmit={this.SubmitHandler}>
              <label>Issue</label>

                <div className="input-group mb-2 mb-sm-0">
                    <div className="input-group-addon">
                        <i className="fa fa-github" aria-hidden="true"></i>
                    </div>
                    <input type="text" className="form-control" name="InputText" aria-describedby="IssueArea" placeholder="Describe the issue " onChange={event => this.setState({issueText:event.target.value})} />
                </div>
                <label id="exampleFormControlSelect1"> Priority</label>
                <div className="input-group mb-2 mb-sm-0">
                    <div className="input-group-addon">
                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                    </div>
                    <select className="form-control" name="exampleFormControlSelect1" onChange={event => this.setState({issuePrio:event.target.value})}>
                      <option>Low</option>
                      <option>Medium</option>
                      <option>High</option>
                    </select>
              </div>

              <label id="exampleInputAssignee1">Assigned to:</label>
                <div className="input-group mb-2 mb-sm-0">
                    <div className="input-group-addon">
                        <i className="fa fa-user-circle" aria-hidden="true"></i>
                    </div>
                    <input type="text" className="form-control" name="InputAssignee"  aria-describedby="AssigneeArea" placeholder="Enter Person Responsible for" onChange={event => this.setState({issueAssignee:event.target.value})} />

                </div>
                <br />
                <input type="submit" value="Submit" />
            </form>

    );
  }
}


export default MainForm;

import React, { Component, PropTypes } from 'react'
import { DropdownButton, MenuItem } from 'react-bootstrap';

export default class Request extends Component {
  constructor(props){
    super(props);

    this.state = this.props.request;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    console.log('-------current state is ');
    console.log(this.state);
    console.log(this.state.status);

    console.log('passing event on status change ' + e.target.value);
    console.log('passing event on status change ' + e.target.name);

    this.setState(() => ({status: event.target.value}));
  }

  handleStatusUpdate() {
    console.log('-- with in update status ');
    console.log(this.state);
    this.props.onUpdateRequest(this.state);
  }

  render() {
    const { request, onDelete, IsCustomerUser } = this.props
    const reqStatuses = ['pending', 'processing', 'processed']
    return (
      <div className={'row request ' + this.state.status}>
        <div className='col-sm-3'><p>{request.title}</p></div>
        <div className='col-sm-3'>{request.description}</div>
        <div className='col-sm-3'>
          {
            IsCustomerUser && request.status
          }

          {
            !IsCustomerUser &&

              <select name='status' value={this.state.status || ''} onChange={this.handleChange}>
                <option value="pending">pending</option>
                <option value="processing">processing</option>
                <option value="processed">processed</option>
              </select>

          }
        </div>
      <div>
          {
            IsCustomerUser &&
            <button
              className="btn btn-danger"
              onClick={() => onDelete(request.id)}
            >
              Delete
            </button>
          }

          {
            !IsCustomerUser &&
            <button
              className="btn btn-danger"
              onClick={() => this.handleStatusUpdate()}
            >
              Update Status
            </button>
          }
        </div>
      </div>
    )
  }
}

Request.propTypes = {
  request: PropTypes.object.isRequired,
  onUpdateRequest: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

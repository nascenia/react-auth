import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import * as actionCreators from '../actions/api'
import Request from '../components/Request'

class RequestList extends Component {

  render() {
    const { requests } = this.props

    let requesNodes = requests.map(request => {
      return (
        <Request
          key={request.id}
          request={request}
          onUpdateRequest={this.props.onUpdateRequest}
          onDelete={this.props.onDeleteRequest}
          IsCustomerUser={this.props.role === 'customer'}
        />
      )
    })

    return (
      <div className='request-list'>
        <div className="row header">
            <div className='row'>
            <div className='col-sm-3'> Title </div>
            <div className='col-sm-3'>Description </div>
            <div className='col-sm-3'>Status</div>
            <div className='col-sm-3'>Action</div>
            </div>
        </div>
        <div className='body'>
          {requesNodes}
        </div>
      </div>
    )
  }
}

RequestList.propTypes = {
  updateRequest: PropTypes.func.isRequired,
  deleteRequest: PropTypes.func.isRequired,
  role: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
  return { requests: state.requests, role: state.user.role }
}

RequestList = connect(
  mapStateToProps,
  actionCreators
)(RequestList)

export default RequestList

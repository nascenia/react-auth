import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/api'
import Request from '../components/Request'
import RequestForm from './RequestForm'
import RequestList from './RequestList'

class DashBoard extends Component {
  // fetch request
  componentDidMount() {
    this.props.fetchRequests(this.props.jwt);
  }

  handleDeleteRequest(id){
    const param = {
      id: id,
      jwt: this.props.jwt
    }

    this.props.deleteRequest(param);
  }

  handleUpdateRequest(request){
    const param = {
      req: request,
      jwt: this.props.jwt
    }
    console.log(' with in handleUpdateRequest');
    console.log(request);
    this.props.updateRequest(param);
  }

  render() {
    return (
      <div className="App">
        <h1>Your request list</h1>
        <RequestList
          onUpdateRequest={this.handleUpdateRequest.bind(this)}
          onDeleteRequest={this.handleDeleteRequest.bind(this)}
        />
      </div>
    )
  }
}

DashBoard.propTypes = {
  updateRequest: PropTypes.func.isRequired,
  deleteRequest: PropTypes.func.isRequired,
  jwt: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
  return { jwt: state.user.jwt }
}

DashBoard = connect(
  mapStateToProps,
  actionCreators
)(DashBoard)

export default DashBoard

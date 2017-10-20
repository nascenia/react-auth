import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/ui'

class RequestForm extends Component {
  handleSubmit(e) {
    e.preventDefault()
  }

  render() {
    const form = this.props.form
    const { changeDescription, changeTitle, onAddRequest } = this.props

    return (
      <div className="row">
        <form className="form-horizontal" onSubmit={(e) => this.handleSubmit(e)}>
          <div className="form-group col-md-12">
            <textarea
              className="form-control"
              type="textarea"
              placeholder='request description'
              rows="5"
              value={form.description}
              onChange={(e) => changeDescription(e.target.value)}
            />
          </div>
          <div className="form-group col-md-12">
            <input
              className="form-control"
              type="text"
              placeholder='request title'
              value={form.title}
              onChange={(e) => changeTitle(e.target.value)}
            />
          </div>
          <div className="form-group col-md-2">
            <button
              className="btn btn-primary"
              type="submit"
              disabled={form.disabled}
              onClick={() => onAddRequest(form)}>
              Add
            </button>
          </div>
        </form>
      </div>
    )
  }
}

RequestForm.propTypes = {
  onAddRequest: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return { form: state.form }
}

RequestForm = connect(
  mapStateToProps,
  actionCreators
)(RequestForm)

export default RequestForm;

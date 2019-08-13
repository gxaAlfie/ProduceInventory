import React, { Component } from "react"

class Actions extends Component {
  constructor(props){
    super(props)
  }

  renderToggleBatchActions(){
    let text        = this.props.displayBatchActions ? "Disable Batch Action" : "Enable Batch Action"
    let buttonClass = this.props.displayBatchActions ? "alert" : ""
    return(
      <button onClick={this.props.toggleBatchActions} type="button" className={`small button ${buttonClass}`}>{text}</button>
    )
  }

  render(){
    return(
      <div>
        <div className="small button-group">
          {this.renderToggleBatchActions()}
          <button type="button" className="button">Quick View</button>
          <button type="button" className="button alert">Batch Delete</button>
        </div>
      </div>
    )
  }
}

export default Actions

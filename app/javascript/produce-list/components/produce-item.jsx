import React, { Component } from "react"

class ProduceItem extends Component {
  constructor(props){
    super(props)
    this.state = $.extend({}, this.props)
  }

  render(){
    return(
      <div className="small-2">
        <img src={this.props.item.avatar.card.url}/>
        <div className="card-section">
          <div>
            <span>{this.props.item.name}</span>
          </div>
          <div>
            <small className="produce-item-details">Stock: {this.props.item.quantity} {this.props.item.measurement_unit}</small>
          </div>
          <div>
            <small className="produce-item-details">Price Per {this.props.item.measurement_unit}: {parseFloat(this.props.item.price).toFixed(2)}</small>
          </div>
        </div>
      </div>
    )
  }
}

export default ProduceItem

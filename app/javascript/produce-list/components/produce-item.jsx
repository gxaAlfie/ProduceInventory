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
          <div>{this.props.item.name}</div>
          <br/>
          <div>Stock: {this.props.item.quantity} {this.props.item.measurement_unit}</div>
          <div>Price: {parseFloat(this.props.item.price).toFixed(2)}</div>
        </div>
      </div>
    )
  }
}

export default ProduceItem

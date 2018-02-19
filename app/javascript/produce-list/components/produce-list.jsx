import React, {Component} from "react"
import ProduceItem from "./produce-item"

class ProduceList extends Component {
  constructor(props){
    super(props)
    this.state = $.extend({}, this.props)
  }

  renderProduceItems(){
    let produceItems = this.props.produce.map((item, index) => {
      return(
        <a href={`/produce/${item.id}`} key={index} className="produce-item card">
          <ProduceItem item={item}/>
        </a>
      )
    })
    if(produceItems.length){
      return produceItems
    } else {
      return(
        <span>
          No Items Found
        </span>
      )
    }
  }

  render(){
    return(
      <div className="grid-x produce-container">
        {this.renderProduceItems()}
      </div>
    )
  }
}

export default ProduceList

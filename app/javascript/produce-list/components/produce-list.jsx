import React, {Component} from "react"
import ProduceItem from "./produce-item"

class ProduceList extends Component {
  constructor(props){
    super(props)
    this.state = $.extend({}, this.props)
  }

  toggleCheckbox(event){
    if(this.props.displayBatchActions){
      event.preventDefault()
      let matchingCheckbox = $(event.target).parents(".produce-item").find("input[type='checkbox']")
      this.props.handleBatchCheckboxChange(matchingCheckbox.data("itemId"))
    }
  }

  renderBatchActionCheckbox(itemId){
    if(this.props.displayBatchActions){
      return(
        <div className="float-right produce-item-checkbox">
          <input type="checkbox" data-item-id={itemId}/>
        </div>
      )
    }
  }

  renderProduceItems(){
    let produceItems = this.props.produce.map((item, index) => {
      let isChecked = this.props.displayBatchActions && this.props.checkedItems.includes(item.id)
      return(
        <div key={index} className={`produce-item card ${isChecked ? "checked" : "" }`}>
          <a onClick={this.toggleCheckbox.bind(this)} href={`/produce/${item.id}`} className="produce-item-link">
            <ProduceItem item={item}/>
          </a>
          {this.renderBatchActionCheckbox(item.id)}
        </div>
      )
    })
    if(produceItems.length){
      return produceItems
    } else {
      return(
        <span>No Items Found</span>
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

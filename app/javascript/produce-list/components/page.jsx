import React, { Component } from "react"
import ReactDOM from "react-dom"
import ProduceList from "./produce-list"
import Search from "./search"
import Actions from "./actions"

class Page extends Component {
  constructor(props){
    super(props)
    let initialState = {
      displayBatchActions: false,
      checkedItems: []
    }
    this.state = $.extend({}, initialState, this.props)
  }

  filterProduce(newProduceList){
    this.setState({produce: newProduceList})
  }

  handleBatchCheckboxChange(itemId){
    let newCheckedItems = this.state.checkedItems
    if(newCheckedItems.includes(itemId)){
      newCheckedItems = newCheckedItems.filter((checkedId) => { return checkedId != itemId })
    } else {
      newCheckedItems.push(itemId)
    }
    this.setState({checkedItems: newCheckedItems})
  }

  toggleBatchActions(){
    let displayBatchActions = !this.state.displayBatchActions
    let checkedItems        = displayBatchActions ? this.state.checkedItems : []
    this.setState({displayBatchActions: displayBatchActions, checkedItems: checkedItems})
  }

  render(){
    return(
      <div>
        <Search produce={this.state.produce} filterProduce={this.filterProduce.bind(this)}/>
        <Actions {...this.state} toggleBatchActions={this.toggleBatchActions.bind(this)}/>
        <ProduceList {...this.state} handleBatchCheckboxChange={this.handleBatchCheckboxChange.bind(this)}/>
      </div>
    )
  }
}

const main = {
  initialize(){
    let listElement = $(".produce-listing").get(0)
    if(listElement){
      ReactDOM.render(
        <Page produce={JSON.parse(listElement.dataset["produce"])}/>, listElement
      )
    }
  },

  uninitialize(){
    let listElement = $(".produce-listing").get(0)
    if(listElement){
      ReactDOM.unmountComponentAtNode(listElement)
    }
  }
}

export {main}


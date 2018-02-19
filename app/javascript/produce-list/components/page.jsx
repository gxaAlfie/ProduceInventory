import React, { Component } from "react"
import ReactDOM from "react-dom"
import ProduceList from "./produce-list"
import Search from "./search"
import BatchActions from "./batch-actions"

class Page extends Component {
  constructor(props){
    super(props)
    let initialState = {
      initialProduce: this.props.produce
    }
    this.state = $.extend({}, initialState, this.props)
  }

  filterProduce(newProduceList){
    this.setState({produce: newProduceList})
  }

  render(){
    return(
      <div>
        <Search produce={this.state.produce} filterProduce={this.filterProduce.bind(this)}/>
        <BatchActions/>
        <ProduceList produce={this.state.produce}/>
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


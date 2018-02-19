import React, { Component } from "react"

class Search extends Component {
  constructor(props){
    super(props)
    this.state = $.extend({}, this.props)
  }

  filterProduce(){
    let searchValue = $.trim($("#search").val()).toLowerCase()
    let newProduceList = this.state.produce.filter((item) => { return item.name.toLowerCase().includes(searchValue) })
    this.props.filterProduce(newProduceList)
  }

  render(){
    return(
      <div className="grid-x">
        <div className="input-group search-group">
          <div className="input-group-field">
            <input id="search" type="search" placeholder="Search" onChange={this.filterProduce.bind(this)}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Search

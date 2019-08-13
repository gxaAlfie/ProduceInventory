import React, { Component } from "react"

class Search extends Component {
  constructor(props){
    super(props)
    this.state = $.extend({}, this.props)
  }

  filterProduce(event){
    event.preventDefault()
    let searchValue = $.trim($("#search").val()).toLowerCase()
    $.ajax({
      url: "/search",
      method: "POST",
      dataType: "json",
      data: {
        authenticity_token: $("meta[name='csrf-token']").attr("content"),
        text: searchValue
      },
      success: function(data){
        console.log("yes")
      }
    })

    let newProduceList = this.state.produce.filter((item) => { return item.name.toLowerCase().includes(searchValue) })
    this.props.filterProduce(newProduceList)
    $("#search").trigger("focus")
  }

  render(){
    return(
      <div className="grid-x">
        <div className="input-group search-group">
          <div className="input-group-field">
            <input id="search" type="search" placeholder="Search"/>
          </div>
          <div className="input-group-button search-button-container">
            <button className="small button search-button" type="button" onClick={this.filterProduce.bind(this)}>
              <i className="material-icons">search</i>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Search

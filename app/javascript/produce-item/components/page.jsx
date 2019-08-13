import React, { Component } from "react"
import ReactDOM from "react-dom"

class Page extends Component {
  constructor(props){
    super(props)
  }

  changeTab(event){
    event.preventDefault()
    $(".tabs-title, .tabs-panel").removeClass("is-active")
    $(event.target).parents(".tabs-title").addClass("is-active")
    var $relatedTabPanel = $(`${event.target.getAttribute("href")}`)
    $relatedTabPanel.addClass("is-active")
  }

  render(){
    return(
      <div className="grid-x">
        <div className="medium-12 produce-record-banner" style={{ backgroundImage: `url(${this.props.produce.banner.banner_image.url})`}}>
        </div>
        <ul className="tabs menu produce-record-menu" data-smooth-scroll data-magellan>
          <li className="tabs-title is-active">
            <a href="#details" onClick={this.changeTab}>Details</a>
          </li>
          <li className="tabs-title">
            <a href="#logs" onClick={this.changeTab}>Transaction Logs</a>
          </li>
        </ul>
        <div className="medium-12 produce-record-content">
          <div className="tabs-panel is-active" id="details">
            <h3>{this.props.produce.name}</h3>
            <hr className="produce-record-separator"/>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
          <div className="tabs-panel" id="logs">
            <h3>Transaction Logs</h3>
            <hr className="produce-record-separator"/>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.


            </p>
          </div>
        </div>
      </div>
    )
  }
}

const main = {
  initialize(){
    let listElement = $(".produce-record").get(0)
    if(listElement){
      ReactDOM.render(
        <Page produce={JSON.parse(listElement.dataset["produce"])}/>, listElement
      )
    }
  },

  uninitialize(){
    let listElement = $(".produce-record").get(0)
    if(listElement){
      ReactDOM.unmountComponentAtNode(listElement)
    }
  }
}

export {main}

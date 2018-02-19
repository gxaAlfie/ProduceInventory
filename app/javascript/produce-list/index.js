import React from "react"
import { main as ProduceListPage } from "./components/page"

document.addEventListener("turbolinks:before-cache", function(){
  ProduceListPage.uninitialize()
})

document.addEventListener("turbolinks:load", function(){
  ProduceListPage.initialize()
})

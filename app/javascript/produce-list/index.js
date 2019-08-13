import React from "react"
import { main as ProduceListPage } from "./components/page"

$(document).on("turbolinks:before-cache", () => {
  ProduceListPage.uninitialize()
})

$(document).on("turbolinks:load", () => {
  ProduceListPage.initialize()
})

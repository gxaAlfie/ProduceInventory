import React from "react"
import { main as ProduceItemPage } from "./components/page"

$(document).on("turbolinks:before-cache", () => {
  ProduceItemPage.uninitialize()
})

$(document).on("turbolinks:load", () => {
  ProduceItemPage.initialize()
})

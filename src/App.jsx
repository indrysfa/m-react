import React from "react"
import { createRoot } from "react-dom/client"
import Pet from "./Pet"
import SearchParams from "./searchParams"

const App = () => {
    // return React.createElement("div", {}, [
    //     React.createElement("h1", {}, "Adopt Me!"),
    //     React.createElement(Pet, {
    //         name: "Luna",
    //         animal: "Cat",
    //         breed: "British Shorthair",
    //     }),
    // ])
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="Cat" breed="British Shorthair" />
      <Pet name="Stormy" animal="Dog" breed="Labrador" />
      <SearchParams />
    </div>
  )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(React.createElement(App))
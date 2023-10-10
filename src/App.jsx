import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { createRoot } from "react-dom/client"
// import Pet from "./Pet"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import SearchParams from "./searchParams"
import Details from "./Details"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
})

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
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Routes>
          {/* <Pet name="Luna" animal="Cat" breed="British Shorthair" />
            <Pet name="Stormy" animal="Dog" breed="Labrador" /> */}
          {/* <SearchParams /> */}
          <Route path="/details/:petId" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(React.createElement(App))
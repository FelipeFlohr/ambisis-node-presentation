import React from "react"
import ReactDOM from "react-dom/client"
import { MemoryRouter, Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"
import Layout from "./components/layout/Layout"
import "./stylesheets/index.css"
import App from "./views/app/App"
import First from "./views/slides/1/First"
import Second from "./views/slides/2/Second"
import Third from "./views/slides/3/Third"
import Fourth from "./views/slides/4/Fourth"
import Fifth from "./views/slides/5/Fifth"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/1" element={<First />} />
          <Route path="/2" element={<Second />} />
          <Route path="/3" element={<Third />} />
          <Route path="/4" element={<Fourth />} />
          <Route path="/5" element={<Fifth />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
)

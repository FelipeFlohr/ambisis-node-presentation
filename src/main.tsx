import React from "react"
import ReactDOM from "react-dom/client"
import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"
import Layout from "./components/layout/Layout"
import "./stylesheets/index.css"
import App from "./views/app/App"
import First from "./views/slides/1/First"
import Second from "./views/slides/2/Second"
import Third from "./views/slides/3/Third"
import Fourth from "./views/slides/4/Fourth"
import Fifth from "./views/slides/5/Fifth"
import Sixth from "./views/slides/6/Sixth"
import Seventh from "./views/slides/7/Seventh"
import Eighth from "./views/slides/8/Eighth"
import Nineth from "./views/slides/9/Nineth"
import Tenth from "./views/slides/10/Tenth"
import Eleventh from "./views/slides/11/Eleventh"
import Twelfth from "./views/slides/12/Twelfth"
import Thirteenth from "./views/slides/13/Thirteenth"
import Fourteenth from "./views/slides/14/Fourteenth"
import Fifteenth from "./views/slides/15/Fifteenth"
import Sixteenth from "./views/slides/16/Sixteenth"
import Eighteenth from "./views/slides/18/Eighteenth"
import Nineteenth from "./views/slides/19/Nineteenth"
import Seventeenth from "./views/slides/17/Seventeenth"
import Twentieth from "./views/slides/20/Twentieth"
import TwentyFirst from "./views/slides/21/TwentyFirst"
import TwentySecond from "./views/slides/22/TwentySecond"

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
          <Route path="/6" element={<Sixth />} />
          <Route path="/7" element={<Seventh />} />
          <Route path="/8" element={<Eighth />} />
          <Route path="/9" element={<Nineth />} />
          <Route path="/10" element={<Tenth />} />
          <Route path="/11" element={<Eleventh />} />
          <Route path="/12" element={<Twelfth />} />
          <Route path="/13" element={<Thirteenth />} />
          <Route path="/14" element={<Fourteenth />} />
          <Route path="/15" element={<Fifteenth />} />
          <Route path="/16" element={<Sixteenth />} />
          <Route path="/17" element={<Seventeenth />} />
          <Route path="/18" element={<Eighteenth />} />
          <Route path="/19" element={<Nineteenth />} />
          <Route path="/20" element={<Twentieth />} />
          <Route path="/21" element={<TwentyFirst />} />
          <Route path="/22" element={<TwentySecond />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
)

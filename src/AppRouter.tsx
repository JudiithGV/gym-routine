import React from "react"
import { FC } from "react"
import { Route, Routes } from "react-router-dom"
import Homepage from "./components/Homepage/Homepage"
import Routines from "./components/Routines"
import Metrics from "./components/Metrics/Metrics"

const AppRouter: FC = () => (
  <Routes>
    <Route path="" element={<Homepage />} />
    <Route path="routines" element={<Routines/>} />
    <Route path="metrics" element={<Metrics />} />
  </Routes>
)

export default AppRouter
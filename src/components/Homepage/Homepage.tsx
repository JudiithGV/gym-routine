import React from "react"
import { useNavigate } from "react-router-dom"

const Homepage = () => {
    const navigate = useNavigate()

    return (
    <div className="App">
      <h1>
        GYM Routine
      </h1>
      <button onClick={() => navigate("/routines")} >
        All routines
      </button>
      <button onClick={() => navigate("/metrics")} >
        Historical metrics
      </button>

      {/* TODO: Think about if it's worth to show the last routine done or last metrics introduced
                I'm open to ideas (only me xDDDDD) */}
    </div>
    )
}
export default Homepage
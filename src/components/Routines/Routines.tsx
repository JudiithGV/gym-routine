import React from "react"
import { addDoc, collection } from "@firebase/firestore"
import { firestore } from "../../firebase/firebase"
import { useNavigate } from "react-router-dom"

const Routines = () => {
  const navigate = useNavigate()

  const handleSubmit = () => {
    const ref = collection(firestore, "test_data") // Firebase creates this automatically
    const testdata = "hola"

    let data = {
      testData: testdata
    }
    
    try {
      addDoc(ref, data)
    } catch(err) {
      console.log(err)
    }
    }
  return(
    <>
      <h1>Routines</h1>
      <button onClick={handleSubmit} >Test</button>
      <button onClick={() => navigate("new-routine")}>New routine</button>
    </>
    )
}

export default Routines
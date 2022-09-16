import { useEffect, useState } from "react";
import "./App.css"
//TODO import DisplayUsers componet here

const API_URL = "https://wger.de/api/v2/exerciseinfo/"

const App = () => {
  const [exercise, setExercise]= useState()

  useEffect (() =>{
    searchExercises()
  },[])

  const searchExercises = async () => {
    const req = await fetch(`${API_URL}`)
    const res = await req.json()
    // console.log(res.results)
    setExercise(res.results)
  }

  return (
    <div className="app">
      { exercise?.length > 0
        ?(
          <div className="container">
            {exercise.map(({name, description, id}) => (
              <div className="exercise">
                <h1 key={id}>Name of exercise {name}</h1>
                <p key={id}>{description}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No exercises found</h2>
          </div>
        )
      }
    </div>
  )
}

export default App;


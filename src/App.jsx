import { useState } from 'react'
import './App.css'

function App() {
  const [firstname, setFirstname] = useState('')
  const [email, setEmail] = useState('')
  const [people, setPeople] = useState([])
function handleSubmit(e) {
  e.preventDefault()
  if (firstname && email) {
    const person = {firstname, email}
    setPeople(people =>{
      return [...people, person]
    });
    // console.log(person);
    console.log(people);
  }
  setFirstname('')
  setEmail('')
}
  return (
    <>
      <form action="#" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="firstname">Name : </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div className="form-control" style={{ marginTop: "20px" }}>
          <label htmlFor="email">Email : </label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          style={{
            backgroundColor: "red",
            padding: "5px 10px",
            marginTop: "8px",
          }}
        >
          Add Person
        </button>
      </form>
    </>
  );
}

export default App

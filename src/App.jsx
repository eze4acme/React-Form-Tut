import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
function handleSubmit(e) {
  e.preventDefault()
  console.log('submitted');
  console.log(e);
}

  return (
    <>
      <form action="#" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="firstname">Name : </label>
          <input type="text" id="firstname" name="firstname" />
        </div>
        <div className="form-control" style={{ marginTop: "20px" }}>
          <label htmlFor="email">Email : </label>
          <input type="text" id="email" name="email" />
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

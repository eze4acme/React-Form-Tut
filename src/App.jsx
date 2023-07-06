import { useState } from 'react'
import './App.css'

function App() {
  // const [firstname, setFirstname] = useState('')
  // const [email, setEmail] = useState('')
  const [people, setPeople] = useState({})
// const ob = {id: 'me,', love: 'me2'}
// console.log({...ob});
 const {firstname, email } = people;
 const id = new Date().getTime().toString();
// console.log(new Date().getTime().toString());
function handleSubmit(e) {
  // console.log(e);
  e.preventDefault()
  const form = new FormData(e.currentTarget)
  // console.log(form);
  const entries = [...form.values()];
  const objData = Object.fromEntries(form)
  // console.log([...objData]);
  setPeople({id,...objData})
  // console.log(objData );
 console.log(people);

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
            // value={firstname}
            // onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div className="form-control" style={{ marginTop: "20px" }}>
          <label htmlFor="email">Email : </label>
          <input
            type="text"
            id="email"
            name="email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          type="submit"
          // onClick={handleSubmit}
          style={{
            backgroundColor: "red",
            padding: "5px 10px",
            marginTop: "8px",
          }}
        >
          Add Person
        </button>
      </form>
          <div>
            <h1>{firstname}</h1>
            <h1>{email}</h1>
          </div>
    </>
  )
}

export default App

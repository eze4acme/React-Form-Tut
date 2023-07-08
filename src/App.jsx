import React, { useReducer } from 'react'
const books = [
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    year: 1988,
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    genre: "Non-fiction",
    year: 2011,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    year: 1960,
  },
  {
    title: "The Power of Now",
    author: "Eckhart Tolle",
    genre: "Self-help",
    year: 1997,
  },
];
  


function App() {
const defaultState = {
  data:books,
}
 const reducer = () => {} 
  const [state, dispatch] = useReducer(reducer, defaultState)
  console.log(state.data);
  const text = "kill";
  const filtered = state.data.filter((ele) => {
    const newEle = {...ele, id: new Date().getTime().toString() };
    console.log(newEle);
    return newEle.title.toLowerCase().includes(text);
    
  });
// console.log(filtered);
  return (
    <div>
      {
        filtered.map(ele =>{
          console.log(ele);
          const {id, title, author, genre, year} = ele
          return (
            <div key={id}>
              <h1>{title}</h1>
              <h3>{author}</h3>
              <p>{genre}</p>
              <span>{year}</span>
            </div>
          );
        })
      }
    </div>
  )
}

export default App
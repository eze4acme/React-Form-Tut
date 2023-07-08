import React from 'react'
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
  const text = 'kill'
  const filter = books.filter((ele) => {
 return  ele.title.toLowerCase().includes(text)
  });
console.log(filter);
function App() {

  return (
    <div>
      {
        filter.map(ele =>{
          const {title, author, genre, year} = ele
          return (
            <div>
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
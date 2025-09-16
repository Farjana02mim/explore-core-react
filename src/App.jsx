import Counter from './counter'
import Batsman from './Batsman'
import Users from './users'
import './App.css'
import { Suspense } from 'react'
import Friends from './Friends'

// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())

const friendsPromise = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())

function App() {
  function handleClick(){
    alert('I am clicked.')
  }

  const handleClick2=()=>{
    alert('I am clicked2.')
  }

  return (
    <>
      
      <h1>Vite + React</h1>
      <Batsman></Batsman>
      {/* <Suspense fallback={<h2>Loading...</h2>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}
  <Suspense fallback={<h2>Loading...</h2>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>

      
      <Counter></Counter>
      <button onClick={handleClick}>click me</button>

      <button onClick={() => handleClick2(5)}>click me</button>

      {/* <button onClick={handleClick2(2)}>click me</button> */}

      {/* <button onClick={function handleClick(){alert('I am clicked.')}}>click me now</button> */}


      {/* <Person></Person>
      <Person></Person>
      <Person></Person> */}
    </>
  )
}

function Person (){
  const age = 17;
  return(
    <p>I am a function {age}</p>
  )
}

export default App


// npm run dev
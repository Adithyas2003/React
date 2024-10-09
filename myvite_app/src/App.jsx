import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <h2>count {count}</h2>
//         <button onClick={() => setCount((count) => count + 1)}>
//           +
          
//         </button>
//         <button onClick={() => count>0 && setCount((count) => count - 1)}>
//           -
//         </button>
//       </div>
      
//     </>
//   )
// }
function App() {
  const data=[
    {id:1,name:'anju',age:18},
    {id:2,name:'manju',age:19},
    {id:3,name:'kunju',age:20},

    

  ]

  return (
    <>
      
      <h1>Student Details</h1>
      <table>
        <thead>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
        </thead>
        <tbody>
          {data.map((element)=>(
            <tr key ={element.id}>
              <td>{element.id}</td>
              <td>{element.name}</td>
              <td>{element.age}</td>
            </tr>

          ))}
        </tbody>
      </table>
      
      
    </>
  )
}

export default App

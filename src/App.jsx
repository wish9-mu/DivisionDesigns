import { useState } from 'react'
import './App.css'
import Layout from './components/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
      <div className="home-content">
        <h1>Welcome to Division Designs</h1>
        <p>This is a basic website template built with React and Vite.</p>

        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default App

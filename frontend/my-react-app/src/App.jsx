import { useState } from 'react'
import './App.css'

const Card = ({title}) => {
  return (
    <div className="card" 
    style={{border: '1px solid #4b5362', padding: '20px', margin: '10px', borderRadius: '10px', minHeight: '100px'}}>
      <h2>{title}</h2>
    </div>
  )
}

const App = () => {
  return (
    <div className="card-container">
      <h2>Functional Card Component</h2>
      <Card title="Marvel" />
      <Card title="Star Wars" />
      <Card title="Avatar" />
    </div>
    )
}

export default App

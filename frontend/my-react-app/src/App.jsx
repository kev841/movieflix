import { useState, useEffect } from 'react';
import './App.css'

const Card = ({title}) => {
  const [HasLiked, SetHasLiked] = useState(false);
  const [count, setCount] = useState(0);

  useEffect( () => {
    console.log(`${title} has been liked: ${HasLiked}`);
  });
  return (
    <div className="card" onClick={() => setCount(count + 1)}>
      <h2>{title}</h2>
      <p>Likes: {count  || null}</p>

      <button onClick={() => SetHasLiked(!HasLiked)}>
        {HasLiked ? 'Liked' : 'Like'}
      </button>
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

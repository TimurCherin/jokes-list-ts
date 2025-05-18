import React, { useEffect, useState } from 'react';
import JokesList from './components/JokesList/JokesList';
import { JokeType } from './components/Joke/Joke';

const App: React.FC = () => {
  const [jokes, setJokes] = useState<JokeType[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch('https://official-joke-api.appspot.com/jokes/random/20')
      .then((res) => res.json())
      .then((data: JokeType[]) => {
        setJokes(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load jokes');
        setLoading(false);
      });
  }, []);

  const filteredJokes =
    filter === 'all' ? jokes : jokes.filter((j) => j.type === filter);
  const jokeTypes = Array.from(new Set(jokes.map((joke) => joke.type)));

  return (
    <div style={{ maxWidth: 600, margin: '0 auto' }}>
      <h1>Jokes</h1>

      <div style={{ marginBottom: 20 }}>
        <button
          onClick={() => setFilter('all')}
          style={{
            marginRight: 8,
            backgroundColor: filter === 'all' ? 'orange' : '#eee',
            color: filter === 'all' ? 'white' : 'black',
            border: 'none',
            padding: '8px 16px',
            borderRadius: 4,
            cursor: 'pointer',
          }}
        >
          All
        </button>

        {jokeTypes.map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            style={{
              marginRight: 8,
              backgroundColor: filter === type ? 'green' : '#eee',
              color: filter === type ? 'white' : 'black',
              border: 'none',
              padding: '8px 16px',
              borderRadius: 4,
              cursor: 'pointer',
              textTransform: 'capitalize',
            }}
          >
            {type}
          </button>
        ))}
      </div>

      {loading && <p>Loading jokes...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <JokesList jokes={filteredJokes} />
    </div>
  );
};

export default App;

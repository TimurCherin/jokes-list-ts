import React from 'react';

export type JokeType = {
  id: number;
  type: string;
  setup: string;
  punchline: string;
};

type Props = {
  joke: JokeType;
};

const Joke: React.FC<Props> = ({ joke }) => {
  return (
    <li
      style={{
        border: '1px solid #ddd',
        marginBottom: 10,
        padding: 10,
        borderRadius: 4,
        backgroundColor: '#f9f9f9',
      }}
    >
      <p><b>Type:</b> {joke.type}</p>
      <p><b>Setup:</b> {joke.setup}</p>
      <p><b>Punchline:</b> {joke.punchline}</p>
    </li>
  );
};

export default Joke;

import React from 'react';
import Joke, { JokeType } from '../Joke/Joke';

type Props = {
  jokes: JokeType[];
};

const JokesList: React.FC<Props> = ({ jokes }) => {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {jokes.map((joke) => (
        <Joke key={joke.id} joke={joke} />
      ))}
    </ul>
  );
};

export default JokesList;

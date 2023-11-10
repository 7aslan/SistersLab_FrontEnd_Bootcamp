import React, { useEffect, useState } from 'react';

const RandomPost = () => {
  const [character, setCharacter] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRandomCharacter = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character/' + Math.floor(Math.random() * 671));

        if (!response.ok) {
          throw new Error('Network response is not ok');
        }

        const data = await response.json();
        setCharacter(data);
      } catch (error) {
        setError('Something went wrong');
      }
    };

    fetchRandomCharacter();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Rastgele Karakter</h2>
      <p>Name: {character.name}</p>
      <p>Status: {character.status}</p>
    </div>
  );
};

export default RandomPost;

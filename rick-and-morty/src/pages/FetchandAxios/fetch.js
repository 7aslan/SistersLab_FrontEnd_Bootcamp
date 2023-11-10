export const fetchCharactersWithFetch = async () => {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      return data.results;
    } catch (error) {
      throw new Error('Error fetching characters with Fetch: ' + error.message);
    }
  };
  
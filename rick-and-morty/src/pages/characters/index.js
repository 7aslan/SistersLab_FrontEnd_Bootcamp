import { useEffect, useState } from 'react';
import { fetchCharacters } from '../api';
import {
  Button,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  const getCharacters = async () => {
    const characters = await fetchCharacters();
    setCharacters(characters);
    setFilteredCharacters(characters);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  const handleSearch = () => {
    const filteredSearch = characters.filter((character) =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCharacters(filteredSearch);
  };
  

  return (
    <Stack spacing={2}>
      <TextField
        label="Search Character"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onBlur={handleSearch}
      />
      <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
        {filteredCharacters.map((character) => (
          <Card key={character.id} sx={{ width: '150px' }}>
            <CardMedia component="img" alt="character" height="140" image={character.image} />
            <CardContent>
              <Typography variant="h5" component="div">
                {character.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {character.gender} {character.status}
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon color="error" />
              </IconButton>
              <Button size="small" variant="text">
                Details
              </Button>
            </CardActions>
          </Card>
        ))}
      </Stack>
    </Stack>
  );
};

export default Characters;

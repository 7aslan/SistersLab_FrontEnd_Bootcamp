import { useEffect , useState } from "react";
import { fetchCharacters } from "../api";
import CharacterCard from "../CharacterCard/CharacterCard";
import { Autocomplete, Stack, TextField } from "@mui/material";

import FavoriteIcon from '@mui/icons-material/Favorite';



const Characters = () =>{
    const [characters, setCharacters] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState(null);
  
    
    const getCharacters = async () =>{  
      const characters = await fetchCharacters();
      setCharacters(characters);         
    };

    useEffect(()=>{
        getCharacters();
    },[]);

    const handleCharacterSelect = (e, value) => {
        setSelectedCharacter(value);
      };
      console.log('selectedCharacter :>> ', selectedCharacter);
    
      const filteredCharacters = selectedCharacter
        ? characters.filter((character) => character.id === selectedCharacter.id)
        : characters;

    return (
        <Stack spacing={2}>
        <Autocomplete
          id="combo-box"
          options={characters}
          getOptionLabel={(character) => character.name}
          onChange={handleCharacterSelect}
          sx={{ width: 300 }}
          size="small"
          renderInput={(params) => <TextField {...params} label="Character" />}
        />
        <Stack
          spacing={{ xs: 1, sm: 2 }}
          direction="row"
          useFlexGap
          flexWrap="wrap"
        >
          {filteredCharacters.map((character) => (
            <CharacterCard key={character.id} character={character} />
             
          ))}
        </Stack>
      </Stack>
    );
  };
  
export default Characters;

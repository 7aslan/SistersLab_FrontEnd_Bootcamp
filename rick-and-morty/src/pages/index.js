import { Stack } from "@mui/material";
import Characters from "./characters";
import RandomPost from "./RandomPost/randomPost";

const Home = () => {
  return (

    <Stack spacing={1}>
        <h1>Rick and Morty Characters</h1>  
      <RandomPost/>
    </Stack>
        
    
  );
};

export default Home;
import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import axios from "axios";
import Grid from "@mui/material/Grid";
import CharacterCard from "../components/CharacterCard";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InfiniteScroll from "react-infinite-scroll-component";

const Home = () => {
  // to store the data coming from the characters api
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1); //setting the default page number to zero

  useEffect(() => {
    // calling the fetchData function which is responsible for calling api
    fetchData();
  }, []);

  const fetchData = async () => {
    let result = await axios.get(
      `https://rickandmortyapi.com/api/character?page=${pageNumber}`
    );

    // Concatenating the data
    setData([...data, ...result.data.results]);
    setPageNumber(pageNumber + 1); //Updating the page number
  };

  return (
    <div className="home">
      <Container>
        <Typography
          color="text.light"
          align="center"
          gutterBottom
          variant="h4"
          component="div"
        >
          The Rich and Morty API
        </Typography>

        {/* Infinite scrolling logic */}
        <InfiniteScroll
          dataLength={data.length}
          next={fetchData}
          hasMore={true}
          loader={<p>Loading...</p>}
          // endMessage={<p>No more data to load.</p>}
        >
          <Grid container spacing={2}>
            {
              //displaying cards for each of the character
              data.map((character) => {
                return (
                  <Grid key={character.id} item xs={12} sm={6} md={6} lg={4}>
                    <CharacterCard character={character} />
                  </Grid>
                );
              })
            }
          </Grid>
        </InfiniteScroll>
      </Container>
    </div>
  );
};

export default Home;

import * as React from "react";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import axios from "axios";
import EpisodeAccordion from "./EpisodeAccordion";
import LocationAccordion from "./LocationAccordion";

// Card for displaying Characters Information
export default function CharacterCard({ character }) {
  const [location, setLocation] = useState({}); // to store location data
  const [episode, setEpisode] = useState({}); // to store episode daata

  // The below function fetches the location data of the character
  const getLocation = async () => {
    let loc = await axios.get(
      `https://rickandmortyapi.com/api/location/${character.id}`
    );
    setLocation(loc.data);
    console.log(loc);
  };

  // The below function fetches all the episodes that features a particular character
  const fetchCharacterEpisodes = async () => {
    console.log("onclid");
    try {
      const episodePromises = character.episode.map((url) => axios.get(url));
      const episodeResponses = await Promise.all(episodePromises);
      const episodes = episodeResponses.map((response) => response.data.name);
      setEpisode(episodes);
    } catch (error) {
      console.error("Error fetching character episodes:", error);
      throw error;
    }
  };

  return (
    <Card>
      <CardMedia
        sx={{ height: 300 }}
        image={character.image}
        title="green iguana"
      />
      <CardContent>
        <Typography align="center" variant="h5" component="div">
          {character?.name}
        </Typography>

        <Typography variant="subtitle1" color="text.secondary">
          Gender: {character?.gender}
        </Typography>

        <Typography variant="subtitle1" color="text.secondary">
          Species: {character?.species}
        </Typography>

        <Typography variant="subtitle1" color="text.secondary">
          Status: {character?.status}
        </Typography>

        <Typography variant="subtitle1" color="text.secondary">
          Origin: {character?.origin.name}
        </Typography>
        <div onClick={getLocation}>
          <LocationAccordion location={location} />
        </div>
        <div onClick={fetchCharacterEpisodes}>
          <EpisodeAccordion chapters={episode} />
        </div>
      </CardContent>
    </Card>
  );
}

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

//Display the Accordion which contains the location information of the character
export default function EpisodeAccordion({ location }) {
  return (
    <div style={{ marginBottom: "5px" }}>
      <Accordion>
        <AccordionSummary
          expandIcon={"^"}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Location</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {location ? (
            <>
              <Typography variant="subtitle2">
                Name: {location?.name}
              </Typography>
              <Typography variant="subtitle2">
                Dimension: {location?.dimension}
              </Typography>
              <Typography variant="subtitle2">
                Type: {location?.type}
              </Typography>
              <Typography variant="subtitle2">
                Amount of Residents: {location?.residents?.length}
              </Typography>
            </>
          ) : (
            ""
          )}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

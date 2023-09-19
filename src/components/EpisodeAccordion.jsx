import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

//Display the Accordion which contains the Names of the Chapters where that character is featured
export default function EpisodeAccordion({ chapters }) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={"^"}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Chapters Names</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {chapters.length
            ? chapters?.map((chapter, index) => (
                <Typography key={index} variant="subtitle2">
                  {chapter}
                </Typography>
              ))
            : ""}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

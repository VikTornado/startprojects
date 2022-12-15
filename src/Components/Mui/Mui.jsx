import React from "react";
import { Container } from "react-bootstrap";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Mui = () => {
  return (
    <Container>
      <h1>Mui</h1>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </Container>
  );
};

export default Mui;

// export default function BasicButtons() {
//   return (

//   );
// }

import { Stack, Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex", justifyContent: "center", p: 6 }}>
      <Stack
        display="flex"
        direction="column"
        spacing={3}
        justifyContent="space-evenly"
        alignItems="center"
        width="100%"
        height={{ xs: 400, md: 500, }}
      >
        <Typography
          sx={{
            fontSize: { xs: "1rem", md: "1.2rem" },
            fontWeight: "bold",
            overflow: "hidden",
            color: "#266486",
          }}
        >
          Bienvenue sur Demande-Signale Mairie
        </Typography>
        <img src="/croix.png" width={200} style={{ color: "black" }} />
        <Typography sx={{ fontSize: { xs: "1rem", md: "1.2rem" } }} >Que voulez vous faire ?</Typography>
        <Stack
          direction={"column"}
          justifyContent="center"
          alignItems="center"
          width="100%"
          spacing={1}
        >
          <Button
            onClick={() => navigate("/request")}
            sx={{
              backgroundColor: "#266486",
              color: "white",
              fontWeight: "bold",
              fontSize: { xs: "1rem", md: "1.2rem"},
              width: {xs: "80%", md: "60%"},
              height:  {xs: 45, md: 50},
              borderRadius: 10,
              ":hover": {
                backgroundColor: "#292E36",
                border: "1px solid #266486",
              }

            }}
          >
            DEMANDEZ
          </Button>
          <Typography
            sx={{
              fontSize: { xs: "1em" },
              fontWeight: "bold",
              overflow: "hidden",
            }}
          >
            OU
          </Typography>
          <Button
            variant="outlined"
            sx={{
              color: "#d21b33",
              fontWeight: "bold",
              fontSize: { xs: "1rem", md: "1.2rem"},
              width: {xs: "80%", md: "60%"},
              height:  {xs: 45, md: 50},
              borderColor: "#d21b33",
              borderRadius: 10,
              ":hover": {
                backgroundColor: "#AC7076",
                border: "1px solid #AC7076",
                color: "white",
              }
            }}
          >
            SIGNALEZ
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Home;

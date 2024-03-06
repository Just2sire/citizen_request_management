import {
  Button,
  Typography,
  Box,
  Grid,
  Divider,
  Stack,
} from "@mui/material";
import currentDate from "../../utils/currentDate";
import { useMemo, } from "react";

const SubAdmin = () => {
  const date = currentDate();

  const dashboardData = useMemo( () => [
    {
      number: 3,
      description: "Demandes en attente",
      color: "#dee8ed",
    },
    {
      number: 61,
      description: "En cours de traitement",
      color: "#d7e6e2",
    },
    {
      number: 4,
      description: "Demandes terminés",
      color: "#fff9e1",
    },
    {
      number: 35,
      description: "Nombre d'agents",
      color: "#f7d8dc",
    },
  ], []);

  return (
    <Grid container flexDirection="row" height={"100%"} width={"100%"} alignItems={{xs: "center", md: "start"}} justifyContent={"center"}>
      <Grid
        item
        flexDirection="column"
        display={{xs: 'none', md: "flex"}}
        xs={4}
        md={3}
        backgroundColor={"#156c56"}
        sx={{
          height: {md: "calc(100vh - 64px)"},
          // flex: 1,
        }}
      >
        <Divider
          sx={{ color: "white", borderWidth: 1.5, borderColor: "white" }}
        />
        <SideItem title={"STATISTIQUES"} onClick={() => {}} />
        <Divider
          sx={{ color: "white", borderWidth: 1.5, borderColor: "white" }}
        />
        <SideItem title={"LES TACHES"} onClick={() => {}} />
        <Divider
          sx={{ color: "white", borderWidth: 1.5, borderColor: "white" }}
        />
        <SideItem title={"DOMAINES"} onClick={() => {}} />
        <Divider
          sx={{ color: "white", borderWidth: 1.5, borderColor: "white" }}
        />
        <SideItem title={"SERVICES"} onClick={() => {}} />
        <Divider
          sx={{ color: "white", borderWidth: 1.5, borderColor: "white" }}
        />
        <SideItem title={"AGENTS"} onClick={() => {}} />
        <Divider
          sx={{ color: "white", borderWidth: 1.5, borderColor: "white" }}
        />
        <SideItem title={"RESSOURCES"} onClick={() => {}} />
        <Divider
          sx={{ color: "white", borderWidth: 1.5, borderColor: "white" }}
        />
        <SideItem title={"PROFILS"} onClick={() => {}} />
        <Divider
          sx={{ color: "white", borderWidth: 1.5, borderColor: "white" }}
        />
        <Box
          display={"flex"}
          flex={1}
          justifyContent={"center"}
          alignItems={"center"}
          //   sx={{
          //     border: "2px solid white",
          //     borderRight: "none",
          //     borderLeft: "none",
          //   }}
          mt={1}
        >
          <Button
            variant="contained"
            sx={{
              color: "white",
              backgroundColor: "#d21b33",
              mt: 2,
              width: { xs: "70%", md: "50%" },
              height: 40,
              borderRadius: 1,
              fontWeight: "bold",
              fontSize: { xs: "0.5rem", md: "1rem" },
            }}
          >
            Deconnexion
          </Button>
        </Box>
      </Grid>
      <Grid
        item
        // height={"calc(100vh - 64px)"}
        xs={12}
        md={9}
        // backgroundColor={"whiteSmoke"}
        p={{xs: 3, md: 5}}
        flexDirection={"column"}
      >
        <Stack direction="row" spacing={2}>
          <Typography
            sx={{
              fontSize: { xs: "0.95rem", md: "1.3rem" },
              fontWeight: "bold",
              overflow: "hidden",
              color: "#266486",
            }}
          >
            Tableau de bords
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "0.95rem", md: "1.3rem" },
              fontWeight: "bold",
              overflow: "hidden",
              color: "#d21b33",
            }}
          >
            {date}
          </Typography>
        </Stack>
        <Grid
          container
          flexDirection={{ xs: "column", md: "row" }}
          spacing={2}
          pt={3}
        >
          {dashboardData.map(({ color, number, description }, id) => {
            return (
              <Grid
                key={id}
                xs={12}
                md={5}
                m={2}
                p={3}
                display={"flex"}
                item
                sx={{
                  justifyContent: "space-around",
                  alignItems: "center",
                  flexDirection: "column",
                  backgroundColor: color,
                  //   border: "1px solid red",
                  height: { xs: 50, md: 250 },
                  borderRadius: { xs: 1, md: 1 },
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "1.4rem", md: "2rem" },
                    fontWeight: "bold",
                  }}
                >
                  {number}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "1rem", md: "1.3em" },
                    fontWeight: "bold",
                  }}
                >
                  {description}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

const SideItem = ({ title }) => {
  return (
    <Box
      display={"flex"}
      height={"10%"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        cursor: "pointer",
        // border: "2px solid white",
        // borderRight: "none",
        // borderLeft: "none",
      }}
      //   my={1}
    >
      <Typography
        color={"white"}
        sx={{
          fontWeight: "bold",
          overflow: "hidden",
          fontSize: { xs: "0.8rem", md: "1.2rem" },
        }}
      >
        {" "}
        {title}{" "}
      </Typography>
    </Box>
  );
};

export { SideItem };
export default SubAdmin;

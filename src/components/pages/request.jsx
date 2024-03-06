import {
  Stack,
  Typography,
  Box,
  TextField,
  MenuItem,
  InputAdornment,
  Button,
} from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Request = () => {
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      navigate("/subadmin");
    },
    [navigate]
  );
  return (
    <Box sx={{ display: "flex", justifyContent: "center", p: 6 }}>
      <Stack
        display="flex"
        direction="column"
        spacing={3}
        justifyContent="center"
        alignItems="start"
        width={{xs: "90%",md:"40%"}}
      >
        <Typography
          variant="h6"
          sx={{
            // fontSize: { xs: "1em" },
            fontWeight: "bold",
            overflow: "hidden",
            color: "#266486",
          }}
        >
          Formulaire de demande
        </Typography>
        <Box width={"100%"} onSubmit={handleSubmit} component="form">
          <Stack direction={"column"} spacing={2} width={"100%"}>
            <Stack direction={"column"} width={"100%"}>
              <Typography
                sx={{
                  fontSize: { xs: "1em" },
                  fontWeight: "500",
                  overflow: "hidden",
                }}
              >
                Mairie
              </Typography>
              <TextField
                variant="filled"
                select
                required
                sx={{ backgroundColor: "#e9f5f4" }}
              >
                <MenuItem value={"1"}> {"1"} </MenuItem>
                <MenuItem value={"2"}> {"2"} </MenuItem>
                <MenuItem value={"3"}> {"3"} </MenuItem>
                <MenuItem value={"4"}> {"4"} </MenuItem>
              </TextField>
            </Stack>
            <Stack direction={"column"} width={"100%"}>
              <Typography
                sx={{
                  fontSize: { xs: "1em" },
                  fontWeight: "500",
                  overflow: "hidden",
                }}
              >
                Domaine
              </Typography>
              <TextField
                variant="filled"
                select
                required
                sx={{ backgroundColor: "#e9f5f4" }}
              >
                <MenuItem value={"1"}> {"1"} </MenuItem>
                <MenuItem value={"2"}> {"2"} </MenuItem>
                <MenuItem value={"3"}> {"3"} </MenuItem>
                <MenuItem value={"4"}> {"4"} </MenuItem>
              </TextField>
            </Stack>
            <Stack direction={"column"} width={"100%"}>
              <Typography
                sx={{
                  fontSize: { xs: "1em" },
                  fontWeight: "500",
                  overflow: "hidden",
                }}
              >
                Requete
              </Typography>
              <TextField
                variant="filled"
                select
                required
                sx={{ backgroundColor: "#e9f5f4" }}
              >
                <MenuItem value={"1"}> {"1"} </MenuItem>
                <MenuItem value={"2"}> {"2"} </MenuItem>
                <MenuItem value={"3"}> {"3"} </MenuItem>
                <MenuItem value={"4"}> {"4"} </MenuItem>
              </TextField>
            </Stack>
            <Stack direction={"column"} width={"100%"}>
              <Typography
                sx={{
                  fontSize: { xs: "1em" },
                  fontWeight: "500",
                  overflow: "hidden",
                }}
              >
                Localisation
              </Typography>
              <TextField
                variant="filled"
                required
                sx={{ backgroundColor: "#e9f5f4" }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <AdjustIcon sx={{ color: "#d21b33" }} />
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>
            <Stack direction={"column"} width={"100%"}>
              <Typography
                sx={{
                  fontSize: { xs: "1em" },
                  fontWeight: "500",
                  overflow: "hidden",
                }}
              >
                Details
              </Typography>
              <TextField
                variant="filled"
                required
                sx={{ backgroundColor: "#e9f5f4" }}
                multiline={true}
              />
            </Stack>
            <Stack
              direction="row"
              justifyContent="start"
              alignItems="end"
              spacing={2}
              pt={3}
            >
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#156c56",
                  fontWeight: "bold",
                  ":hover": { backgroundColor: "#FFCD2C" },
                }}
              >
                SOUMETTRE
              </Button>
              <Typography
                sx={{ color: "#d21b33", fontWeight: "bold", cursor: "pointer" }}
              >
                Retour
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Request;

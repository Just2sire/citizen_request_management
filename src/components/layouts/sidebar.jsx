import {
  Drawer,
  Button,
  IconButton,
  Toolbar,
  Box,
  Grid,
  Divider,
  Stack,
} from "@mui/material";
import { useCallback, useContext, useEffect } from "react";
import { DrawerContext } from "../../utils/context";
import { SideItem } from "../pages/subadmin";
import { MenuOpen } from "@mui/icons-material";

const Sidebar = () => {
  const { isOpen, setIsOpen } = useContext(DrawerContext);

  useEffect(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const closeDrawer = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);
  return (
    <Drawer open={isOpen} anchor={"left"} onClose={closeDrawer}>
      <Stack direction={"column"} width={{xs: 250, md: 400}}>
        <Toolbar sx={{ justifyContent: 'end', backgroundColor: "#156c56" }}>
          <IconButton color="white" onClick={closeDrawer} >
            <MenuOpen sx={{ color: "white", fontSize: {xs: "1.7rem", md: "2rem"} }} />
          </IconButton>
        </Toolbar>
        <Grid
          item
          flexDirection="column"
          display={{ xs: "flex" }}
          xs={4}
          md={3}
          backgroundColor={"#156c56"}
          sx={{
            height: { xs: "calc(100vh - 56px)", md: "calc(100vh - 64px)" },
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
                fontSize: { xs: "0.8rem", md: "1rem" },
              }}
            >
              Deconnexion
            </Button>
          </Box>
        </Grid>
      </Stack>
    </Drawer>
  );
};

export default Sidebar;

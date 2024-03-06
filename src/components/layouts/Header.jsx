import { AppBar, Grid, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useCallback, useContext } from "react";
import { DrawerContext } from "../../utils/context";
import Screen from "../../utils/screenSize";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(DrawerContext);

  const toggleDrawer = useCallback(() => {
    console.log(isOpen);
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);

  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ bgcolor: "#156c56" }}>
          <Grid
            container
            my={1}
            sx={{ justifyContent: "start", alignItems: "center" }}
          >
            <IconButton
              sx={{
                display: { xs: "flex" },
              }}
              size="large"
              onClick={toggleDrawer}
            >
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>
            {/* <Screen /> */}
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;

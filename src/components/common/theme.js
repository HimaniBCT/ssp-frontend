import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    heading: {
      fontSize: "1.25rem",
      fontWeight: 600,
      textAlign: "left",
      marginTop: "6rem",
      "@media (min-width:600px)": {
        fontSize: "2rem",
        marginTop: "10rem",
      },
    },
    subHeading: {
      lineHeight: 1.6,
      fontSize: " 0.875rem",
      fontWeight: 400,
      "@media (min-width:600px)": {
        fontSize: "1.25rem",
      },
    },
    subHeading1: {
      lineHeight: 1.6,
      fontSize: "0.875rem",
      fontWeight: 400,
      "@media (min-width:600px)": {
        fontSize: "0.875rem",
      },
    },
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          color: "white",
          backgroundColor: "rgba(255, 95, 0, 1)",
          "&:hover": {
            backgroundColor: "rgba(255, 95, 0, 0.8)",
          },
          "&.Mui-disabled": {
            color: "rgba(255, 255, 255, 1)",
            boxShadow: "none",
            backgroundColor: "rgba(255, 95, 0, 0.5)",
          },
          borderRadius: 0,
          height: 52,
          fontSize: 16,
          fontWeight: 700,
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          "@media (min-width:700px)": {
            paddingLeft: "57px",
            paddingRight: "24px",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
          boxShadow: "0px 2px 34px 2px rgba(0, 0, 0, 0.08)",
        },
      },
    },
    MuiGrid : {
      styleOverrides: {
        root :{
          "@media (min-width:600px)": {
            paddingLeft: "2rem",
            paddingRight: "2rem"
          },
        }
      }
    }
  },
});

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#1976d2"
        },
        background: {
            default: "#f4f6f8"
        }
    },
    typography: {
        fontFamily: "Roboto, Arial",
        h4: { fontWeight: 600 },
        h6: { fontWeight: 500 }
    },
    shape: {
        borderRadius: 10
    }
});

export default theme;

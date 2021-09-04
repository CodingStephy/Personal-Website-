import Layout from "./components/Layout";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import { useEffect } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: [
        "Comfortaa",
        "Roboto",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
  });
  // LOADER
  useEffect(() => {
    const removeLoader = () => {
      setTimeout(() => {
        const loader = document.getElementById("loader");
        if (loader) loader.remove();
      }, 4000);
    };

    window.addEventListener("load", removeLoader);
    return () => {
      window.removeEventListener("load", removeLoader);
    };
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Home />
      </Layout>
    </ThemeProvider>
  );
}

export default App;

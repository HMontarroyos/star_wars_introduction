import Routes from "./routes";
import { ThemeProvider } from "styled-components";
import { Theme } from "../src/styles/Theme";
import { FilmProvider } from "./global/context";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <FilmProvider>
        <Routes />
      </FilmProvider>
    </ThemeProvider>
  );
}

export default App;

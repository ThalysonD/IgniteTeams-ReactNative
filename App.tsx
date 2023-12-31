import { ThemeProvider } from "styled-components";
import theme from './src/theme'
import { Groups } from "@screens/Groups/intex";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
    <Groups/>
    </ThemeProvider>
  );
}


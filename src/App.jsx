import "./App.css";
import Form from "./components/Form";
import ToggleTheme from "./components/ToggleTheme";
import ThemeProvider from "./context/ThemeContext";

export default function MyApp() {
  return (
    <ThemeProvider>
      <div>
        <Form />
        <ToggleTheme />
      </div>
    </ThemeProvider>
  );
}


import { useTheme } from "../context/ThemeContext";
import Button from "./Button";
import Panel from "./Panel";


export default function Form() {
  const {setTheme} = useTheme();
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
      <button onClick={() => setTheme("dark")}>Click to Dark Mode</button>
      <button onClick={() => setTheme("light")}> Light Mode</button>
    </Panel>
  );
}

import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// custom hook:
// هرجا یوز تم را فراخوانی کنیم مقادیر تم و ست تم را به ما میدهد
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined)
    throw new Error("ThemeContext was used outside of ThemeProvider");
  return context;
};

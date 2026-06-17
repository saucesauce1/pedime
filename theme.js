import { extendTheme } from "@chakra-ui/react";
export default extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "#F7F4EE",
        color: "#121212",
      },
    },
  },
  colors: {
    primary: "#E0D4EC", 
    secondary: "#F3D8E5", 
    accent: "#E8C872", 
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "Georgia, serif",
    mono: "Menlo, monospace",
  },
});

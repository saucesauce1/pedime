import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
  styles: {
    global: {
      "@keyframes starFall": {
        from: { backgroundPosition: "0px 0px" },
        to: { backgroundPosition: "300px 300px" }, 
      },
      body: {
        backgroundColor: "#F4F3EF",
        backgroundImage: `
          radial-gradient(at 0% 0%, rgba(224, 212, 236, 1) 0px, transparent 60%), 
          radial-gradient(at 100% 0%, rgba(243, 216, 229, 1) 0px, transparent 60%), 
          radial-gradient(at 50% 100%, rgba(232, 200, 114, 0.5) 0px, transparent 70%)
        `,
        backgroundAttachment: "fixed",
        color: "#121212",
      },
      "body::before": {
        content: '""',
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: -1,
        // Magia pura: Un lienzo SVG que dibuja estrellas (✦) en tus 3 colores
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='20' x='10' fill='%23E8C872' font-size='10' opacity='0.8'%3E✦%3C/text%3E%3Ctext y='60' x='80' fill='%23FFFFFF' font-size='8' opacity='0.9'%3E✦%3C/text%3E%3Ctext y='80' x='30' fill='%23E0D4EC' font-size='12' opacity='0.7'%3E✦%3C/text%3E%3Ctext y='40' x='50' fill='%23FFFFFF' font-size='6' opacity='0.8'%3E✦%3C/text%3E%3Ctext y='10' x='70' fill='%23E8C872' font-size='5' opacity='0.6'%3E✦%3C/text%3E%3C/svg%3E")`,
        backgroundSize: "200px 200px",
        animation: "starFall 40s linear infinite",
      }
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
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        padding: 2,
        backgroundColor: "primary.main",
        color: "white",
        height: "3vh",
      }}
    >
      <Typography variant="body1">Footer</Typography>
    </Box>
  );
}

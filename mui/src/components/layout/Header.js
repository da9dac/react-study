import { Box, Typography } from "@mui/material";

export default function Header() {
    return (
        <Box
            component="header"
            sx={{
                width: '100%',
                padding: 2,
                backgroundColor: 'primary.main',
                color: 'white',
                position: 'fixed',
                top: 0,
                zIndex: 1100,
                height: '5vh'
            }}
        >
            <Typography variant="h4">Header</Typography>
        </Box>
    );
}
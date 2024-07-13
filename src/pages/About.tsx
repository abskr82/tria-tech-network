import React from 'react';
import { Typography, Box } from '@mui/material';

const About: React.FC = () => {
    return (
        <Box p={3}>
            <Typography variant="h4" color="rgb(19, 192, 191)">
                About Us
            </Typography>
            <Typography paragraph>
                Welcome to our platform, where we connect companies with pre-vetted developers, streamlining the hiring process and saving valuable time and resources.
            </Typography>
            <Typography paragraph>
                Our mission is to simplify the search for the perfect candidate by providing a curated pool of talented professionals ready to take on new challenges.
            </Typography>
            <Typography paragraph>
                Let us help you find the right developer for your company, so you can focus on what truly matters – growing your business.
            </Typography>
        </Box>
    );
};

export default About;

import React from 'react';
import { Typography, Box } from '@mui/material';

const Services: React.FC = () => {
    return (
        <Box p={3}>
            <Typography variant="h4" color="rgb(19, 192, 191)">
                Our Services
            </Typography>
            <Typography paragraph>
                We offer a variety of services to help companies find the right developers, including:
            </Typography>
            <Typography paragraph>
                - Pre-vetted developer pool
                - Streamlined hiring process
                - Efficient matching algorithm
                - Long-lasting partnerships
            </Typography>
        </Box>
    );
};

export default Services;

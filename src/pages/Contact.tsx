import React from 'react';
import { Typography, Box, TextField, Button } from '@mui/material';

const Contact: React.FC = () => {
    return (
        <Box p={3}>
            <Typography variant="h4" color="rgb(19, 192, 191)">
                Contact Us
            </Typography>
            <Typography paragraph>
                If you have any questions, feel free to reach out to us!
            </Typography>
            <Box component="form" noValidate autoComplete="off">
                <TextField label="Name" fullWidth margin="normal" />
                <TextField label="Email" fullWidth margin="normal" />
                <TextField label="Message" fullWidth margin="normal" multiline rows={4} />
                <Button variant="contained" color="primary" type="submit">
                    Submit
                </Button>
            </Box>
        </Box>
    );
};

export default Contact;

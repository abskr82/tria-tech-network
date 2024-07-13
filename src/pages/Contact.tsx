import React from 'react';
import { Typography, Box } from '@mui/material';
import ContactUsIframe from '../Components/ContactUsIframe';

const Contact: React.FC = () => {
    const iframeUrl = "https://forms.zohopublic.in/triatechnetwork/form/ContactUs/formperma/ZUm1lU5uTKgDQX63hMgI_JBC6ee8KzFmEwOD1EKf6F0";
    return (
        <Box p={3}>
            <Typography variant="h4" color="rgb(19, 192, 191)">
                Contact Us
            </Typography>
            <Typography paragraph>
                If you have any questions, feel free to reach out to us!
            </Typography>
            {/* <Box component="form" noValidate autoComplete="off">
                <TextField label="Name" fullWidth margin="normal" />
                <TextField label="Email" fullWidth margin="normal" />
                <TextField label="Message" fullWidth margin="normal" multiline rows={4} />
                <Button variant="contained" color="primary" type="submit">
                    Submit
                </Button>
            </Box> */}
            <ContactUsIframe iframeSrc={iframeUrl} />

        </Box>
    );
};

export default Contact;

import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const SectionContainer = styled(Box)(({ theme }) => ({
    backgroundColor: 'white',
    padding: theme.spacing(4, 0),
}));

const Title = styled(Typography)(({ theme }) => ({
    color: 'rgb(19, 192, 191)',
    marginBottom: theme.spacing(2),
    fontFamily: '"Poppins", sans-serif',
    fontSize: '36px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '32px',
}));

const Paragraph = styled(Typography)(({ theme }) => ({
    fontFamily: '"Poppins", sans-serif',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '24px',
    marginBottom: theme.spacing(2),
}));

const Image = styled('img')({
    width: '100%',
    height: 'auto',
});

const AboutUsSection: React.FC = () => {
    return (
        <SectionContainer>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item xs={12} md={6}>
                    <Title variant="h2">About Us</Title>
                    <Paragraph variant="body1">
                        Welcome to our platform, where we connect companies with pre-vetted developers, streamlining the hiring process and saving valuable time and resources. Our mission is to simplify the search for the perfect candidate by providing a curated pool of talented professionals ready to take on new challenges.
                    </Paragraph>
                    <Paragraph variant="body1">
                        With our rigorous vetting process, we ensure that only the best developers make it onto our platform, giving companies peace of mind knowing they are getting top-tier talent. Whether you are a startup looking to expand your team or a large corporation in need of specialized skills, we are here to help.
                    </Paragraph>
                    <Paragraph variant="body1">
                        Let us help you find the right developer for your company, so you can focus on what truly matters – growing your business.
                    </Paragraph>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Image
                        src="/path/to/your/image.png" // Replace with your actual image path
                        alt="About Us"
                    />
                </Grid>
            </Grid>
        </SectionContainer>
    );
};

export default AboutUsSection;

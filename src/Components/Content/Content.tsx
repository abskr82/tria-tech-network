import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import backgroundImage from '../../assets/unsplash-image.webp';
import AboutUsSection from './AboutUsSection';
import StatisticsSection from './StatisticsSection';

const Section = styled(Box)(({ theme }) => ({
    position: 'relative',
    height: '670px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
        height: 'auto', // Adjust height for small screens if needed
    },
}));

const BackgroundImage = styled('div')({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    zIndex: 1,
});

const Overlay = styled('div')({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    mixBlendMode: 'normal',
    backgroundColor: 'rgba(29, 29, 29, 0.7)',
    borderRadius: '0px',
    zIndex: 2,
});

const Content = styled(Box)({
    position: 'relative',
    zIndex: 3,
    textAlign: 'center',
    color: 'white',
    padding: '16px',
});

const Title = styled(Typography)({
    fontSize: '65px',
    fontWeight: 'bold',
    '@media (max-width:600px)': {
        fontSize: '40px', // Adjust font size for small screens
    },
});

const Subtitle = styled(Typography)({
    fontSize: '16px',
    marginTop: '20px',
    '@media (max-width:600px)': {
        fontSize: '14px', // Adjust font size for small screens
    },
});

const ContentPage: React.FC = () => {
    return (
        <>
            <Section>
                <BackgroundImage />
                <Overlay />
                <Content>
                    <Title variant="h1">TalentMatch: Perfect Hiring</Title>
                    <Subtitle variant="h6">
                        Unlock top talent faster with our pre-vetted developer matchmaking service for your company's needs.
                    </Subtitle>
                </Content>
            </Section>
            <Container>
                <AboutUsSection />
            </Container>
            <StatisticsSection />
        </>
    );
};

export default ContentPage;

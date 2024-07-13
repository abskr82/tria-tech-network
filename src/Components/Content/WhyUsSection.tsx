import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import img4 from '../../assets/4.webp';

const SectionContainer = styled(Box)(({ theme }) => ({
    marginTop: '16px',
    backgroundColor: '#ffffff',
    padding: theme.spacing(4, 0),
    display: 'flex',
    alignItems: 'center',
}));

const ImageContainer = styled(Box)(({ theme }) => ({
    flex: '1',
    paddingRight: theme.spacing(4),
    textAlign: 'center',
    opacity: 1,
    padding: '0px',
    borderWidth: '0px',
    borderStyle: 'solid',
    borderRadius: '0px',
    boxShadow: 'none',
    borderTop: '20px solid rgb(81, 69, 198)',
    borderLeft: '20px solid rgb(81, 69, 198)',
    backgroundImage: 'none',
    filter: 'none'
}));

const ContentContainer = styled(Box)(() => ({
    flex: '1',
}));

const Title = styled(Typography)(({ theme }) => ({
    display: 'flex',
    color: 'rgb(19, 192, 191)',
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(4),
    justifyContent: 'center',
    fontFamily: '"Poppins", sans-serif',
    fontSize: '36px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '32px',
}));


const WhyUsSection: React.FC = () => {
    const data = [
        {
            header: 'Pre-vetted developers',
            description: 'TalentMatch screens and evaluates developers before they are added to the platform.',
        },
        {
            header: 'Streamlined hiring process',
            description: 'TalentMatch simplifies recruitment by providing a user-friendly platform for easy search, connection, and hiring of developers.',
        },
        {
            header: 'Efficient matching algorithm',
            description: 'TalentMatch utilizes a sophisticated algorithm that matches companies with developers based on their specific needs.',
        },
        {
            header: 'Long-lasting partnerships',
            description: 'Creating lasting relationships between companies and developers for successful collaborations and satisfied clients.',
        },
    ];

    return (
        <>
            <Title variant="h2">Why Us</Title>
            <SectionContainer>

                <ImageContainer>
                    <img src={img4} alt="Why Us" width="100%" />
                </ImageContainer>
                <ContentContainer>
                    <List>
                        {data.map((item, index) => (
                            <ListItem key={index}>
                                <ListItemIcon>
                                    <CheckCircleIcon style={{ color: 'rgb(19, 192, 191)' }} />
                                </ListItemIcon>
                                <ListItemText
                                    primary={
                                        <Typography variant="h6" style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 700 }}>
                                            {item.header}
                                        </Typography>
                                    }
                                    secondary={
                                        <Typography variant="body1" style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 400 }}>
                                            {item.description}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        ))}
                    </List>
                </ContentContainer>
            </SectionContainer>
        </>
    );
};

export default WhyUsSection;

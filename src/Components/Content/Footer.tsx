import React from 'react';
import { Box, Grid, Typography, Link, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const FooterContainer = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.grey[200],
    padding: theme.spacing(4),
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    fontWeight: 500,
}));

const FooterLink = styled(Link)(({ theme }) => ({
    display: 'block',
    marginBottom: theme.spacing(1),
    color: theme.palette.text.primary,
}));

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={3}>
                    <SectionTitle variant="h6">Menu</SectionTitle>
                    <FooterLink href="#">Home Page</FooterLink>
                    <FooterLink href="#">About Us</FooterLink>
                    <FooterLink href="#">Offer</FooterLink>
                    <FooterLink href="#">Pricing</FooterLink>
                    <FooterLink href="#">Portfolio</FooterLink>
                    <FooterLink href="#">Contact</FooterLink>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <SectionTitle variant="h6">Address</SectionTitle>
                    <Typography>123 XYZ Street, City, Country</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <SectionTitle variant="h6">Contact</SectionTitle>
                    <Typography>Email: contact@triatechnetwork.com</Typography>
                    <Typography>Phone: +91-9035525260</Typography>
                    <Typography>Phone: +91-9110497305</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <SectionTitle variant="h6">Follow us</SectionTitle>
                    <IconButton href="https://www.linkedin.com" target="_blank" aria-label="LinkedIn">
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton href="https://www.instagram.com" target="_blank" aria-label="Instagram">
                        <InstagramIcon />
                    </IconButton>
                    <IconButton href="https://www.youtube.com" target="_blank" aria-label="YouTube">
                        <YouTubeIcon />
                    </IconButton>
                    <IconButton href="https://www.whatsapp.com" target="_blank" aria-label="WhatsApp">
                        <WhatsAppIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </FooterContainer>
    );
};

export default Footer;

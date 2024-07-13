import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import img1 from '../../assets/1.webp';
import img2 from '../../assets/2.webp';
import img3 from '../../assets/3.webp';


const SectionContainer = styled(Box)(({ theme }) => ({
    backgroundColor: '#ffffff',
    padding: theme.spacing(4, 0),
    textAlign: 'center',
}));

const ReviewCard = styled(Card)(({ theme }) => ({
    maxWidth: 345,
    margin: 'auto',
    textAlign: 'center',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
}));

const CardImage = styled(CardMedia)(() => ({
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    margin: '0 auto',
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

const reviews = [
    {
        imagePath: img1, // Replace with actual image path
        name: 'Robert Smith',
        review: "TalentMatch helped me find the perfect developer for my team in record time. Highly recommend!"
    },
    {
        imagePath: img2, // Replace with actual image path
        name: 'Angelina Novak',
        review: "I was able to land my dream job through TalentMatch. The process was smooth and efficient, and I couldn't be happier with the opportunity I found."
    },
    {
        imagePath: img3, // Replace with actual image path
        name: 'Adam Brown',
        review: "TalentMatch helped us find the right developers quickly. The platform saved us time and effort, resulting in a strong team."
    },
    {
        imagePath: img1, // Replace with actual image path
        name: 'Robert Jane',
        review: "TalentMatch helped me find the perfect developer for my team in record time. Highly recommend!"
    },
];


const ReviewSection: React.FC = () => {
    return (
        <SectionContainer>
            <Title>
                Reviews
            </Title>
            <Grid container spacing={2}>
                {reviews.map((review, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <ReviewCard>
                            <CardImage image={review.imagePath} title={review.name} />
                            <CardContent>
                                <Typography variant="h6" component="h3">
                                    {review.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {review.review}
                                </Typography>
                            </CardContent>
                        </ReviewCard>
                    </Grid>
                ))}
            </Grid>
        </SectionContainer>
    );
};

export default ReviewSection;

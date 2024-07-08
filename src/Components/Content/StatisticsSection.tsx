import React, { useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const SectionContainer = styled(Box)(({ theme }) => ({
    backgroundColor: 'rgb(229, 233, 241)',
    padding: theme.spacing(4, 0),
}));

const StatContainer = styled(Grid)(({ theme }) => ({
    textAlign: 'center',
    padding: theme.spacing(2),
}));

const StatValue = styled(Typography)(({ theme }) => ({
    fontFamily: '"Poppins", sans-serif',
    fontSize: '48px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '56px',
    marginBottom: theme.spacing(1),
    color: 'rgb(81, 69, 198)',
}));

const StatField = styled(Typography)(({ theme }) => ({
    fontFamily: '"Poppins", sans-serif',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '24px',
}));

const statisticsData = [
    {
        field: 'Specialists',
        value: 12,
    },
    {
        field: 'Completed projects',
        value: 8,
    },
    {
        field: 'Satisfied customers',
        value: 220,
    },
    {
        field: 'Awards received',
        value: 5,
    },
];

const StatisticsSection: React.FC = () => {
    const [ref, inView] = useInView({ triggerOnce: false });

    return (
        <SectionContainer ref={ref}>
            <Grid container spacing={2} justifyContent="center">
                {statisticsData.map((stat) => (
                    <StatContainer item xs={12} sm={6} md={3} key={stat.field}>
                        <StatValue variant="h4">
                            {inView && <CountUp start={1} end={stat.value} duration={2.75} />}
                        </StatValue>
                        <StatField variant="body1">{stat.field}</StatField>
                    </StatContainer>
                ))}
            </Grid>
        </SectionContainer>
    );
};

export default StatisticsSection;

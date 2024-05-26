import React from 'react';
import { Grid, Container, Typography } from '@mui/material';
import ImageCard from './ImageCard';

import CSharp from './Images/csharp.png';
import VSCode from './Images/vscode.png';
import Python from './Images/python.png';
import SQL from './Images/sql.png';

const images = [
    {
        src: CSharp,
        title: 'C#',
        description: 'Язык программирования C#'
    },
    {
        src: VSCode,
        title: 'VSCode',
        description: 'Редактор VSCode'
    },
    {
        src: Python,
        title: 'Python',
        description: 'Язык программирования Python'
    },
    {
        src: SQL,
        title: 'SQL',
        description: 'Язык запросов SQL'
    }
];

function ImageGallery() {
    return (
        <Container maxWidth="md" style={{ marginTop: 50 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Галерея изображений
            </Typography>
            <Grid container spacing={3}>
                {images.map((image, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <ImageCard image={image} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default ImageGallery;

import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

function ImageCard({ image }) {
    return (
        <Card style={{ margin: 10 }}>
            <CardMedia
                component="img"
                height="140"
                image={image.src}
                alt={image.title}
            />
            <CardContent>
                <Typography variant="h6" component="div">
                    {image.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {image.description}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default ImageCard;

import * as React from 'react';
import {Card,CardActions,CardContent,CardMedia,Button,Typography} from '@mui/material';

export default function ImgMediaCard({name,email,website}) {
  return (
    <Card sx={{ maxWidth: 345 ,display:"flex",flexDirection:"column" ,alignItems:"center" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://actualitte.com/uploads/images/joker-2-date-sortie-folie-deux-phoenix-62ebd269c9b5b884192748.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {website}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
      </CardActions>
    </Card>
  );
}

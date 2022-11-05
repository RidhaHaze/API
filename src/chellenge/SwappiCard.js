import {Card,CardActions,CardContent,CardMedia,Button,Typography} from '@mui/material';

export default function ImgMediaCard({name,homeworld,birth_year}) {
  return (
    <Card sx={{ maxWidth: 345 ,display:"flex",flexDirection:"column" ,alignItems:"center" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://www.numerama.com/wp-content/uploads/2021/08/star-wars.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {homeworld}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {birth_year}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
      </CardActions>
    </Card>
  );
}
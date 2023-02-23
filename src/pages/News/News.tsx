import { Box, Grid, Card, CardActionArea, CardMedia, Typography, CardContent, Container, Button } from '@mui/material'
import {useAppDispatch, useAppSelector} from "../../store/hooks/hooks";
import {useEffect} from "react";
import {fetchPhotos} from "../../store/services/photos";
import {IPhoto} from "../../types/photo.types";

const limit = {
  start: 0,
  limit: 6
}

const LoadMoreButton = () => {

  return <Button>Load more</Button>
}

export const News = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchPhotos(limit))
  }, [])
  // const photos: IPhoto[] | [] = []
  const {photos} = useAppSelector(state => state.photos)

  return (
    <Box sx={{flexGrow: 1}} paddingTop={5} paddingBottom={5}>
      <Container>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {photos?.map(({ id, title, url }) => (
            <Grid item xs={2} sm={4} md={4} key={id}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="240"
                    image={url}
                    alt={title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

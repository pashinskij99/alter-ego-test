import {Box, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useAppDispatch, useAppSelector} from "../../store/hooks/hooks";
import LoadingButton from '@mui/lab/LoadingButton';
import {useEffect} from "react";
import {fetchPhotos} from "../../store/services/photos";
import {ILimit, Status} from "../../types/store.types";

const setLimit = (start: number, limit: number): ILimit => ({start, limit})

interface ILoadMoreButton {
  photosLength: number
  loading: Status
}

const LoadMoreButton = ({photosLength, loading}: ILoadMoreButton) => {
  const dispatch = useAppDispatch()

  const handleClick = () => dispatch(fetchPhotos(setLimit(photosLength, 3)))

  return (
    <Box paddingTop={5} style={{textAlign: 'center'}}>
      <LoadingButton
        size="small"
        onClick={handleClick}
        endIcon={<ExpandMoreIcon/>}
        loading={loading === 'pending'}
        loadingPosition="end"
        variant="contained"
      >
        <span>Load more</span>
      </LoadingButton>
    </Box>
  )
}

export const News = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchPhotos(setLimit(0, 6)))
  }, [])

  const {photos, status} = useAppSelector(state => state.photos)

  return (
    <Box sx={{flexGrow: 1}} paddingTop={5} paddingBottom={5}>
      <Container>
        <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 1, sm: 8, md: 12}}>
          {photos?.map(({id, title, url}) => (
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

        <LoadMoreButton photosLength={photos.length} loading={status}/>
      </Container>
    </Box>
  );
}

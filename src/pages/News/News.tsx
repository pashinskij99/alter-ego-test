import {Box, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useAppDispatch, useAppSelector} from "../../store/hooks/hooks";
import LoadingButton from '@mui/lab/LoadingButton';
import {useEffect} from "react";
import {fetchPhotos} from "../../store/services/photos";
import {ILoadMoreButton} from "../../types/constant.types";
import {setLimit} from "../../utils/setLimit";
import {IPhoto} from "../../types/photo.types";
import {SpinnerSvg} from "../../components/IconsComponent";
import {useTranslation} from "react-i18next";

export const News = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchPhotos(setLimit(0, 6)))
  }, [])

  const {photos, status} = useAppSelector(state => state.photos)

  return (
    <Box position='relative' sx={{flexGrow: 1}} paddingTop={5} paddingBottom={5}>
      <Container>

        {photos.length
          ? <>
            <GridNews photos={photos}/>
            <LoadMoreButton photosLength={photos.length} loading={status}/>
          </>
          : <SpinnerSvg />
        }
      </Container>
    </Box>
  );
}

interface IGridNews {
  photos: IPhoto[]
}

const GridNews = ({photos}: IGridNews) => {
  const {t} = useTranslation()

  return (
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
                  {/*{title}*/}
                  {t('cards_title')}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t('cards_description')}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
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

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { ImageListItem } from '@material-ui/core';
import { Card, CardMedia } from '@mui/material'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({movieDetails, resetSelectedMovieDetails}) {
  return (
    <div>
      <Dialog
        open={!!movieDetails}
        TransitionComponent={Transition}
        keepMounted
        onClose={resetSelectedMovieDetails}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{movieDetails?.Title}</DialogTitle>
        <DialogContent>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="194"
              image={movieDetails?.Poster}
              alt="film-poster"
            />
          </Card>
          <DialogContentText>
            Sure: {movieDetails?.Runtime}
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
            Tur: {movieDetails?.Type}
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
            Yonetmen: {movieDetails?.Director}
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
            Oyuncular: {movieDetails?.Actors}
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
            IMDB Puani: {movieDetails?.imdbRating}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={resetSelectedMovieDetails}>Kapat</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Skeleton } from '@mui/material';

const columns = [
  { field: 'imdbID', headerName: 'IMDB Id', width: 130 },
  { field: 'Title', headerName: 'Baslik', width: 200 },
  { field: 'Type', headerName: 'Type', width: 130 },
  { field: 'Year', headerName: 'Year', width: 130 },
];

export default function DataTable({isLoading, movies, totalResult, setPage, page, getSelectedMovieDetails}) {

  if(isLoading || !movies || movies.length === 0) {
    return <Skeleton sx={{ height: 400, width: '100%' }} variant="rectangular" animation="wave"/>
  }

  let copyMovies = [];

  movies.forEach(movie => {
    movie.id = movie.imdbID;
    copyMovies.push(movie);
  });

  const handleChangePage = (event, newPage) => {
    console.log('newPage', newPage)
    setPage(newPage);
  };

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={copyMovies}
        columns={columns}
        pageSize={10}
        count={totalResult}
        rowsPerPageOptions={[10]}
        onRowClick={(e) => getSelectedMovieDetails(e.id)}
        /* page={page}
        onPageChange={handleChangePage} */
      />
    </div>
  );
}
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Skeleton } from '@mui/material';

const columns = [
  { field: 'imdbID', headerName: 'IMDB Id', width: 130 },
  { field: 'Title', headerName: 'Baslik', width: 500 },
  { field: 'Type', headerName: 'Type', width: 130 },
  { field: 'Year', headerName: 'Year', width: 130 },
];

export default function DataTable({isLoading, movies, totalResult, setPage, page, getSelectedMovieDetails}) {
  if(!movies || movies.length === 0) {
    return <Skeleton sx={{ height: 500, width: '100%' }} variant="rectangular" animation="wave"/>
  }
  let copyMovies = [];

  movies.forEach(movie => {

    movie.id = movie.imdbID;
    copyMovies.push(movie);
  });
  

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  return (
    <div style={{ height: 630, width: '100%' }}>
      <DataGrid
        pagination
        rows={copyMovies}
        columns={columns}
        pageSize={10}
        rowCount={Number(totalResult)}
        rowsPerPageOptions={[10]}
        onRowClick={(e) => getSelectedMovieDetails(e.id)}
        onPageChange={handleChangePage}
        paginationMode="server"
        loading={isLoading}
      />
    </div>
  );
}
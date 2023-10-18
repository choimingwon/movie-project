// tmdb API
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzcxMGNlNDc1ZjNlMDIwMzkwZjBiYzc0MDYwNzA3ZSIsInN1YiI6IjY1MmZhZmQxZWE4NGM3MDBjYTEyZjFmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dfrsiunDYQZ9rdePZjzs14Z-zSc_1WRMPnO2BAIZ-Tc'
    }
  };
  
  fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
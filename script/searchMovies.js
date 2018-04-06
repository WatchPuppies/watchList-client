$('#search').click(function() {
  let query = $('#query').val()

  $('#result').load('search_movie.html #result')

  $.ajax({
    url: `http://localhost:3000/show/search/movies/${query}`,
    method: "GET",
    dataType: "JSON",
    success: function(result) { 
      result.movie.forEach(movie => {
        let listgenre = []

        result.genre.forEach(genre => {
          movie.genre_ids.forEach(movieGenreId => {
            if (movieGenreId === genre.id) {
              listgenre.push(genre.name)
            }
          })
        });

        movie.genre = listgenre.join(', ')

        $('#result').append(`
        <tr>
          <td><img style="width:100px;" src="http://image.tmdb.org/t/p/w185/${movie.poster_path}"></td>
          <td>${movie.title}</td>
          <td>Movie</td>
          <td>${movie.genre}</td>
          <td>${movie.vote_average}</td>
          <td>${movie.overview}</td>
          <td>
            <button id="add-to-watchlist-${movie.id}" class="btn btn-sm btn-primary"> + Watchlist</button>
          </td>
        </tr>
        `)

        $(`#add-to-watchlist-${movie.id}`).click(function() {
          axios.post('http://localhost:3000/user/add-movie',
            obj = {
              movieId: movie.id,
            }
          )
          .then(function(response) {
            console.log('add response');
          })
          .catch(function(error) {
            console.log('error response', error.message);
          })
        })
      })
    },
    error: function(err) {
      console.log('error', err.message);
    }

  })
})
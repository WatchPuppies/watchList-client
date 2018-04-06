$('#search').click(function() {
  let query = $('#query').val()

  console.log(query)
  $.ajax({
    url: `http://localhost:3000/show/search/movies/${query}`,
    method: "GET",
    dataType: "JSON",
    success: function(result) {
      console.log(result);  
      
      result.forEach(movie => {
        $('#result').append(`
        <tr>
          <td>${movie.title}</td>
          <td>Movie</td>
          <td>genre</td>
          <td>${movie.vote_average}</td>
          <td>runtime</td>
          <td>${movie.overview}</td>
        </tr>
        `)
      })
    },
    error: function(err) {
      console.log('error', err.message);
      
    }
  })
})
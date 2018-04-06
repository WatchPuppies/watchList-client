$('#search').click(function() {
    let query = $('#query').val()
    $('#result').load('search_anime.html #result')

    $.ajax({
      url: `http://localhost:3000/show/search/anime/${query}`,
      method: "GET",
      dataType: "JSON",
      success: function(result) {  
          console.log(result);    
        result.forEach(anime => {
          $('#result').append(`
          <tr>
            <td><img style="width:100px" src="${anime.image_url_lge}"/></td>
            <td align="center"><b><i>${anime.title_english}</i></b></td>
            <td>Anime</td>
            <td>${anime.genres.join(', ')}</td>
            <td>${anime.average_score}</td>
            <td>${anime.duration} minutes</td>
            <td>${anime.description}</td>
            <td>
              <a class="btn btn-sm btn-primary" href="#">Add Playlist</a>
            </td>
          </tr>
          `)
        })
      },
      error: function(err) {
        console.log('error', err.message);
        
      }
    })
  })
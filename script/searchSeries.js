$('#search').click(function() {
    let query = $('#query').val()


    $('#result').load('search_series.html #result')

    console.log('query', query)
    $.ajax({
        url: `http://localhost:3000/show/search/series/${query}`,
        method: "GET",
        dataType: "JSON",
        success: function(result) {
            console.log('resule', result)
            result.forEach(series => {
                // console.log(series.show.image.medium)

                let image;
                if(series.show.image == null){
                    image = 'no images'
                } else {
                    image = `<img src="${series.show.image.medium}"/>`
                }
                $('#result').append(`
                <tr>
                  <td>${image}</td>
                  <td>${series.show.name}</td>
                  <td>Series</td>
                  <td style="width:100px;">${series.show.genres}</td>
                  <td>${series.show.rating.average}</td>
                  <td>${series.show.runtime} min</td>
                  <td>${series.show.summary}</td>
                  <td>
                    <a class="btn btn-sm btn-primary" href="#">Add Playlist</a>
                  </td>
                </tr>
                `)
            });
        },
        error: function(err) {
          console.log('error', err.message);
          
        }
    })

})